import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        format: 'es', // Asegúrate de que el formato es ESM
      },
    },
  },
})
