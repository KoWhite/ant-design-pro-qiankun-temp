/*
 * @Author: MichLiu
 * @Date: 2024-11-11 13:45:00
 * @Description:
 * @LastEditTime: 2024-11-11 13:47:58
 * @LastEditors: MichLiu
 */
import React from "react";
import { Pagination, PaginationProps } from "antd";

const MyPagination: React.FC = () => {

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize);
  };

  return <>
    <Pagination defaultCurrent={1} total={50} />
    <br />
    <Pagination align="center" defaultCurrent={1} total={50} />
    <br />
    <Pagination
      align="center"
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
  </>;
};

export default MyPagination;
