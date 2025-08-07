import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  server: {
    host: true,         // ← This allows access from your mobile
    port: 5173,         // (Optional) Specify a port if you want to fix it
  },
})
