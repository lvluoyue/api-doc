import {defineConfig} from 'vite';
import {groupIconVitePlugin} from 'vitepress-plugin-group-icons'

export default defineConfig({
  plugins: [groupIconVitePlugin()],
  server: {
    open: true
  },
  // https://cn.vitejs.dev/config/shared-options.html#publicdir
  publicDir: "../public", // 指定 public 目录路径
});
