/*
 * @Author: MichLiu
 * @Date: 2024-11-04 15:31:34
 * @Description: 
 * @LastEditTime: 2024-11-04 15:37:39
 * @LastEditors: MichLiu
 */
import { parse } from 'querystring';
import { throttle } from 'lodash-es';
import { notification } from 'antd';
import { NOTIFICATION_TYPES } from '../constants/enum';

/**
 * 全局通知提醒框
 * @param {String} title
 * @param {String} des
 * @param {String} type
 */
const showNotification = throttle(
  (
    type: 'success' | 'info' | 'warning' | 'error',
    title = NOTIFICATION_TYPES[type],
    des = '...',
    duration = 2,
  ) => {
    notification[type]({
      message: title,
      description: des,
      duration,
    });
  },
  1000,
  { leading: true, trailing: false },
);

/**
 * @description: 获取当前页面url中的参数
 */
const getPageQuery = () => parse(window.location.href.split('?')[1]);

/**
 *  模拟请求
 * @param time
 * @param data
 * @returns
 */

function awaitTime(
  data?: any,
  time = 2000,
): Promise<{
  data?: any;
  success: boolean;
  code: string;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data, success: true, code: '200' });
    }, time);
  });
}

export { 
  getPageQuery,
  awaitTime,
  showNotification 
};
