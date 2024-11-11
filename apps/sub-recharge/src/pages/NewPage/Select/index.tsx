import React from 'react';
import { Select, Space, Tag } from 'antd';
import type { SelectProps } from 'antd';

type TagRender = SelectProps['tagRender'];
const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const tagOptions: SelectProps['options'] = [
  { value: 'gold' },
  { value: 'lime' },
  { value: 'green' },
  { value: 'cyan' },
];

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const tagRender: TagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return <Tag color={value} closable={closable} onClose={onClose} onMouseDown={onPreventMouseDown}
  style={{ marginInlineEnd: 4 }}>{label}</Tag>;
};

const MySelect: React.FC = () => {
  return <Space wrap>
    <Select defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />

    <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />

    <Select
      style={{ width: '400px' }}
      mode="multiple"
      tagRender={tagRender}
      options={tagOptions}
    />
  </Space>;
};

export default MySelect;
