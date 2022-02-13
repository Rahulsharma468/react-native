/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text , AppRegistry , View} from 'react-native';

import Navbar from './src/components/navbar';
import TodoList from './src/components/todoList';

const App = () => {
  return(
    <View>
        <Navbar />
        <TodoList />
    </View>
  )
}

AppRegistry.registerComponent('myApp' , () => App);

export default App;
