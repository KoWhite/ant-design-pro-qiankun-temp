/*
 * @Author: MichLiu
 * @Date: 2024-11-06 17:46:20
 * @Description:
 * @LastEditTime: 2024-11-06 17:50:31
 * @LastEditors: MichLiu
 */
import React from 'react';
import { MenuDataItem, ProLayout, ProLayoutProps, SettingDrawer } from '@ant-design/pro-components';
import { history, Outlet, useAppData, useLocation, useModel, useNavigate } from '@umijs/max';
import { ConfigProvider } from 'antd';
import NProgress from '../Nprogress';

export const MicroLayout: React.FC<ProLayoutProps> = () => {
  const { initialState } = useModel('@@initialState');

  const route = [
    {
      path: '/',
      name: '欢迎',
      icon: 'smile',
      component: './Welcome',
      menuHeaderRender: false,
      layout: {},
    },
    { path: '/', redirect: '/welcome' },
    { path: '*', layout: false, component: './404' }
  ];


  const navigate = useNavigate();

  return <ConfigProvider>
    <ProLayout
      style={{ height: '100%' }}
      route={route}
      menuItemRender={(item: any, defaultDom: React.ReactNode) => {
        return (
          // 每个子项渲染的DOM
          <a
            onClick={() => {
              if (location.pathname === item.path) return;
              navigate(item.path);
            }}
          >
            {defaultDom}
          </a>
        );
      }}
      onPageChange={(location) => {
        // 当页面切换的时候，如果未登录的情况，重定向到login
        // 在这边做一个Nprogress的加载动画
        if (location?.pathname !== '/user/login') {
          NProgress.start();
        }
        // 延时关闭
        setTimeout(() => {
          NProgress.done();
        }, 300);
      }}
    >
      {<Outlet />}
    </ProLayout>
  </ConfigProvider>;
};
