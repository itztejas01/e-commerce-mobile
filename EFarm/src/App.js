import React, {Component} from 'react';
import {LogBox} from 'react-native';
// import Header from '../src/Components/Header';
import { NavigationContainer } from '@react-navigation/native'

import MainAppRoutes from './Routes/MainAppRoutes'
import SplashScreen from './Screens/SplashScreen'

import { Provider } from 'react-redux'
import store from './Redux/store'


LogBox.ignoreAllLogs(true);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <MainAppRoutes />
       
      </NavigationContainer>
      </Provider>
    );
  }
}



export default App;
