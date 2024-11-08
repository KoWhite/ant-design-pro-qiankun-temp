/*
 * @Author: MichLiu
 * @Date: 2024-11-08 09:31:41
 * @Description: 子应用布局
 * @LastEditTime: 2024-11-08 11:49:34
 * @LastEditors: MichLiu
 */
import React from 'react';
// import { SettingDrawer } from '@ant-design/pro-components';
// import type { RunTimeLayoutConfig } from '@umijs/max';
import { MenuDataItem, ProLayout, ProLayoutProps } from '@ant-design/pro-components';
import { Outlet, useModel, useAppData, useNavigate, history } from '@umijs/max';
import { ConfigProvider } from 'antd';
import NProgress from '@/components/Nprogress';
import SearchRoute from '@/components/RightContent/SearchRoute';
// import routes from './config/routes';
import ThemeSwitch from '@/components/ThemeSwitch';
import { AvatarDropdown, AvatarName } from '@/components';

export const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

const MicroLayout: React.FC<ProLayoutProps> = () => {
  const { initialState } = useModel('@@initialState');;

  const navigate = useNavigate();

  const route = useAppData().clientRoutes[useAppData().clientRoutes.length - 1].routes;

  const loopMenuItem = (menus: MenuDataItem[] = []): MenuDataItem[] =>
    menus.map(({ icon, children, ...item }) => {
      if (children) loopMenuItem(children);
      // if (
      //   !initialState?.currentUser?.authUrl.has(item.path || '') &&
      //   !NOT_ACCESS.includes(item.path || '')
      // )
      //   return {};

      return {
        ...item,
        children: children && loopMenuItem(children),
      };
    });

  return (
    <ConfigProvider>
      <ProLayout
        style={{ height: '100%' }}
        route={{ routes: loopMenuItem(route as MenuDataItem[]) }}
        breadcrumbRender={false}
        actionsRender={() => [<SearchRoute routes={loopMenuItem(route as MenuDataItem[])} key="searchRoute" />, <ThemeSwitch key="themeSwitch" />]}
        avatarProps={{
          src: initialState?.currentUser?.avatar,
          title: <AvatarName />,
          render: (_, avatarChildren) => {
            return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
          },
        }}
        contentStyle={{ padding: 0 }}
        onPageChange={() => {
          const { location } = history;
          // 开启路由切换进度条
          if (location?.pathname !== '/user/login') {
            NProgress.start();
          }
          // 如果没有登录，重定向到 login
          if (!initialState?.currentUser && location.pathname !== loginPath) {
            history.push(loginPath);
          }
          // 延时关闭
          setTimeout(() => {
            NProgress.done();
          }, 300);
        }}
        menuItemRender={(item: any, defaultDom: React.ReactNode) => {
          return (
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
        {...initialState?.settings}
      >
        {<Outlet />}
      </ProLayout>
    </ConfigProvider>
  );
};

export default MicroLayout;
