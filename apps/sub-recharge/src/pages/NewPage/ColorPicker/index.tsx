import React, { useState } from 'react';
import { ColorPicker, Space } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';

type Color = GetProp<ColorPickerProps, 'value'>;

const MyColorPicker: React.FC = () => {
  const [color, setColor] = useState<Color>('#1677ff');

  return <Space>
    <ColorPicker value={color} onChange={setColor} />
    <ColorPicker value={color} onChangeComplete={setColor} showText={(color) => <span>Custom Text ({color.toHexString()})</span>} />
  </Space>;
};

export default MyColorPicker;
