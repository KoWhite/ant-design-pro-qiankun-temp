/*
 * @Author: MichLiu
 * @Date: 2024-10-29 13:35:37
 * @Description:
 * @LastEditTime: 2024-10-29 14:53:42
 * @LastEditors: MichLiu
 */
import React, { useState, useRef } from 'react';
import { Drawer, Input, Button, Space, FormInstance } from 'antd';
import type { ProColumns, ProFormInstance } from '@ant-design/pro-components';
import { EditableProTable, ProForm, ProFormText } from '@ant-design/pro-components';

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.RuleListItem>;

export type DrawerFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalOpen: boolean;
  values: Partial<API.RuleListItem>;
};

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: 624691229,
    title: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: 1590481162000,
  },
];

const columns: ProColumns<DataSourceType>[] = [
  {
    title: '活动名称',
    dataIndex: 'title',
    width: '30%',
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
      },
    },
  },
  {
    title: '描述',
    dataIndex: 'decs',
    renderFormItem: (_, { record }) => {
      console.log('----===>', record);
      return <Input addonBefore={(record as any)?.addonBefore} />;
    },
  },
  {
    title: '操作',
    valueType: 'option',
  },
];

const DrawerForm: React.FC<DrawerFormProps> = (props) => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id),
  );

  const formRef = useRef<ProFormInstance>(null);

  const handleSubmit = () => {
    formRef.current?.submit();
    console.log('进来了---------------', formRef);
  };

  return (
    <>
      <Drawer
        title="Basic Drawer"
        width="68%"
        onClose={() => props.onCancel()}
        open={props.updateModalOpen}
        extra={
          <Space>
            <Button>Cancel</Button>
            <Button type="primary" onClick={handleSubmit}>
              OK
            </Button>
          </Space>
        }
      >
        <ProForm<{
          name: string;
          company: string;
        }>
          formRef={formRef}
          grid
          initialValues={{
            name: '蚂蚁设计有限公司',
            useMode: 'chapter',
          }}
          search={{
            optionRender: false, // 隐藏提交和重置按钮
          }}
        >
          <ProForm.Group>
            <ProFormText
              width="md"
              name="name"
              label="签约客户名称"
              tooltip="最长为 24 位"
              placeholder="请输入名称"
            />
            <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称" />
          </ProForm.Group>
          <ProFormText width="sm" name="id" label="主合同编号" />
          <ProForm.Item
            label="数组数据"
            name="dataSource"
            initialValue={defaultData}
            trigger="onValuesChange"
          >
            <EditableProTable<DataSourceType>
              rowKey="id"
              toolBarRender={false}
              columns={columns}
              recordCreatorProps={{
                newRecordType: 'dataSource',
                position: 'top',
                record: () => ({
                  id: Date.now(),
                  addonBefore: 'ccccccc',
                  decs: 'testdesc',
                }),
              }}
              editable={{
                type: 'multiple',
                editableKeys,
                onChange: setEditableRowKeys,
                actionRender: (row, _, dom) => {
                  return [dom.delete];
                },
              }}
            />
          </ProForm.Item>
        </ProForm>
      </Drawer>
    </>
  );
};

export default DrawerForm;
