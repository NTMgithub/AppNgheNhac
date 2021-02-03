import React,{ Component } from "react";

import { 
    View,
} from "react-native";

import ShortcutIconsStyles from "./ShortcutIconsStyles";
import ShortcutComponent from "./ShortcutComponent";

const shortcuticons = {
    icon1:{
        imageurl: require('../../images/musicicon.png'),
        title: 'Nhạc mới',
    },
    icon2:{
        imageurl: require('../../images/categoryicon.png'),
        title: ' Thể loại',
    },
    icon3:{
        imageurl: require('../../images/music-heart.png'),
        title: 'Nghe nhiều',
    },
}

class ShortcutIcons extends Component{
    render(){
        return(
            <View style={ShortcutIconsStyles.container}>
                <ShortcutComponent 
                    imageurl={shortcuticons.icon1.imageurl}
                    title={shortcuticons.icon1.title}
                />
                <ShortcutComponent 
                    imageurl={shortcuticons.icon2.imageurl}
                    title={shortcuticons.icon2.title}
                />
                <ShortcutComponent 
                    imageurl={shortcuticons.icon3.imageurl}
                    title={shortcuticons.icon3.title}
                />
                
            </View>
        );
    }
}


export default ShortcutIcons;