import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/note', component: '@/pages/index' },
    { path: '*', component: '@/pages/login' },
  ],
  // layout: {
  // 支持任何不需要 dom 的
  // https://procomponents.ant.design/components/layout#prolayout
  // name: 'Ant Design',
  // locale: true,
  // layout: 'side',

  // },
});
