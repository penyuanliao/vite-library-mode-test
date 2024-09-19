
import { defineConfig } from 'vite';
import { resolve } from 'pathe';
import dts from 'vite-plugin-dts';
export default defineConfig({
    plugins: [ dts({
        insertTypesEntry: true
    })],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'testcaseLib',
            fileName: 'testcase-lib',
            formats: ['es', 'cjs', 'umd', 'iife'],
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