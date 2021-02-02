import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';

import Header from "./src/screens/Header/Header";
import Slider from "./src/screens/Slider/Slider";


const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Header />
        <Slider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: widthDevice,
    height: heightDevice,
    backgroundColor: '#D7E1E3',
  },
})


export default App;