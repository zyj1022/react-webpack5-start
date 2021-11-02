import { configure, makeAutoObservable } from 'mobx';

import CommonStore from './common.store';
import HomeStore from './home.store';

// 可以配置 mobx 的一些信息
configure({
  enforceActions: 'never', //  禁用强制性 action
  isolateGlobalState: true, // 多实例共存，允许多版本
});
class RootStore {
  common = new CommonStore();
  home = new HomeStore();

  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();
export default rootStore;
