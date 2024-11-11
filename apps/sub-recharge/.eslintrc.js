/*
 * @Author: MichLiu
 * @Date: 2024-11-04 15:03:43
 * @Description:
 * @LastEditTime: 2024-11-11 16:19:57
 * @LastEditors: MichLiu
 */
module.exports = {
  extends: [require.resolve('@pkg/config-umi/.eslint'), 'prettier'],
  plugins: ['prettier'],
  // extends: [require.resolve('@umijs/lint/dist/config/.eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
};
