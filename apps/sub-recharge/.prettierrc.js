/*
 * @Author: MichLiu
 * @Date: 2024-11-04 15:03:43
 * @Description:
 * @LastEditTime: 2024-11-04 15:45:36
 * @LastEditors: MichLiu
 */
module.exports = {
  ...require('@pkg/config-umi/.prettier'),
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-packagejson"]
};
