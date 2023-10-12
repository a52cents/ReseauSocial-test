import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";
import { auth } from "../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebase from 'firebase/app';
export class LoginScreen extends Component {

  state = {
    email: "",
    password: "",
    errorMessage:null
  }

  handleLogin= () => {
    const {email, password} = this.state;
     firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {error.message});
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.greeting}>{"Hello again.\nWelcome Back !"}</Text>
        </View>
        <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}> {this.state.errorMessage} </Text>}
        </View>
        <View style={styles.buttonBg}>
          <View style={styles.form}>
            <Text style={styles.inputTitle}>Email Address</Text>
            <ImageBackground
              source={require("../assets/inputfield-empty.png")}
              style={styles.inputImage}
            >
              <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              ></TextInput>
            </ImageBackground>
          </View>

          <View style={styles.form}>
            <Text style={styles.inputTitle}>Password</Text>
            <ImageBackground
              source={require("../assets/inputfield-empty.png")}
              style={styles.inputImage}
            >
              <TextInput
                style={styles.input}
                placeholder="password"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={password => this.setState({ password})}
                value={this.setState.password}
              ></TextInput>
            </ImageBackground>
          </View>
          <View style={styles.form}>
            <TouchableOpacity style={styles.button} onPress={this.handleLogin()}>
              <Text style={{ color: "black", fontWeight: "600", fontSize: 18 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "black", fontWeight: "600", fontSize: 18 }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00000",
  },
  buttonBg: {
    position: "absolute",
    bottom: -20,
    width: "100%",
    height: 684,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    position: "absolute",
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  inputTitle: {
    color: "#FFFFFF", // Blanc
    fontSize: 10,
    left: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#FFFFFF", // Blanc
    height: 40,
    width: "90%",
    marginHorizontal: 10,
    left: 0,
    fontSize: 15,
    color: "#FFFFFF", // Blanc
  },
  form: {
    bottom: 0,
    marginVertical: 8,
  },
  inputImage: {
    width: 327,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#7B61FF",
    borderRadius: 16,
    height: 48,
    width: 327,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
