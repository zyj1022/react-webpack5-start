import {
  observable,
  toJS,
  action,
  makeObservable,
  runInAction,
  observe,
} from 'mobx';
import * as api from '../requests/common';

class HomeStore {
  constructor() {
    makeObservable(this);
  }

  @observable name = 'HomeStore';
  @observable userInfo = {
    name: 'name',
    pin: '998',
  };

  @action
  async getUserInfo(params) {
    const res = await api.getUserInfo(params);
    const result = res && res.data;
    if (result && result.success) {
      runInAction(() => {
        this.userInfo = { ...result.data };
      });
      console.log('this.userInfo---', this.userInfo);
    }
  }
}

export default HomeStore;
