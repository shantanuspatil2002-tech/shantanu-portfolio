import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// `base` is '/' for Vercel and for local dev/preview. For GitHub Pages project
// sites (served from https://<user>.github.io/<repo>/) set BASE_PATH at build time:
//   BASE_PATH=/<repo>/ npm run build
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
})
