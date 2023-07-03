import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import browserslist from 'browserslist'
const browserslistConfig = browserslist.loadConfig({ path: '.' })
import legacy from '@vitejs/plugin-legacy'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),legacy({
      targets: browserslistConfig,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './',
})
