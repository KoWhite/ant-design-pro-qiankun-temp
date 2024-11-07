/*
 * @Author: MichLiu
 * @Date: 2024-11-04 15:03:43
 * @Description: 
 * @LastEditTime: 2024-11-07 17:11:52
 * @LastEditors: MichLiu
 */
declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module 'numeral';
declare module '@antv/data-set';
declare module 'mockjs';
declare module 'react-fittext';
declare module 'bizcharts-plugin-slider';

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;

/// <reference types="unplugin-icons/types/react" />

// 声明图标组件类型
declare module 'virtual:icons/*' {
  import { ReactComponent } from '*.svg';
  const component: ReactComponent;
  export default component;
}

// 声明自定义图标
declare module '~icons/*' {
  import { ReactComponent } from '*.svg';
  const component: ReactComponent;
  export default component;
}
