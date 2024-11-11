/*
 * @Author: MichLiu
 * @Date: 2024-11-11 14:58:31
 * @Description:
 * @LastEditTime: 2024-11-11 15:18:41
 * @LastEditors: MichLiu
 */
import React from 'react';
import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const defaultValue = [dayjs('2000-01-01'), dayjs('2000-01-03'), dayjs('2000-01-05')];

const MyDatePicker: React.FC = () => {
  return <section className="w-500px">
    <DatePicker />
    <br />
    <br />
    <RangePicker />
    <br />
    <br />
    <DatePicker
      multiple
      onChange={onChange}
      maxTagCount="responsive"
      defaultValue={defaultValue}
    ></DatePicker>
  </section>;
};

export default MyDatePicker;
