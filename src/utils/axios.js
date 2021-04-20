// http://www.axios-js.com/docs/#axios-create-config
import axios from 'axios';
import { notification } from 'antd';
import { storage } from './utils';

const { proxy } = require('../../config/config');

export const axiosInstance = axios.create({
  timeout: 20000,
  // baseURL: `${__HOST}`,
  baseURL: '',
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

// http request 拦截器
axiosInstance.interceptors.request.use(
  (req) => {
    if (storage.get('token')) {
      req.headers.Authorization = storage.get('token');
    }
    return req;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (res) => {
    if (res.status == 401) {
      // 跳转登录页
      window.location.href = `/`;
    }
    if (res.status != 200) {
      if (res.data.code == 1 || res.data.code == 2) {
        window.location.href = '/';
      } else {
        notification.error({
          message: '请求失败',
        });
      }
      return Promise.reject(res);
    } else if (!res.data.success) {
      if (res.data.code == 1 || res.data.code == 2) {
        window.location.href = '/';
      } else {
        notification.error({
          message: `${res.data.title}失败：${res.data.message}`,
          duration: 3,
        });
      }
      return Promise.reject(res);
    }
    return res;
  },
  (error) => {
    let errText = '';
    if (error instanceof Error) errText = error.toString();
    if (error.response.status == 401) {
      notification.error({
        message: '登录状态失效，请重新登录！',
        duration: 2,
        onClose: () => {
          window.location.href = '/';
        },
      });
    } else if (errText.indexOf('timeout') > -1) {
      notification.error({
        message: '请求超时，请刷新页面重新发起请求。',
        duration: 5,
      });
      return Promise.reject(false);
    } else {
      notification.error({
        message: errText,
      });
      return Promise.reject(false);
    }
  }
);

export default function (config) {
  if (config.title) {
    if (!config.transformResponse) {
      config.transformResponse = [];
    }
    if (Array.isArray(config.transformResponse)) {
      config.transformResponse.push((data) => {
        let result = {
          title: config.title,
        };
        if (data && data) {
          result = {
            ...JSON.parse(data),
            title: config.title,
          };
        }
        return result;
      });
    }
  }

  return axiosInstance(config).catch(function (res) {
    return res;
  });
}
