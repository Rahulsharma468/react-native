import React from "react";
import { View , Text , AppRegistry } from 'react-native';
import LoginPage from './components/login_page';

const App = () => {
  return(
    <View>
      <Text>First</Text>
      <LoginPage />
    </View>
  )
}

AppRegistry.registerComponent("profile_view" , () => App)

export default App;