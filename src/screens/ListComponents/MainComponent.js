import React,{ Component } from "react";

import { 
    View, Text, Image, TouchableOpacity
} from "react-native";

import ListComponentsStyles from "../ListComponents/ListComponentsStyles";

class MainComponent extends Component{
    render(){
        return(
        <TouchableOpacity>
            <View style={ListComponentsStyles.containerView}>
                <Image source={this.props.imageurl}
                    style={ListComponentsStyles.ImageStyles}
                />
                <Text style={ListComponentsStyles.TextFirst}>{this.props.title}</Text>
                <Text style={ListComponentsStyles.TextSecond}>{this.props.description}</Text>
            </View>
        </TouchableOpacity>
        );
    }
}

export default MainComponent;