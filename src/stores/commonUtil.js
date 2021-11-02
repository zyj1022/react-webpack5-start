import { observable } from 'mobx';
import { notification } from 'antd';

// 解析
export function getResultData(res) {
  const result = res && res.data;
  if (result && result.success) {
    return result.data;
  } else {
    console.log(`请求错误:${result.msg}`);
    return null;
  }
}
