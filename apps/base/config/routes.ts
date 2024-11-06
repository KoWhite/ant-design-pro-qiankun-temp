/*
 * @Author: MichLiu
 * @Date: 2024-10-31 13:39:01
 * @Description:
 * @LastEditTime: 2024-11-05 18:01:03
 * @LastEditors: MichLiu
 */
/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  // qiankun-config
  // 子应用路由放在最前面
  {
    name: 'sub-recharge',
    icon: 'smile',
    path: '/sub-recharge/*',
    microApp: 'sub-recharge',
    // 配置菜单展示位置
    layout: {
      hideMenu: false, // 不隐藏菜单
      hideNav: false, // 不隐藏导航
      hideFooter: true, // 隐藏页脚
    },
    microAppProps: {
      autoSetLoading: true,
    }
  },
  // qiankun-config-end
  // 原有路由
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
    menuHeaderRender: false,
    layout: {
      // hideMenu: true, // 不隐藏菜单
      // hideNav: true, // 不隐藏导航
      // hideFooter: true, // 隐藏页脚
    },
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin',
  //       redirect: '/admin/sub-page',
  //     },
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       component: './Admin',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
