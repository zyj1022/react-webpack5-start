const fastify = require('fastify');
const pino = require('pino');
const config = require('../config/config');

const server = fastify({
  // logger: pino({
  //   level: 'info',
  // }),
});

const resultData = {
  code: '0',
  success: true, //是否成功
  msg: null, //错误信息
  data: null, //返回数据，可以是任意结构
};

const headers = {
  'Access-Control-Allow-Origin': `http://${config.dev.host}:${config.dev.port}`,
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
  'X-Powered-By': ' 3.2.1',
  'Content-Type': 'application/json;charset=utf-8',
};

const setData = (request, data) => {
  request.headers = headers;
  // console.log('request.headers', request.headers);
  let ret = {};
  Object.assign(ret, resultData, {
    data: data,
  });
  return ret;
};

const apiUrl = (str) => {
  return `/${config.prefix}/${str}`;
};

const start = async () => {
  try {
    await server.listen(config.mock.express.port);
    console.log('Server started successfully');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

module.exports = {
  headers,
  server,
  setData,
  start,
  apiUrl,
};
