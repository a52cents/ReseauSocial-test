import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Component } from 'react';

export class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.greeting}>{'Hello again.\nWelcome Back !'}</Text>
        </View>
        <View>
          <Text style={styles.errorMessage}>Error</Text>
        </View>
        <View style={styles.buttonBg}>
          <View style={styles.form}>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput style={styles.input} placeholder="Email" autoCapitalize='none'></TextInput>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonBg: {
    position: 'absolute',
    bottom: -20,
    width: '100%',
    height: 490,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  inputTitle: {
    color: '#FFFFFF', // Blanc
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: '#FFFFFF', // Blanc
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    width: '90%',
    marginHorizontal: 10,
    fontSize: 15,
    color: '#FFFFFF' // Blanc
  },
  form: {
    
  }
});

export default LoginScreen;
