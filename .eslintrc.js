module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'no-undef': [0, 'never'],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'jsx-quotes': [1, 'prefer-double'],
    camelcase: [
      1,
      {
        properties: 'always',
      },
    ],
    'comma-dangle': [0, 'never'],
    semi: [1, 'always'],
    quotes: [
      1,
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    strict: [1, 'global'],
    'no-multiple-empty-lines': [
      1,
      {
        max: 1,
      },
    ],
    'no-control-regex': 0,
    'no-self-assign': 0,
    'require-atomic-updates': 0,
    'no-dupe-keys': 0,
    '@typescript-eslint/indent': [
      0,
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral > *', 'JSXOpeningElement > *'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 0, // 针对函数的定义，建议每一个函数都要显式的表明函数返回值
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ['_this'], // Allow `const self = this`; `[]` by default
      },
    ],
    'react/jsx-curly-spacing': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-indent': [1, 2],
    'react/jsx-no-undef': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/no-string-refs': 0,
    'react/jsx-no-target-blank': 0,
  },
};
