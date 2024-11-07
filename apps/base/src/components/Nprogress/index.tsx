/*
 * @Author: MichLiu
 * @Date: 2024-11-06 17:47:10
 * @Description:
 * @LastEditTime: 2024-11-07 09:49:15
 * @LastEditors: MichLiu
 */
import NProgress from 'nprogress';

NProgress.configure({
  // 动画方式
  easing: 'ease',
  // 递增进度条的速度
  speed: 500,
  // 是否显示加载ico
  showSpinner: false,
  // 自动递增间隔
  trickleSpeed: 200,
  // 初始化时的最小百分比
  minimum: 0.3,
});

export default NProgress;
