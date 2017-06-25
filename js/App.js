import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Today from './components/Today';
import Weather from './components/Weather';
// import '../css/components/App.scss';

export default class App extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <View>
            <Text className="Title">{'Almanac'}</Text>
            <Today />
            <Weather />
        </View>
    );
  }
}
