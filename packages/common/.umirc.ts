/*
 * @Author: MichLiu
 * @Date: 2024-11-04 15:15:32
 * @Description: 全局umi配置文件，比所有config.js的权重都高
 * @LastEditTime: 2024-11-08 14:31:07
 * @LastEditors: MichLiu
 */
import { defineConfig } from '@umijs/max';
import Icons from 'unplugin-icons/webpack';

export default defineConfig({
  hash: true,
  targets: {},
  antd: {},
  dva: {},
  access: {},
  model: {},
  routes: [],
  initialState: {},
  request: {},
  presets: ['umi-presets-pro'],
  npmClient: 'pnpm',
  chainWebpack: (config) => {
    // 配置 unplugin-icons
    config.plugin('unplugin-icons').use(Icons({
      compiler: 'jsx',
      jsx: 'react',
      autoInstall: true,
    }));
  },
});
