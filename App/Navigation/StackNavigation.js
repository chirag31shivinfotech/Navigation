import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Login from '../Screens/Login';
import SendMessage from '../Screens/SendMessage';

const Stack = createStackNavigator();
const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="SendMessage"
      component={SendMessage}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default StackNavigation;
