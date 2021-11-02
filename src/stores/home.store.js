import { makeAutoObservable, toJS } from 'mobx';
import * as api from '../requests/common';
import { getResultData } from './commonUtil';
class HomeStore {
  name = 'HomeStore';
  userInfo = {
    name: 'name',
    pin: '998',
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getUserInfo(params) {
    const res = await api.getUserInfo(params);
    const result = getResultData(res);
    this.userInfo = result && { ...result };
    // console.log('result---', toJS(result));
  }
}

export default HomeStore;
