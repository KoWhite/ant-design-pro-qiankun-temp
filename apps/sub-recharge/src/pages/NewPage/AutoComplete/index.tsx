/*
 * @Author: MichLiu
 * @Date: 2024-11-11 14:12:18
 * @Description:
 * @LastEditTime: 2024-11-11 14:28:56
 * @LastEditors: MichLiu
 */
import React, { useState } from 'react';

import { AutoComplete, AutoCompleteProps } from 'antd';
import { CloseSquareFilled } from '@ant-design/icons';

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const MyAutoComplete: React.FC = () => {
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);

  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  ;

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return <section className="w-500px">
    <AutoComplete
      style={{ width: '100%' }}
      options={options}
      onSelect={onSelect}
      onSearch={(text) => setOptions(getPanelValue(text))}
      placeholder="input here"
    />
    <br />
    <br />
    <AutoComplete
      options={options}
      style={{ width: 200 }}
      onSearch={(text) => setOptions(getPanelValue(text))}
      placeholder="Customized clear icon"
      allowClear={{ clearIcon: <CloseSquareFilled /> }}
    />
  </section>;
};

export default MyAutoComplete;
