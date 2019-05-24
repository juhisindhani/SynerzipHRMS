import React from 'react';

import MainDrawer from './components/MainDrawer';
import './App.css';
import store from "./store/createStore";
import Provider from "react-redux/es/components/Provider";

function App() {
  return (
    <Provider store={store}>
        <MainDrawer/>
    </Provider>
  );

}

export default App;
