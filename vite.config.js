import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Danial_Portfolio/",
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the correct output directory
  },
  server: {
    host: '0.0.0.0',
  },
})
