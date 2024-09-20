import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ 
    vue(),
    dts({
      // Ensures .d.ts files are generated even in development mode
      insertTypesEntry: true,
      rollupTypes: true,
      // If your project uses JSX/TSX, this is useful
      tsconfigPath: './tsconfig.app.json',
      // If you want to include/exclude specific files
      include: ['src/**/*.ts', 'src/**/*.vue'],
    })
  ],
  build: {
      lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'custom-components',
          fileName: 'custom-components',
          formats: ['es'],
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
