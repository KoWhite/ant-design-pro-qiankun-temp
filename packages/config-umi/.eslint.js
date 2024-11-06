/*
 * @Author: MichLiu
 * @Date: 2024-11-05 10:15:14
 * @Description: 
 * @LastEditTime: 2024-11-06 17:28:02
 * @LastEditors: MichLiu
 */
module.exports = {
  extends: [require.resolve("@umijs/lint/dist/config/eslint")],
  rules: {
    "no-console": 0, // 使用console.log
    "no-var": 2, // 禁用var，用let和const代替
    "react/no-array-index-key": 0, // 可以使用index作为key, 但是只能是展示列表的时候使用
    semi: [2, "always"], // 语句强制分号结尾
    "@typescript-eslint/no-unused-expressions": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "no-param-reassign": 0,
    "import/order": [
      "error",
      {
        //按照分组顺序进行排序
        "groups": ["builtin", "external", "parent", "sibling", "index", "internal", "object", "type"],
        //通过路径自定义分组
        "pathGroups": [
          {
            "pattern": "react*",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "@/components/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@/utils/**",
            "group": "parent",
            "position": "after"
          },
          {
            "pattern": "@/apis/**",
            "group": "parent",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "always", //每个分组之间换行
        //根据字母顺序对每个组内的顺序进行排序
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  },
};
