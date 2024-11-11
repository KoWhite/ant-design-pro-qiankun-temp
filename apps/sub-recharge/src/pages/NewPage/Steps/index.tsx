/*
 * @Author: MichLiu
 * @Date: 2024-11-11 14:02:02
 * @Description:
 * @LastEditTime: 2024-11-11 14:07:01
 * @LastEditors: MichLiu
 */
import React from 'react';
import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';


const description = 'This is a description.';

const MySteps: React.FC = () => {
  return <>
    <Steps
      current={1}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
          subTitle: 'Left 00:00:08',
        },
        {
          title: 'Waiting',
          description,
        }
      ]}
    ></Steps>

    <br />
    <br />

    <Steps
      size="small"
      current={1}
      items={[
        {
          title: 'Finished',
        },
        {
          title: 'In Progress',
        },
        {
          title: 'Waiting',
        }
      ]}
    ></Steps>

    <br />
    <br />

    <Steps
      items={[
        {
          title: 'Login',
          status: 'finish',
          icon: <UserOutlined />,
        },
        {
          title: 'Verification',
          status: 'finish',
          icon: <SolutionOutlined />,
        },
        {
          title: 'Pay',
          status: 'process',
          icon: <LoadingOutlined />,
        },
        {
          title: 'Done',
          status: 'wait',
          icon: <SmileOutlined />,
        },
      ]}
    />

    <br />
    <br />
  </>;
};

export default MySteps;
