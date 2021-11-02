const path = require('path');

module.exports = {
  presets: [ "@babel/preset-typescript", "@babel/preset-react" ],
  env: {
      production: {
        presets: [
          [
            "@babel/preset-env",
            {
              "modules": false,
              "useBuiltIns": "usage",
              "corejs": 3
            }
          ]
        ]
    },
    development: {
      presets: [
          [
            "@babel/preset-env",
            {
              "modules": false
            }
          ]
        ]
    }
  },
  plugins: [
    "@babel/plugin-transform-runtime",
    [
			'module-resolver',
			{
				alias: {
					'@': path.join(__dirname, './src')
				},
				extensions: [ '.js', '.jsx', '.ts', '.tsx', '.es', '.es6', '.mjs' ]
			}
		],
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    "@babel/plugin-proposal-object-rest-spread",
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-syntax-dynamic-import",
    "react-hot-loader/babel",
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
