/*
 * @Author: MichLiu
 * @Date: 2024-11-11 15:44:12
 * @Description: 提及
 * @LastEditTime: 2024-11-11 15:44:19
 * @LastEditors: MichLiu
 */
import React from 'react';
import { Mentions } from 'antd';

const options = [{ value: 'sample', label: 'sample' }];

const MyMentions: React.FC = () => {
  return <section className="w-500px">
    <Mentions options={options} />
  </section>;
};

export default MyMentions;
