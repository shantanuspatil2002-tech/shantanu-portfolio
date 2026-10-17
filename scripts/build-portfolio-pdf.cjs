const { spawn } = require('child_process')
const fs = require('fs')
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const URL = process.argv[2] || 'http://localhost:5199/?print'
const OUT = process.argv[3]
const W = 1280
const H = Number(process.argv[4] || 1810)

;(async () => {
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--remote-debugging-port=9333', '--user-data-dir=' + process.env.TEMP + '/cdp-prof', `--window-size=${W},900`, 'about:blank'], { stdio: 'ignore' })
  let targets
  for (let i = 0; i < 40; i++) {
    try { targets = await (await fetch('http://127.0.0.1:9333/json')).json(); if (targets.length) break } catch {}
    await new Promise((r) => setTimeout(r, 250))
  }
  const page = targets.find((t) => t.type === 'page')
  const ws = new WebSocket(page.webSocketDebuggerUrl)
  await new Promise((r) => (ws.onopen = r))
  let id = 0
  const pending = new Map()
  ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id) } }
  const send = (method, params = {}) => new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })) })
  await send('Page.enable')
  await send('Emulation.setDeviceMetricsOverride', { width: W, height: 900, deviceScaleFactor: 1, mobile: false })
  await send('Emulation.setEmulatedMedia', { media: 'screen' })
  await send('Page.navigate', { url: URL })
  await new Promise((r) => setTimeout(r, 6000))
  const res = await send('Page.printToPDF', { printBackground: true, preferCSSPageSize: false, paperWidth: W / 96, paperHeight: H / 96, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, displayHeaderFooter: false })
  fs.writeFileSync(OUT, Buffer.from(res.result.data, 'base64'))
  console.log('written', fs.statSync(OUT).size)
  ws.close(); ch.kill()
  process.exit(0)
})()
