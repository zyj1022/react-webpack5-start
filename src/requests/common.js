import axios from '@/utils/axios';

export async function login(params) {
  return axios({
    url: '/api/auth/login',
    method: 'post',
    data: params,
    title: '登录',
  });
}

export async function getUserInfo(params) {
  return axios({
    url: `//localhost:9649/common/getUserInfo`,
    method: 'get',
    data: params,
    title: '登录',
  });
}

export async function logout(params) {
  return axios({
    url: '/api/auth/logout',
    method: 'post',
    data: params,
    title: '退出系统',
  });
}

export async function changeLoginPassword(params) {
  return axios({
    url: `/api/auth/changeLoginPassword`,
    method: 'post',
    data: params,
    title: '修改登录密码',
  });
}
