import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  TextInput,
  Button,
  Animated,
} from "react-native";
import React, { Component } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";
import { FIREBASE_APP } from "../FirebaseConfig";
import { FIREBASE_AUTH } from "../FirebaseConfig";

export class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.imageOpacity = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.imageOpacity, {
      toValue: 0,
      duration: 2001, // Durée de l'animation (en millisecondes)
      useNativeDriver: true, // Utiliser le driver natif pour les performances
    }).start();

    setTimeout(() => {
      FIREBASE_AUTH.onAuthStateChanged((user) => {
        if (user) {
          this.props.navigation.navigate("Home");
        } else {
          this.props.navigation.navigate("Login");
        }
      });
    }, 2000);
  }

  render() {
    const imageStyle = {
      opacity: this.imageOpacity,
    };

    return (
      <View style={styles.container}>
        <Animated.Image
          source={require("../assets/logo.png")}
          style={[styles.image]}
        />
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" color="#CBC3E3" />
        </View>
        <View style={styles.label}>
          <Text style={[styles.textLabel, styles.textHighlight]}>
            !React. by <Text style={styles.textLabel}>me</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },

  activityIndicatorContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 117.692,
    height: 120,
    flexShrink: 0,
  },
  label: {
    bottom: 30,
    position: "absolute",
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
});

export default LoadingScreen;
