import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FIREBASE_AUTH } from "../FirebaseConfig";

export class HomeScreen extends Component {
    state = {
        email: "",
        password: "",
        displayName: ""
    }

    componentDidMount(){
        const {email,displayName} = FIREBASE_AUTH().currentUser

        this.setState({
            email,
            displayName
        })
    }

    signOutUser =() => {
        FIREBASE_AUTH().signOut()
    }

  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>

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
