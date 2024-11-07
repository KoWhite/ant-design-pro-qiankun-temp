import routesChild from './routes.child';

export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  {
    path: '/',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome',
    menuHeaderRender: false,
    layout: {},
  },

  // 子应用栏目
  ...routesChild,
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
