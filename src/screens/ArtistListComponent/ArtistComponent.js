import React,{ Component } from "react";

import { 
    View, Text, Image, TouchableOpacity
} from "react-native";

import ArtistListComponentStyles from "./ArtistListComponentStyles";

class ArtistComponent extends Component{
    render(){
        return(
        <TouchableOpacity>
            <View style={ArtistListComponentStyles.containerView}>
                <Image source={this.props.imageurl}
                    style={ArtistListComponentStyles.ImageStyles}
                />
                <Text style={ArtistListComponentStyles.TextFirst}>{this.props.title}</Text>
            </View>
        </TouchableOpacity>
        );
    }
}

export default ArtistComponent;