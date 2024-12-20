/*
 * @Author: MichLiu
 * @Date: 2024-11-05 10:16:44
 * @Description: 
 * @LastEditTime: 2024-11-05 10:16:47
 * @LastEditors: MichLiu
 */
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
};
