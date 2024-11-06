export default [
  {
    name: '充值中心',
    icon: 'smile',
    path: '/sub-recharge/*',
    microApp: 'sub-recharge',
    layout: { hideMenu: false, hideNav: false, hideFooter: true },
    microAppProps: { autoSetLoading: true },
  },
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
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
