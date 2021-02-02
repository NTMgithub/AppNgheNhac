import React,{ Component } from "react";

import { 
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput,
} from "react-native";

import HeaderStyles from "./HeaderStyles";

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

class Header extends Component{
    render(){
        return(
            <View style={HeaderStyles.container} >
                <View style={HeaderStyles.avatarImage}>
                    <TouchableOpacity>
                        <Image source={require('../../images/user.png')} 
                            style={HeaderStyles.avatarStyles}
                        />
                    </TouchableOpacity>
                </View>
                <View style={HeaderStyles.searchBox}>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../images/loupe.png')} 
                                style={HeaderStyles.searchStyles}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TextInput placeholder='Bài hát, playlist, nghệ sĩ...'
                            style={HeaderStyles.searchInput}
                        />
                    </View>
                    <View>
                        <TouchableOpacity>
                                <Image source={require('../../images/microphone.png')} 
                                    style={HeaderStyles.microStyles}
                                />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default Header;