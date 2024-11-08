/*
 * @Author: MichLiu
 * @Date: 2024-11-07 16:00:57
 * @Description:
 * @LastEditTime: 2024-11-08 14:35:20
 * @LastEditors: MichLiu
 */
import React from 'react';
import { useAntdConfig, useAntdConfigSetter, useModel } from '@umijs/max';
import { theme } from 'antd';
import styles from './index.less';
import IconSun from '~icons/mdi/weather-sunny';
import IconNight from '~icons/mdi/weather-night';

const { darkAlgorithm, defaultAlgorithm } = theme;

const ThemeSwitch: React.FC = () => {
  const antdConfig = useAntdConfig();
  const setAntdConfig = useAntdConfigSetter();
  
  // 获取 qiankun 全局状态
  const { initialState, setInitialState } = useModel('@@initialState');

  // 判断当前是否为暗色主题
  const isDark = antdConfig.theme?.algorithm?.includes?.(darkAlgorithm);

  // 切换主题
  const toggleTheme = () => {
    const nextTheme = isDark ? defaultAlgorithm : darkAlgorithm;
    
    // 更新主应用主题
    setAntdConfig({
      theme: {
        algorithm: [nextTheme],
      },
    });

    // 同步更新 qiankun 全局状态
    setInitialState({
      ...initialState,
      theme: {
        algorithm: [nextTheme],
      },
    });
    console.log('initialState', initialState);
  };

  return (
    <div className={styles.themeSwitch} onClick={toggleTheme}>
      {isDark ? <IconSun /> : <IconNight />}
    </div>
  );
};

export default ThemeSwitch;
