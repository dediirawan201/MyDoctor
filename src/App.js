import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from "react-native-flash-message";
import { LoadingBackground } from './components';
import {store} from './redux/store';
import { Provider, useSelector } from 'react-redux';
import { LogBox,} from 'react-native';

const MainApp = () => {
  const stateGlobal = useSelector(state => state); 
  LogBox.ignoreLogs(['AsyncStorage has been '])
  return (
    <>
    <NavigationContainer>
      <Router/> 
    </NavigationContainer>
    <FlashMessage position="top" />
    {stateGlobal.produk.loading && <LoadingBackground/>}
    </> 
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  )
}

export default App;