import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // 设置基本路径
  server: {
    open: true, // 启动服务器时自动打开浏览器
  },
});
