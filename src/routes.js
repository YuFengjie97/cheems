import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/cheems',
    component: Home,
    meta: { title: 'Home' },
    redirect: '/cheems/wdnmd',
    children: [
      {
        path: 'wdnmd',
        meta: { title: 'wdnmd' },
        component: () => import('@/views/svg/WDNMD.vue'),
      },
      // {
      //   path: 'textTransform',
      //   meta: { title: '文字变换' },
      //   component: () => import('@/views/svg/Text.vue'),
      // },
      // {
      //   path: 'animationPath',
      //   meta: { title: '路径和动画' },
      //   component: () => import('@/views/svg/AnimatePath.vue'),
      // },
      // {
      //   path: 'animationMulti',
      //   meta: { title: '复数动画' },
      //   component: () => import('@/views/svg/AnimateMulti.vue'),
      // },
      // {
      //   path: 'tree',
      //   meta: { title: 'd3 Tree' },
      //   component: () => import('@/views/d3/Tree.vue'),
      // },
      {
        path: 'selectArea',
        meta: { title: '选择区域' },
        component: () => import('@/views/SelectArea.vue'),
      },
      {
        path: 'musicVisual',
        meta: {title: '音乐可视化'},
        component: () => import('@/views/music/WaveSurfer.vue')
      },
      {
        path: 'musicBall',
        meta: {title: '音乐可视化-圆'},
        component: () => import('@/views/music/MusicCircle.vue')
      },
      {
        path: 'musicRect',
        meta: {title: '音乐可视化-条'},
        component: () => import('@/views/music/MusicRect.vue')
      }
    ],
  },
  { path: '/:path(.*)', component: NotFound },
]
