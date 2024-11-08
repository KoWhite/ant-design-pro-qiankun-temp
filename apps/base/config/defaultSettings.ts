/*
 * @Author: MichLiu
 * @Date: 2024-10-31 13:39:01
 * @Description:
 * @LastEditTime: 2024-11-08 14:45:45
 * @LastEditors: MichLiu
 */
import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  // navTheme: 'light',
  // // 拂晓蓝
  // colorPrimary: '#1890ff',
  // layout: 'top',
  // // qiankun-config
  // // splitMenus: true,
  // fixedHeader: true,
  // // qiankun-config-end
  // contentWidth: 'Fluid',
  // fixSiderbar: true,
  // colorWeak: false,
  title: 'Ant Design Pro',
  // pwa: true,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  // iconfontUrl: '',
  // token: {
  //   // 参见ts声明，demo 见文档，通过token 修改样式
  //   //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  // },
  colorPrimary: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  splitMenus: false,
  fixedHeader: true,
  fixSiderbar: true,
  pwa: false,
  footerRender: false,
  // menuHeaderRender: false,
};

export default Settings;
