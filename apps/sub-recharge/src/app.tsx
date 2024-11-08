import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
import { currentUser as queryCurrentUser } from '@/services/ant-design-pro/api';
import React from 'react';
import { ConfigProvider } from 'antd';

let isMenu = false;

const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser({
        skipErrorHandler: true,
      });
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行
  const { location } = history;
  if (location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  // qiankun-config
  const qianKunProp: any = {};
  // 如果是加载在主应用中,不展示菜单和头部
  qianKunProp.headerRender = false;
  if (!isMenu) {
    qianKunProp.headerRender = false;
  }
  // qiankun-config-end

  return {
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // qiankun-config
    ...qianKunProp,
    // qiankun-config-end
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      // 子应用不需要展示配置主题的按钮，主题配置通过主应用统一配置
      return (
        <>
          {children}
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
};

// qiankun-config
// 子应用可以通过生命周期函数拿到主应用传递的参数
// 如果子应用本身是有菜单,面包屑等,应该要区别,在主应用不显示,否则会重复
export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('sub-recharge bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: any) {
    const { theme: themeConfig } = props?.globalState || {};

    // 设置子应用主题
    if (themeConfig) {
      ConfigProvider.config({
        theme: themeConfig,
      });
    }
  },
  async update(props: any) {
    // 更新子应用主题
    // if (themeConfig) {
    //   console.log('sub-recharge update', themeConfig);
    //   ConfigProvider.config({
    //     theme: themeConfig,
    //   });
    // }
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('sub-recharge unmount', props);
  },
};
// qiankun-config-end
