# ⚡ Vite ✔ Vue 3 🌻 Tailwind CSS

![Vite, Vue, Tailwind CSS](https://user-images.githubusercontent.com/11320080/111277027-a9384c00-8640-11eb-8323-21889bd7c609.png)

This starter template includes:

- [Vite](https://vitejs.dev/guide/)
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Tailwind CSS v3](https://tailwindcss.com/docs/configuration)
- [Vue Router v4](https://github.com/vuejs/router)
- [Inter var font](https://github.com/rsms/inter) (self-hosted, woff2, v3.19, with 'preload' attr, check out index.html)
- [Headless UI](https://headlessui.dev/vue/menu) - unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
- [Heroicons](https://github.com/tailwindlabs/heroicons#vue) - beautiful hand-crafted SVG icons,
  by the makers of Tailwind CSS
- [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - Automatic Class Sorting with Prettier

First-party plugins needed for Tailwind UI:

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

### Getting Started

```sh
npx degit web2033/vite-vue3-tailwind-starter vvt-app
cd vvt-app
```

```sh
pnpm i
pnpm run dev
pnpm run build
pnpm run serve
pnpm run depoly
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/web2033/vite-vue3-tailwind-starter)

以上为vite模板自带
# 写给自己
- vite版本更新很快,vite.config.js配置可能有变化
- githubPage部署分支时gh-pages
- 使用pnpm
- 使用pnpm run depoly使用脚本部署,其实就是一个打包加推送