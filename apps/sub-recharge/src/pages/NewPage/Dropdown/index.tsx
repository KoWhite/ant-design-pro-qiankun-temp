/*
 * @Author: MichLiu
 * @Date: 2024-11-11 11:55:31
 * @Description:
 * @LastEditTime: 2024-11-11 12:00:58
 * @LastEditors: MichLiu
 */
import React from 'react';
import { Dropdown, Space } from 'antd';
import { SmileOutlined, DownOutlined } from '@ant-design/icons';
import AlarmLight from '~icons/mdi/alarm-light-outline';

const MyDropdown: React.FC = () => {
  const menuItems1 = [
    {
      key: 1,
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: 2,
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: 5,
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          mdi-icon-test
        </a>
      ),
      icon: <AlarmLight />,
    },
    {
      key: 3,
      label: '3rd menu item',
      disabled: false,
    },
    {
      key: 4,
      danger: true,
      label: 'a danger item',
    },
  ];

  return (
    <section>
      <Dropdown menu={{ items: menuItems1 }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </section>
  );
};

export default MyDropdown;
