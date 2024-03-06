/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    //前置:1.禁用格式化插件 prettierformat on save 关闭
    //2.安装Eslint插件，并配置保存时自动修复
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, //单引号
        semi: false, //无分号
        printWidth: 80, //每行宽度80个字符
        trailingComma: 'none', //不加对象、数组最后逗号
        endOfLine: 'auto' //换行符号不限制
      }
    ]
  }
}
