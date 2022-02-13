/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text , AppRegistry , View} from 'react-native';
import Header from './src/components/Header';
import CarList from './src/components/carList';

const App = () => {
  return(
    <View style={{ flex: 1}}>
      <Header title={"Cars"}/>
      <CarList />
    </View>
  )
}

AppRegistry.registerComponent('myApp' , () => App)

export default App;
