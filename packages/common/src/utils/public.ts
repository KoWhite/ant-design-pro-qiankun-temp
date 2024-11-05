export const isQiankun = () => {
  const win: any = window;
  return !!win.__POWERED_BY_QIANKUN__ as boolean;
};
