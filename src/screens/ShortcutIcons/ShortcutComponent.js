import React,{ Component } from "react";

import { 
    Text, Image, TouchableOpacity
} from "react-native";

import ShortcutIconsStyles from "./ShortcutIconsStyles";

class ShortcutComponent extends Component{
    render(){
        return(
            <TouchableOpacity>
                <Image source={this.props.imageurl} 
                    style={ShortcutIconsStyles.imageIcon}
                />
                <Text style={ShortcutIconsStyles.imageText} >{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default ShortcutComponent;