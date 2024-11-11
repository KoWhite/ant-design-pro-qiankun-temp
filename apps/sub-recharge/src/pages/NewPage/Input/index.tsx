/*
 * @Author: MichLiu
 * @Date: 2024-11-11 15:23:58
 * @Description:
 * @LastEditTime: 2024-11-11 15:34:37
 * @LastEditors: MichLiu
 */
import React from 'react';
import { Input } from 'antd';
import type { GetProps } from 'antd';

type OTPProps = GetProps<typeof Input.OTP>;

const MyInput: React.FC = () => {

  const onChange: OTPProps['onChange'] = (text) => {
    console.log('onChange:', text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  return <section className="w-500px">
    <Input placeholder="Basic usage" />
    <br />
    <br />
    <Input placeholder="Basic usage" size="small" />
    <br />
    <br />
    <Input placeholder="Basic usage" allowClear />
    <br />
    <br />
    <Input placeholder="Basic usage" disabled />
    <br />
    <br />
    <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
  </section>;
};

export default MyInput;
