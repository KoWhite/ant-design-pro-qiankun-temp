import React from 'react';
import { ProLayoutProps } from '@ant-design/pro-components';
import { MicroLayout, isQiankun } from '@pkg/common';

const BasicLayout: React.FC<ProLayoutProps> = () => {
  return <MicroLayout pure={isQiankun()} />;
};

export default BasicLayout;
