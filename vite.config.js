import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173
  },
  build: {
    sourcemap: false, // отключает генерацию source maps
    minify: 'terser'  // включает минификацию для защиты исходного кода
  }
})
