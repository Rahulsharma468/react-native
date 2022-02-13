/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import BookDetailScreen from './src/screens/bookDetailScreen';
import BookScreen from './src/screens/bookScreen';

const navigator = createStackNavigator(
    {
        Books: BookScreen,
        BookDetailS: BookDetailScreen
    },
    {
        initialRouteName: 'Books',
        defaultNavigationOptions: {
            title: 'Books'
        },
    }
)

const AppContainer = createAppContainer(navigator);

class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

export default App;