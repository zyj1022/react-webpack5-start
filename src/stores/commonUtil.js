import { observable } from 'mobx';
import { notification } from 'antd';

// 解析
export function getResultData(res) {
  const result = res && res.data;
  if (result && result.success && result.data) {
    return result.data;
  } else {
    // console.log(`请求错误:${result.message}`);
    return null;
    // notification.error({
    // 	message: `请求错误:${result.message}`
    // });
  }
}
