/*
 * @Author: MichLiu
 * @Date: 2024-11-04 15:03:43
 * @Description:
 * @LastEditTime: 2024-11-04 15:44:41
 * @LastEditors: MichLiu
 */
module.exports = {
  extends: [require.resolve('@pkg/config-umi/.eslint')],
  // extends: [require.resolve('@umijs/lint/dist/config/.eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
};
