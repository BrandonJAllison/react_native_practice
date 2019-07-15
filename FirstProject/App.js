/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Picker
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
function press() {
  alert('Pressed the Button')
}

const App = () => {
  return (
    <Fragment>
    <View style={styles.body}>

    </View>
     <View style={{justifyContent: 'center', alignItems: 'center', flex:3}}>
     <Text style={{padding: 10, fontSize: 42, justifyContent: 'center', alignItems: 'center'}}>
      Hello Friends
    </Text>
    <Text style={{padding: 10, fontSize: 15, justifyContent: 'center', alignItems: 'center'}}>
      My first attempt working with React Native
    </Text>
    <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          
        />
        <Button title='click me' color="#841584" onPress={press} />

    </View>
    </Fragment>
    );
   
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.black,
    flex: 1
  },
  b2: {
    backgroundColor: Colors.red,
    flex:2
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
