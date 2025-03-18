import {defineConfig} from 'vite';
import {groupIconVitePlugin, localIconLoader} from 'vitepress-plugin-group-icons'

export default defineConfig({
  plugins: [groupIconVitePlugin({
    customIcon: {
      json: localIconLoader(import.meta.url, './public/svg/json.svg')
    },
  })],
  server: {
    open: true
  },
  // https://cn.vitejs.dev/config/shared-options.html#publicdir
  publicDir: "../public", // 指定 public 目录路径
  build: {
    chunkSizeWarningLimit: 10000 // 设置为 1 MB
  }
});
