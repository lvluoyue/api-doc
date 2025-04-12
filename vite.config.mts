import {defineConfig} from 'vite';
import {groupIconVitePlugin, localIconLoader} from 'vitepress-plugin-group-icons'
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import {
  PageProperties,
  PagePropertiesMarkdownSection
} from '@nolebase/vitepress-plugin-page-properties/vite';

export default defineConfig({
  optimizeDeps: {
    exclude: [
      '@nolebase/*',
      'vitepress',
    ],
  },
  ssr: {
    noExternal: [
      '@nolebase/*',
    ],
  },
  plugins: [
    groupIconVitePlugin({
      customIcon: {
        json: localIconLoader(import.meta.url, './public/svg/json.svg')
      },
    }),
    GitChangelog({
      // 填写在此处填写您的仓库链接
      repoURL: () => 'https://github.com/lvluoyue/api-doc',
    }),
    GitChangelogMarkdownSection({
      exclude: (id) => id.endsWith('index.md'),
      sections: {
        // 禁用页面历史
        disableChangelog: false,
        // 禁用贡献者
        disableContributors: true,
      },
    }),
    PageProperties(),
    PagePropertiesMarkdownSection({
      excludes: [
        'index.md',
      ],
    })
  ],
  server: {
    open: true
  },
  // https://cn.vitejs.dev/config/shared-options.html#publicdir
  publicDir: "../public", // 指定 public 目录路径
  build: {
    chunkSizeWarningLimit: 1000, // 设置为 1 MB
    rollupOptions: {
      external: ['oh-my-live2d'],
    }
  }
});
