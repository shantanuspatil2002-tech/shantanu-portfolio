const fs = require('fs')
const path = require('path')
const { Resvg } = require('@resvg/resvg-js')

const svgPath = path.join(__dirname, '..', 'public', 'og-image.svg')
const outPath = path.join(__dirname, '..', 'public', 'og-image.png')

const svg = fs.readFileSync(svgPath, 'utf8')
const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true },
})
const png = resvg.render().asPng()
fs.writeFileSync(outPath, png)
console.log('Wrote', outPath, png.length, 'bytes')
