import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: 'Home' },
    children: [
      {
        path: 'svgText',
        meta: { title: 'svg text' },
        component: () => import('@/views/svg/Text.vue'),
      },
      {
        path: 'wdnmd',
        meta: { title: 'svg wdnmd' },
        component: () => import('@/views/svg/WDNMD.vue'),
      },
    ],
  },
  { path: '/:path(.*)', component: NotFound },
]
