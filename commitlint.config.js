/*
 * @Author: MichLiu
 * @Date: 2024-11-04 13:59:36
 * @Description: 
 * @LastEditTime: 2024-11-04 13:59:48
 * @LastEditors: MichLiu
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能（feature）
        "fix", // 修补bug
        "docs", // 文档（documentation）
        "style", // 格式（不影响代码运行的变动）
        "refactor", // 重构（即不是新增功能，也不是修改bug的代码变动）
        "test", // 增加测试
        "revert", // 回滚
        "config", // 构建过程或辅助工具的变动
        "chore", // 其他改动
      ],
    ],
    "subject-case": [0, "never"],
  },
};
