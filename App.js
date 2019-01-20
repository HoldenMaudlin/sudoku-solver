import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputScreen from './Screens/InputScreen'
//import Amplify, { API } from 'aws-amplify';

//Amplify.configure(aws_exports);


export default class App extends React.Component {
  render() {
    return (
      <InputScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
