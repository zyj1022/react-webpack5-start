const { server, setData, start, apiUrl } = require('./utils');
const _ = require('lodash');

// 模拟数据

/**
 * https://www.fastify.io/docs/latest/Request/
 */

server.post(apiUrl('getTest'), async (request, reply) => {
  const data = {
    code: '12134114',
    name: '全站',
  };
  return setData(request, data);
});

server.get(apiUrl('getUser'), async (request, reply) => {
  const data = {
    name: 'Name Test',
    pin: 'Pin Test',
  };
  return setData(request, data);
});

server.get(apiUrl('detail/:id'), async (request, reply) => {
  const data = {
    code: '121344',
    name: '20220',
  };
  return setData(request, data);
});

start();
