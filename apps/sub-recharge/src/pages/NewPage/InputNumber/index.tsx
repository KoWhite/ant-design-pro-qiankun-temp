/*
 * @Author: MichLiu
 * @Date: 2024-11-11 15:35:41
 * @Description:
 * @LastEditTime: 2024-11-11 15:38:27
 * @LastEditors: MichLiu
 */
import React from 'react';
import type { InputNumberProps } from 'antd';
import { InputNumber, Space } from 'antd';

const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};

const MyInputNumber: React.FC = () => {
  return <Space>
    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />

    <InputNumber<number>
      defaultValue={1000}
      formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
      onChange={onChange}
    />

    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} changeOnWheel />
  </Space>;
};

export default MyInputNumber;
