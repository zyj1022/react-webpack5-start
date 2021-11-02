module.exports = {
  dev: {
    host: 'localhost',
    port: 9600,
  },
  mock: {
    express: {
      port: 9660,
    },
  },
  proxy: {
    target: 'http://localhost:9660', // mock
  },
  prefix: 'api',
  // 配置 ant 主题皮肤
  lessModifyVars: {
    '@primary-color': '#ff1852',
  },
};
