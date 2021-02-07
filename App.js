import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';

import Navigation from "./src/screens/Navigation/Navigation";
import PlayAudioScreen from "./src/screens/PlayAudioScreen/PlayAudioScreen";

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

class App extends Component{
  render(){
    return(
    <View style={styles.container} >
        <Navigation />
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