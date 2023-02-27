import { makeAutoObservable } from 'mobx';

import { configure } from 'mobx';

configure({
  enforceActions: 'never',
});

class Store {
  headerString = 'foo';
  objectValue = {
    value01: 1,
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Store();
