/*
 * @Author: MichLiu
 * @Date: 2024-11-08 09:31:41
 * @Description: 子应用布局
 * @LastEditTime: 2024-11-08 13:27:10
 * @LastEditors: MichLiu
 */
import React from 'react';
import { ProLayoutProps, MenuDataItem, ProLayout } from '@ant-design/pro-components';
import { useModel, useAppData, useLocation, useNavigate, Outlet } from '@umijs/max';
import { ConfigProvider } from 'antd';
import defaultSettings from '../../../config/defaultSettings';
import routes from '../../../config/routes';

const MicroLayout: React.FC<ProLayoutProps> = (props) => {
  const { initialState } = useModel('@@initialState');
  const masterProps = useModel('@@qiankunStateFromMaster');
  const location = useLocation();
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

  console.log('-----------------------', defaultSettings, routes);

  return (
    <ConfigProvider theme={masterProps.globalState.theme}>
      {/* <div className='mt-60px'>
        <Outlet />
      </div> */}
      <ProLayout
        pure={true}
        style={{ height: '100%' }}
        route={{ routes: loopMenuItem(route as MenuDataItem[]) }}
        // headerRender={() => <div>header</div>}
        menuHeaderRender={false}
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
        onPageChange={(locations) => {
          // if (locations?.pathname !== LOGIN_PATH) {
          //   NProgress.start();
          //   if (location.pathname !== LOGIN_PATH && !sessionStorage.getItem(USER_TOKEN)) {
          //     history.replace(LOGIN_PATH); // 如果没有登录，重定向到 login
          //   }
          //   setTimeout(() => NProgress.done(), 300);
          // }
        }}
        // {...initialState?.settings}
        {...defaultSettings}
        {...props}
      >
        {<Outlet />}
      </ProLayout>

    </ConfigProvider>
  );
};

export default MicroLayout;
