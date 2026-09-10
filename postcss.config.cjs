const path = require('path')

// Pass an explicit config path so Tailwind resolves `content` correctly even
// when the dev server's process.cwd() is not this project directory.
module.exports = {
  plugins: {
    tailwindcss: { config: path.join(__dirname, 'tailwind.config.cjs') },
    autoprefixer: {},
  },
}
