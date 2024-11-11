/*
 * @Author: MichLiu
 * @Date: 2024-11-11 14:36:23
 * @Description:
 * @LastEditTime: 2024-11-11 14:44:35
 * @LastEditors: MichLiu
 */
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const { SHOW_CHILD } = Cascader;

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: new Array(20)
          .fill(null)
          .map((_, index) => ({ label: `Number ${index}`, value: index.toString() })),
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    disabled: true,
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};

const MyCascader: React.FC = () => {
  return <>
    <Cascader options={options} onChange={onChange} placeholder="Please select" />
    <br />
    <br />
    <Cascader
      style={{ width: '80%' }}
      options={options}
      onChange={onChange}
      multiple
      maxTagCount="responsive"
      defaultValue={[['bamboo']]}
    />
  </>;
};

export default MyCascader;
