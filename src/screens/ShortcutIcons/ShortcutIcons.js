import React,{ Component } from "react";

import { 
    View, Text, Image, TouchableOpacity
} from "react-native";

import ShortcutIconsStyles from "./ShortcutIconsStyles";


class ShortcutIcons extends Component{
    render(){
        return(
            <View style={ShortcutIconsStyles.container}>
                <TouchableOpacity>
                    <Image source={require('../../images/musicicon.png')} 
                        style={ShortcutIconsStyles.imageIcon}
                    />
                    <Text style={ShortcutIconsStyles.imageText} >Nhạc mới</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require('../../images/categoryicon.png')} 
                        style={ShortcutIconsStyles.imageIcon}
                    />
                    <Text style={ShortcutIconsStyles.imageText} > Thể loại</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require('../../images/music-heart.png')} 
                        style={ShortcutIconsStyles.imageIcon}
                    />
                    <Text style={ShortcutIconsStyles.imageText} >Nghe nhiều</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ShortcutIcons;