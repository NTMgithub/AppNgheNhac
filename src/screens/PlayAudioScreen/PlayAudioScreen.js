import React,{ Component } from "react";

import { 
    View, Text, Button
} from "react-native";



class PlayAudioScreen extends Component{
    render(){
        return(
            <View>
                <Text>Play audio screen!</Text>
                <Button title="Back" onPress={()=>this.props.navigation.goBack() } 
                 
                />
            </View>
        );
    }
}

export default PlayAudioScreen;