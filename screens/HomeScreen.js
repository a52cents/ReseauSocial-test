import React, { Component } from 'react'
import { Text, TouchableOpacity, View,StyleSheet } from 'react-native'
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { updateCurrentUser,signOutUser } from 'firebase/auth';

export class HomeScreen extends Component {
    state = {
        email: "",
        password: "",
        displayName: ""
    }

    componentDidMount() {
      const { route } = this.props;
      const { email, displayName } = route.params;
      this.setState({
        email: email,
        displayName: displayName,
      });
    }

    signOutUser =() => {
      FIREBASE_AUTH.signOut()
      .then(() => {
        // Déconnexion réussie
        this.props.navigation.navigate("Login");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.setState({ errorMessage: errorMessage });
        console.log(errorMessage);
      });
    }

  render() {
    return (
      <View style={styles.container}>
        <Text> Hi {this.state.email} or {this.state.displayName}</Text>

        <TouchableOpacity style={{marginTop:32}} onPress={this.signOutUser}>
            <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen
