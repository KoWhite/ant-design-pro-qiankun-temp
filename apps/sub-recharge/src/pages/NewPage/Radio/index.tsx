import React from 'react';
import { Radio, Flex } from 'antd';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const MyRadio: React.FC = () => {
  return <Flex vertical gap="middle">
    <Radio.Group>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
    </Radio.Group>

    <Radio.Group
      className="mt-30px"
      block
      options={options}
      defaultValue="Apple"
      optionType="button"
      buttonStyle="solid"
    />
  </Flex>;
};

export default MyRadio;
