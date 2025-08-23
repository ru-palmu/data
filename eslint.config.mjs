
// eslint.config.mjs
export default [
  {
    files: ["**/*.js"], // 全ての JS を対象
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // 文法・バグ検出中心のルール
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off",
      "no-debugger": "error",
      "no-dupe-keys": "error",
      "no-redeclare": "error",
      "no-fallthrough": "warn",
      // 必要に応じて追加
    },
  },
];
