import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Browser-Extension-Design/", // for gh-pages, this should match the repository name
  plugins: [react()],
})
