import { observable, toJS, action, makeObservable, runInAction } from 'mobx';
import * as api from '@/requests/common';
import { getResultContent } from './commonUtil';
import { storage } from '@/utils/utils';

export default class CommonStore {
  constructor() {
    makeObservable(this);
  }

  @observable name = 'CommonStore';
  @observable visibleModal = false;
  @observable user = {};
  @observable menus = [];
  @observable role = null; // 角色
  @observable accountInfo = {};
  @observable subKey = [];

  setRole(value) {
    this.role = value;
  }

  @action
  setSubKey(key) {
    runInAction(() => {
      this.subKey = [...key];
    });
  }

  async getAccountInfo(params) {
    const res = await operate.getAccountInfo(params);
    const result = res && res.data;
    if (result && result.success) {
      this.accountInfo = result.data;
      // console.log('getOperateAccountInfo', result.data)
    }
  }

  async login(params) {
    const res = await api.login(params);
    const result = res && res.data;
    this.loginSuccess = result.success;
    if (result && result.success) {
      this.token = result.data.jwtToken;
      const time = 3 * 24 * 60 * 60 * 1000; // 3天过期
      storage.set('token', this.token, time);
    }
  }

  async logout(params) {
    const res = await api.logout(params);
    const result = res && res.data;
    if (result && result.success) {
      // console.log('logout', result.data)
    }
  }

  async changeLoginPassword(params) {
    const res = await api.changeLoginPassword(params);
    const result = res && res.data;
    if (result && result.success) {
      // console.log('logout', result.data)
    }
  }
}
