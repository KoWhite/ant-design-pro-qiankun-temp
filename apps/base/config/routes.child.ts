/*
 * @Author: MichLiu
 * @Date: 2024-11-07 11:41:36
 * @Description:
 * @LastEditTime: 2024-11-07 15:24:43
 * @LastEditors: MichLiu
 */
export default [
  {
    name: '充值中心',
    icon: 'AccountBookOutlined',
    path: '/sub-recharge/*',
    microApp: 'sub-recharge',
    layout: { hideMenu: false, hideNav: false, hideFooter: true },
    microAppProps: { autoSetLoading: true },
  },
];
