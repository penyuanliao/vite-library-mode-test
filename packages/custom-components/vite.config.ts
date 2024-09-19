import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'pathe';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ 
    vue(),
    dts({
        insertTypesEntry: true
    })
  ],
  build: {
      lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'custom-components',
          fileName: 'custom-components',
          formats: ['es', 'cjs', 'umd'],
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      }
  }
})
