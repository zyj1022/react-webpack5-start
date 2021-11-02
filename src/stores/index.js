import { createContext, useContext } from 'react';

import store from './root.store';

export const ContextStore = createContext(store);
export const useStore = () => useContext(ContextStore);

export default store;
