/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


//import HandlingTouchComponent from './app/components/HandlingTouchComponent/HandlingTouchComponent';

import TouchableComponent from './app/components/TouchableComponent/TouchableComponent';
import ScrollableComponent from './app/components/ScrollableComponent/ScrollableComponent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <ScrollableComponent/>

      </View>
    );
  }
}

