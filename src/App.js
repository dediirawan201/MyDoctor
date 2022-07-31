import {GetStarted, Splash} from './pages'
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from "react-native-flash-message";
import { LoadingBackground } from './components';
import store from './redux/store';
import { Provider, useSelector } from 'react-redux';

const MainApp = () => {
  const [loading,setLoading] = useState(false)
  const stateGlobal = useSelector(state => state)
  console.log('state global: ',stateGlobal)
  return (
    <>
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    <FlashMessage position="top" />
    {stateGlobal.loading && <LoadingBackground/>}
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