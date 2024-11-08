/*
 * @Author: MichLiu
 * @Date: 2024-11-08 13:41:49
 * @Description: 
 * @LastEditTime: 2024-11-08 15:00:32
 * @LastEditors: MichLiu
 */
import React from 'react';
// import { HOME_PATH, LOGIN_PATH, NOT_ACCESS, USER_TOKEN } from '@/constants';
import { MenuDataItem, ProLayout, ProLayoutProps, SettingDrawer } from '@ant-design/pro-components';
import { history, Outlet, useAppData, useLocation, useModel, useNavigate } from '@umijs/max';
import { ConfigProvider } from 'antd';
import HeaderContent from '../HeaderContent';
import { AvatarDropdown, AvatarName } from '../HeaderContent/AvatarDropdown';
import SearchRoute from '../HeaderContent/SearchRoute';
// import NProgress from '../NProgress';
import ThemeSwitch from '../ThemeSwitch';
import Icon from '@ant-design/icons';

const MicroLayout: React.FC<ProLayoutProps> = (props) => {
  const { initialState } = useModel('@@initialState');  
  const location = useLocation();
  const navigate = useNavigate();
  const route = useAppData().clientRoutes[useAppData().clientRoutes.length - 1].routes;

  const loopMenuItem = (menus: MenuDataItem[] = []): MenuDataItem[] =>
    menus.map(({ icon, children, ...item }) => {
      if (children) loopMenuItem(children);
      // if (
      //   !initialState?.currentUser?.authUrl.has(item.path || '')
      // )
      //   return {};
      return {
        ...item,
        children: children && loopMenuItem(children),
      };
    });

  console.log('initialState.theme', initialState, route);

  return (
    <ConfigProvider theme={initialState.theme}>
      <ProLayout
        style={{ height: '100%' }}
        route={{ routes: loopMenuItem(route as MenuDataItem[]) }}
        actionsRender= {() => [<SearchRoute routes={loopMenuItem(route as MenuDataItem[])} key="searchRoute" />, <ThemeSwitch key="themeSwitch" />]}
        avatarProps= {{
            src: initialState?.currentUser?.avatar,
            title: <AvatarName />,
            render: (_, avatarChildren) => {
              return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
            },
          }}
        menuDataRender={(menuData) => {
            return menuData.map((item) => {
              return {
                ...item,
                icon: item.icon && <Icon type={item.icon as string} />,
              };
            });
          }}
        menuItemRender={(item: any, defaultDom: React.ReactNode) => {
          return (
            <a
              onClick={() => {
                if (location.pathname === item.path) return;
                navigate(item.path);
              }}
            >
              {/* 配置antd的图标 */}
              {item.icon && <Icon type={item.icon} />}
              {defaultDom}
            </a>
          ); 
        }}
        onPageChange={(locations) => {
          // if (locations?.pathname !== '/user/login') {
          //   // NProgress.start();
          //   if (location.pathname !== '/user/login') {
          //     history.replace('/user/login'); // 如果没有登录，重定向到 login
          //   }
          //   // setTimeout(() => NProgress.done(), 300);
          // }
        }}
        headerRender={() => {
          return (
            <>
              <HeaderContent />
            </>
          );
        }}
        {...initialState?.settings}
        {...props}
      >
        {<Outlet />}
      </ProLayout>
    </ConfigProvider>
  );
};

export default MicroLayout;
