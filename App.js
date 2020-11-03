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
import PopMotion from './src/components/PopMotion';

import TextAnimator from './src/components/TextAnimator';


const App = () => {
  const _onFinish=() =>{
    console.log('Animation finish')
  }
  return (
    <View style={styles.constainer}>
      {/* <StatusBar /> */}
      {/* <PopMotion/> */}
      {/* <TextAnimator  onFinish ={_onFinish}duration={1000} textStyle={styles.textStyle} style={styles.containerStyle} content="For the things we have to learn before we can do them, we learn by doing them. REACT NATIVE" /> */}

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
