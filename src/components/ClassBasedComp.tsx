import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store';

class ClassBasedCommp extends Component {
  changeHeadline() {
    store.headerString = 'Class based';
  }

  increaseTheValue() {
    store.objectValue.value01++;
  }

  render() {
    return (
      <div>
        <h2>Class Based {store.headerString}</h2>
        <p>Here goes the content</p>
        <button onClick={this.changeHeadline}>Click Me</button>
        <button onClick={this.increaseTheValue}>Increase</button>
      </div>
    );
  }
}

export default observer(ClassBasedCommp);
