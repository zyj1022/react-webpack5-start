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
    url: `/api/getUser`,
    method: 'get',
    data: params,
    title: '登录',
  });
}
