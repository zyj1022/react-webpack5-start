import { observable, toJS, action, makeAutoObservable, runInAction } from 'mobx';
import * as api from '@/requests/common';
import { getResultContent } from './commonUtil';
import { storage } from '@/utils/utils';

export default class CommonStore {
  name = 'CommonStore';
  visibleModal = false;
  user = {};
  menus = [];
  role = null; // 角色
  accountInfo = {};
  subKey = [];

  constructor() {
    makeAutoObservable(this);
  }

  setRole(value) {
    this.role = value;
  }

  setSubKey(key) {
    runInAction(() => {
      this.subKey = [...key];
    });
  }

  async getUserInfo(params) {
    const res = await api.getUserInfo(params);
    const result = res && res.data;
    if (result && result.success) {
      this.accountInfo = result.data;
      // console.log('getOperateAccountInfo', result.data)
    }
  }
}
