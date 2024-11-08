export default [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', component: './Welcome' },
  {
    path: '/newPage',
    name: '新页面',
    icon: 'smile',
    routes: [{ path: '/newPage/index', name: '示例', component: './NewPage' }],
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '*', layout: false, component: './404' },
];
