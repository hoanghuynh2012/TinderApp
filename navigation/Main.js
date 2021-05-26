import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ManHinhChao from '../src/Login/ManHinhChao';
import Login from '../src/Login/Login';
import ChonGt from '../src/Login/ChonGioiTinh';
import SignUp from '../src/Login/SignUp';

const Stack = createStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ManHinhChao" component={ManHinhChao} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChonGt" component={ChonGt} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
