/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  greet: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greet}>
          Hello There...!
        </Text>
        <Text style={styles.welcome}>
          Welcome to Realm Explorer!
        </Text>
      </View>
    );
  }
}
