/*
 * @Author: MichLiu
 * @Date: 2024-11-08 13:44:53
 * @Description: 
 * @LastEditTime: 2024-11-08 15:04:54
 * @LastEditors: MichLiu
 */
import { Space } from 'antd';
import React from 'react';
// import {AvatarDropdown} from './AvatarDropdown';
// import header_title from '@/assets/imgs/login/header/header_title.svg';
import { history, useLocation, useModel } from '@umijs/max';
// import { HOME_PATH } from '@/constants';
import styles from './index.less';
import MenuDropdown from './MenuDropdown';

const GlobalHeader: React.FC = () => {
  // const location = useLocation();
  const { initialState } = useModel('@@initialState');
  if (!initialState || !initialState.settings) {
    return null;
  }

  return (
    <Space className={styles.header_content_box}>
      <div className={styles.main_content}>
        <div className={styles.header_left_content}>
          {/* <img
            onClick={() => {
              if (location.pathname === '/') return;
              history.replace('/');
            }}
            title="首页"
            src={header_title}
            alt="首页"
          /> */}
          暂未
        </div>
        <div className={styles.header_right_content}>
          {/* <AvatarDropdown /> */}
          <MenuDropdown />
        </div>
      </div>
    </Space>
  );
};
export default GlobalHeader;
