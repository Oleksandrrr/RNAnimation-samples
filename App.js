/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TextAnimator from './src/components/TextAnimator';
const { width } = Dimensions.get('screen');

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;


const App = () => {
  const _onFinish=() =>{
    console.log('Animation finish')
  }
  return (
    <View style={styles.constainer}>
      <StatusBar />
      <TextAnimator  onFinish ={_onFinish}duration={1000} textStyle={styles.textStyle} style={styles.containerStyle} content="For the things we have to learn before we can do them, we learn by doing them. REACT NATIVE" />
    </View>
  );
};

const styles = StyleSheet.create({ 
  constainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop: 20,
    padding: 8
  },
  containerStyle: {},
  textStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 14
  }
});

export default App;
