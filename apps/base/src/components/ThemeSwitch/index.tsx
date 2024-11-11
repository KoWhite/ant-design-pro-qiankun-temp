/*
 * @Author: MichLiu
 * @Date: 2024-11-07 16:00:57
 * @Description:
 * @LastEditTime: 2024-11-11 10:38:52
 * @LastEditors: MichLiu
 */
import React, { useEffect } from 'react';
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
  const { globalState, setGlobalState } = useModel('@@qiankunStateForSlave');

  // 判断当前是否为暗色主题
  const isDark = Array.isArray(antdConfig?.theme?.algorithm)
    ? antdConfig?.theme?.algorithm.includes(darkAlgorithm)
    : antdConfig?.theme?.algorithm === darkAlgorithm;

  // 初始化时从 sessionStorage 读取主题设置
  useEffect(() => {
    const savedTheme = sessionStorage.getItem('theme');
    if (savedTheme) {
      const nextTheme = savedTheme === 'dark' ? darkAlgorithm : defaultAlgorithm;
      setAntdConfig({
        theme: {
          algorithm: [nextTheme],
        },
      });
      setGlobalState({
        ...globalState,
        theme: {
          algorithm: [nextTheme],
        },
      });
    }
  }, []);

  // 切换主题
  const toggleTheme = () => {
    const nextTheme = isDark ? defaultAlgorithm : darkAlgorithm;

    // 1. 更新主应用主题
    setAntdConfig({
      theme: {
        algorithm: [nextTheme],
      },
    });

    // 2. 通过 qiankun 全局状态同步到子应用
    setGlobalState({
      ...globalState,
      theme: {
        algorithm: [nextTheme],
      },
    });

    // 3. 保存主题设置到 sessionStorage
    sessionStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return (
    <div className={styles.themeSwitch} onClick={toggleTheme}>
      {isDark ? <IconSun /> : <IconNight />}
    </div>
  );
};

export default ThemeSwitch;
