import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import AppHeader from './components/AppHeader';
import Content from './components/Content';
import ClassBasedComp from './components/ClassBasedComp';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <AppHeader />
      </div>

      <Content />
      <ClassBasedComp />
    </div>
  );
}

export default App;
