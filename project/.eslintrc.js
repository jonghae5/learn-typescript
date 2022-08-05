// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // eslint-plugin-prettier 로 인해 eslint 안에서 prettier 사용 가능
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // "" 이냐 ' 이냐'
        semi: true, // 세미 콜론
        useTabs: false,
        tabWidth: 2, // 탭 간격
        printWidth: 80, //한 줄의 길이
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
