import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/landing-500na700-/',
  plugins: [react(),tailwindcss()],
})
