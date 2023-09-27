import { defineConfig } from 'vite'
import {resolve} from 'node:path'
import vue from '@vitejs/plugin-vue'

console.log(resolve())
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:[
      {
        find:'@',
        replacement:resolve()+'/src'
      }
    ]
  },
  server:{
    // host:'172.20.8.223',
    port:9216,
    proxy:{
      '/api':"http://172.20.9.234"
    }
  }
})
