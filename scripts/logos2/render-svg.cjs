const { Resvg } = require(require('path').join(__dirname,'..','..','node_modules','@resvg','resvg-js'))
const fs = require('fs')
const path = require('path')
const dir = path.join(__dirname, 'raw')
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.svg'))) {
  const svg = fs.readFileSync(path.join(dir, f))
  const r = new Resvg(svg, { fitTo: { mode: 'width', value: 1000 }, background: 'rgba(0,0,0,0)' })
  const png = r.render().asPng()
  fs.writeFileSync(path.join(dir, f.replace('.svg', '.png')), png)
  console.log(f, '->', png.length, 'bytes')
}
