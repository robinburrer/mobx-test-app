import React from 'react';
import { observer } from 'mobx-react';
import store from '../store';

const AppHeader: React.FC = () => {
  return (
    <>
      <h1>{store.headerString}</h1>
      <p>the value is {store.objectValue.value01}</p>
    </>
  );
};

export default observer(AppHeader);
