import React, { useEffect } from 'react';
import { ProLayoutProps } from '@ant-design/pro-components';
import { Outlet, useAntdConfigSetter, useModel } from '@umijs/max';

const BasicLayout: React.FC<ProLayoutProps> = () => {
  const setAntdConfig = useAntdConfigSetter();

  const masterProps = useModel('@@qiankunStateFromMaster');

  useEffect(() => {
    // 更新主应用主题
    setAntdConfig({
      theme: {
        algorithm: masterProps?.globalState.theme?.algorithm,
      },
    });
  }, [masterProps.globalState]);

  return <>
    <Outlet />
  </>;
};

export default BasicLayout;
