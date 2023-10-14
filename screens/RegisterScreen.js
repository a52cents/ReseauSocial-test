import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { Component } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";
import { FIREBASE_APP } from "../FirebaseConfig";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebase from "firebase/app";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export class RegisterScreen extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    errorMessage: null,
  };

  handleSignUp = () => {
    const { name, email, password } = this.state;
    createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredential) => {
        return userCredential.user.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.setState({ errorMessage: errorMessage });
      });
  };
  

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View>
          <Text style={styles.greeting}>
            {"Hello.\nSign Up to get started !"}
          </Text>
        </View>
        <View style={styles.errorMessage}>
          <Text style={styles.error}> {this.state.errorMessage} </Text>
        </View>
        <ScrollView 
          contentContainerStyle={styles.buttonBg}
          style={{ width: "100%" }}
          >
            <TouchableOpacity>
            <ImageBackground
              source={require("../assets/logo.png")}
              style={styles.logo}
            />
          </TouchableOpacity>
          <View style={styles.form}>
            <Text style={styles.inputTitle}>Username</Text>
            <ImageBackground
              source={require("../assets/inputfield-empty.png")}
              style={styles.inputImage}
            >
              <TextInput
                style={styles.input}
                placeholder="username"
                autoCapitalize="none"
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
              ></TextInput>
            </ImageBackground>
          </View>

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
                onChangeText={(email) => this.setState({ email })}
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
                onChangeText={(password) => this.setState({ password })}
                value={this.setState.password}
              ></TextInput>
            </ImageBackground>
          </View>

          <View style={styles.form}>
            <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
              <Text style={{ color: "black", fontWeight: "600", fontSize: 18 }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.form}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={{ color: "black", fontWeight: "600", fontSize: 18 }}>
                Login ?
              </Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.label}>
            <Text style={[styles.textLabel, ]}>
              !React. by <Text style={[styles.textLabel,styles.textHighlight]}>@ziouut</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000000",
  },
  logo: {
    width: 117.692,
    height: 120,
    flexShrink: 0,
  },
  
  textLabel: {
    color: "white",
    fontFamily: "",
    fontSize: 13,
    fontWeight: "700",
    left: 0,
    letterSpacing: 0,
    lineHeight: 30,
  },
  textHighlight: {
    color: "#CBC3E3",
  },
  label: {
    bottom: 30,
    position: "absolute",
  },
  buttonBg: {
    position: "relative",
    bottom: -65,
    width: "100%",
    height: 684,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 24,
    flex:1
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    color: "#FFFFFF", // Blanc
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    position: "absolute",
    top: 60,
  },
  error: {
    color: "white",
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
    marginVertical: -50,
    marginTop: 60,
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

export default RegisterScreen;
