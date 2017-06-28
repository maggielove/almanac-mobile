import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Today from './components/Today';
import Weather from './components/Weather';

export default class App extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <View>
            <Today />
            <Weather />
        </View>
    );
  }
}
