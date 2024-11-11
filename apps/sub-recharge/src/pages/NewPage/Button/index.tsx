/*
 * @Author: MichLiu
 * @Date: 2024-11-11 10:47:31
 * @Description:
 * @LastEditTime: 2024-11-11 11:50:27
 * @LastEditors: MichLiu
 */
import React, { useState } from 'react';
import { Button, Flex, FloatButton } from "antd";
import { DownloadOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import AirPlane from '~icons/mdi/airplane';

const MyButton: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return <section>
    <Flex justify="left" align="center" gap={10}>
      <Button type="primary">默认按钮</Button>
      <Button>Default</Button>
      <Button type="dashed">Default</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </Flex>

    <Flex justify="left" align="center" gap={10} className="mt-10">
      <Button type="primary" variant="solid">默认按钮</Button>
      <Button variant="outlined">Default</Button>
      <Button type="primary" danger>默认按钮</Button>
    </Flex>

    <Flex justify="left" align="center" gap={10} className="mt-10">
      <Button type="primary" icon={<DownloadOutlined />}></Button>
      <Button type="primary" icon={<AirPlane />}></Button>
      <Button type="primary" shape="round" icon={<DownloadOutlined />}>
        Download
      </Button>
    </Flex>

    <Flex justify="left" align="center" gap={10} className="mt-10">
      <Button type="primary" loading>
        Loading
      </Button>

      <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
        Click me!
      </Button>
    </Flex>

    <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </section>;
};

export default MyButton;
