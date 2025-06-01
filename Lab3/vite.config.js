import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: "http://localhost:5002/",
        changeOrigin: true,
        secure: false,
      },
      '/order': {
        target: "http://localhost:5002/",
        changeOrigin: true,
        secure: false,
      },
      '/dish': {
        target: "http://localhost:5002/",
        changeOrigin: true,
        secure: false,
      },
      '/waiter': {
        target: "http://localhost:5002/",
        changeOrigin: true,
        secure: false,
      },
      '/orderDish': {
        target: "http://localhost:5002/",
        changeOrigin: true,
        secure: false,
      },
      '/db': {
        target: "http://localhost:5002/",
        changeOrigin: true,
        secure: false,
      },
      '/prediction': {
        target: "http://localhost:5002/",
        changeOrigin: true,
        secure: false,
      },
    }
  }
})