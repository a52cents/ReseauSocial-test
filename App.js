import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
;
import { firebaseConfig } from './FirebaseConfig';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
export default function App() {


  const stack = createStackNavigator();
 
  return (
    <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="Loading" component={LoadingScreen} options={{headerShown: false}}/>
          <stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
          <stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
          <stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />

        </stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
