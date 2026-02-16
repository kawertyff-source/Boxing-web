import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ทำให้รันบน GitHub Pages ได้ทุก Path
})
