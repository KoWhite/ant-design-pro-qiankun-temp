/*
 * @Author: MichLiu
 * @Date: 2024-11-08 16:19:23
 * @Description:
 * @LastEditTime: 2024-11-11 15:58:19
 * @LastEditors: MichLiu
 */
export default [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', component: './Welcome' },
  {
    path: '/antdExp',
    name: 'Antd 示例',
    icon: 'smile',
    routes: [
      { path: '/antdExp/Button/index', name: '按钮示例', component: './NewPage/Button' },
      { path: '/antdExp/Table/index', name: '表格示例', component: './NewPage/Table' },
      { path: '/antdExp/Dropdown/index', name: '下拉菜单', component: './NewPage/Dropdown' },
      { path: '/antdExp/Menu/index', name: '菜单示例', component: './NewPage/Menu' },
      { path: '/antdExp/Pagination/index', name: '分页示例', component: './NewPage/Pagination' },
      { path: '/antdExp/Steps/index', name: '步骤条示例', component: './NewPage/Steps' },
      { path: '/antdExp/AutoComplete/index', name: '自动完成示例', component: './NewPage/AutoComplete' },
      { path: '/antdExp/Cascader/index', name: '级联选择示例', component: './NewPage/Cascader' },
      { path: '/antdExp/Checkbox/index', name: '多选框示例', component: './NewPage/Checkbox' },
      { path: '/antdExp/ColorPicker/index', name: '颜色选择器示例', component: './NewPage/ColorPicker' },
      { path: '/antdExp/DatePicker/index', name: '日期选择器示例', component: './NewPage/DatePicker' },
      { path: '/antdExp/Input/index', name: '输入框示例', component: './NewPage/Input' },
      { path: '/antdExp/InputNumber/index', name: '数字输入框示例', component: './NewPage/InputNumber' },
      { path: '/antdExp/Mentions/index', name: '提及示例', component: './NewPage/Mentions' },
      { path: '/antdExp/Radio/index', name: '单选框示例', component: './NewPage/Radio' },
      { path: '/antdExp/Rate/index', name: '评分示例', component: './NewPage/Rate' },
      { path: '/antdExp/Select/index', name: '选择器示例', component: './NewPage/Select' },
    ],
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '*', layout: false, component: './404' },
];
