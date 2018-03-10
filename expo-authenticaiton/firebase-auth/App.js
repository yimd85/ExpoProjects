import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentsDidMount() {
    const config = {
      apiKey: 'AIzaSyD3szkCnAjfxq6SMjWPculMzDAEcgvGk9o',
      authDomain: 'expo-authentication.firebaseapp.com',
      databaseURL: 'https://expo-authentication.firebaseio.com',
      projectId: 'expo-authentication',
      storageBucket: 'expo-authentication.appspot.com',
      messagingSenderId: '714749435563'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
