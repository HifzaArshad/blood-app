import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login'
import Register from '../screens/Register'
import Pick from '../screens/Pick';
import Donor from '../screens/Donor';
import Acceptor from '../screens/Acceptor';
const Stack = createStackNavigator();

function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Register} />
        <Stack.Screen name='Pick' component={Pick} />
      
       <Stack.Screen name='Acceptor' component={Acceptor} />
        <Stack.Screen name='Donor' component={Donor} />   
     
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigation;