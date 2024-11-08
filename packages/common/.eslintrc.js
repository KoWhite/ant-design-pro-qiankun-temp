/*
 * @Author: MichLiu
 * @Date: 2024-11-04 14:41:43
 * @Description:
 * @LastEditTime: 2024-11-08 13:53:41
 * @LastEditors: MichLiu
 */
module.exports = {
  extends: [require.resolve('@pkg/config-umi/.eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
};
