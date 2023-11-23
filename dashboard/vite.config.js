import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [
      {
        // This alias resolves any import starting with "@/components" to the corresponding file in the "src/components" directory
        find: /@\/components\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/,
        replacement: fileURLToPath(
          new URL("./src/components/$1/index.vue", import.meta.url)
        ),
      },
      {
        // This alias resolves any import starting with "@" to the "src" directory
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  }, 
})
