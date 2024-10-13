import { defineConfig } from "vite"
import autoprefixer from 'autoprefixer'

export default defineConfig({
  server: {
    port: 4000,
  },
  base: "/albertosancho/",
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  }
})