import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './LoadingScreen';

const Stack = createStackNavigator();

export class navigationTab extends Component {
  render() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen} />

    </Stack.Navigator>
    )
  }
}

export default navigationTab
