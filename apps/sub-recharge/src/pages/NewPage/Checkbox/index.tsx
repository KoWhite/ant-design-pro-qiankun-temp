/*
 * @Author: MichLiu
 * @Date: 2024-11-11 14:46:19
 * @Description:
 * @LastEditTime: 2024-11-11 14:50:33
 * @LastEditors: MichLiu
 */
import React, { useState } from 'react';
import { Checkbox, Divider } from 'antd';
import type { CheckboxProps } from 'antd';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const MyCheckbox: React.FC = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);

  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(!!checkedList.length && checkedList.length < plainOptions.length);
  };

  return <>
    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange}>Check all</Checkbox>

    <Divider />

    <Checkbox.Group
      options={plainOptions}
      value={checkedList}
      onChange={(value) => setCheckedList(value)}
    ></Checkbox.Group>
  </>;
};

export default MyCheckbox;
