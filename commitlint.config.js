module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 自定义规则可以在这里添加
    // 例如：
    // 'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert']],
    // 'type-case': [2, 'always', 'lower-case'],
    // 'type-empty': [2, 'never'],
    // 'subject-case': [2, 'always', 'sentence-case'],
    // 'subject-full-stop': [2, 'never', '.'],
    // 'subject-empty': [2, 'never'],

    // 规定提交信息的最大长度为 100 字符
    "header-max-length": [2, "always", 100],

    // 规定提交类型（type）必须小写
    "type-case": [2, "always", "lower-case"],

    // 规定提交类型（type）不能为空
    "type-empty": [2, "never"],

    // 规定描述信息（subject）必须以句号结尾
    "subject-full-stop": [2, "never", "."],

    // 规定描述信息（subject）不能为空
    "subject-empty": [2, "never"],
  },
};
