import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import TestImage from "./source/images/testImage.jpg";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image resizeMode="contain" style={styles.image} source={TestImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },

  image: {
    width: 400,
    height: 50,
    flex: 1
  },
});
