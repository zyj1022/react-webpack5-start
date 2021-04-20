import { observable } from 'mobx';

import CommonStore from './common.store';
import HomeStore from './home.store';

class RootStore {
  @observable common = new CommonStore();
  @observable home = new HomeStore();
}

export default RootStore;
