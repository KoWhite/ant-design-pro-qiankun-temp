/*
 * @Author: MichLiu
 * @Date: 2024-11-11 15:52:53
 * @Description:
 * @LastEditTime: 2024-11-11 15:54:00
 * @LastEditors: MichLiu
 */
import React from 'react';
import { Rate } from 'antd';

const MyRate: React.FC = () => {
  return <section className="w-500px">
    <Rate />
    <br />
    <br />
    <Rate allowHalf defaultValue={2.5} />
  </section>;
};

export default MyRate;
