import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 5173
  },
  plugins: [vue()],
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        math: 'always'
      }
    }
  }
});
