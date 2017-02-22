import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import logo from '../../assets/images/logo-big.png';

const Launch = () => (
  <View style={styles.root}>
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Button title='Hjem' onPress={() => {Actions.tabbar(); Actions.home();}} />
      <Text style={styles.welcome}>
        LOGG INN
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    width: Dimensions.get('window').width/3,
    resizeMode: 'contain'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default Launch;
