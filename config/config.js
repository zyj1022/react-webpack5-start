module.exports = {
  dev: {
    host: 'localhost',
    port: 9600,
  },
  mock: {
    express: {
      port: 9649,
    },
  },
  proxy: {
    target: 'localhost', // 代理目标链接
  },
  // 配置 ant 主题皮肤
  lessModifyVars: {
    '@primary-color': '#ff1852',
  },
};
