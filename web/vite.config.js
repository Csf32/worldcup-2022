import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//verificar o svgr na lista de npm
import svgr from 'vite-plugin-svgr'
//importar o alias
import path from 'path'

// https://vitejs.dev/config/
// vite-plugin-svgr 
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias:{
      '@':path.resolve(__dirname, './src'),
    },
  }
})
