const path = require('path');

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', ['@babel/preset-typescript', { allowNamespaces: true }]],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    [
      'module-resolver',
      {
        alias: {
          '@': path.join(__dirname, './src'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.es', '.es6', '.mjs'],
      },
    ],
    [
      'import',
      {
        libraryName: 'antd',
        style: true,
      },
      'antd',
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-optional-chaining', // js 可选链 ?.
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
};
