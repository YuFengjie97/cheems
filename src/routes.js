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
        meta: { title: '文字变换' },
        component: () => import('@/views/svg/Text.vue'),
      },
      {
        path: 'wdnmd',
        meta: { title: 'wdnmd' },
        component: () => import('@/views/svg/WDNMD.vue'),
      },
      {
        path: 'animationPath',
        meta: { title: '路径和动画' },
        component: () => import('@/views/svg/AnimatePath.vue'),
      },
      {
        path: 'animationMulti',
        meta: { title: '复数动画' },
        component: () => import('@/views/svg/AnimateMulti.vue'),
      },
      {
        path: 'tree',
        meta: { title: 'd3 Tree' },
        component: () => import('@/views/d3/Tree.vue'),
      },
      {
        path: 'selectArea',
        meta: { title: '选择区域' },
        component: () => import('@/views/SelectArea.vue'),
      },
    ],
  },
  { path: '/:path(.*)', component: NotFound },
]
