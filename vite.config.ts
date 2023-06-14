import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 8083,
    proxy: {
      '/api': {
        target: 'http://62.234.36.20:5000/',
        changeOrigin: true, // 允许跨域
        rewrite: pathStr => pathStr.replace(/^\/api/, '/api/v1')
      }
    }
  },
  plugins: [vue()],
  build: {
    terserOptions: {
      compress: {
        unused: false // 关闭未使用变量的警告提示
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        math: 'always',
        additionalData: `@import "${path.resolve(__dirname, 'src/styles/index.less')}";`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
