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
        path: 'coderain',
        meta: { title: '代码雨' },
        component: () => import('@/views/p5/CodeRain.vue'),
      },
    ],
  },
  { path: '/:path(.*)', component: NotFound },
]
