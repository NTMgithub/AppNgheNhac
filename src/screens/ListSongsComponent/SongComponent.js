import React,{ Component } from "react";
import { 
    View, Text, Image, TouchableOpacity
} from "react-native";

//import "react-native-gesture-handler";

import ListSongsComponentStyles from "./ListSongsComponentStyles";

class SongComponent extends Component {
    render(){
    return(
        <View style={ListSongsComponentStyles.songComponent}>
            <TouchableOpacity style={ListSongsComponentStyles.containerImageTitle}
                onPress={()=> this.props.navigation.push('PlayAudioScreen') }
            >
                <Image source={this.props.imageurl}
                    style={ListSongsComponentStyles.imageContainer}
                />
                <View style={ListSongsComponentStyles.titleSongView}>
                    <Text style={ListSongsComponentStyles.titleSong}>{this.props.titlesong}</Text>
                    <Text style={ListSongsComponentStyles.artistSong}>{this.props.artistsong}</Text>
                </View>
            </TouchableOpacity>

            <View style={ListSongsComponentStyles.containerHeartDetail}>
                <TouchableOpacity>
                    <Image source={require('../../images/heart.png')}
                        style={ListSongsComponentStyles.heartStyles}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../images/threedots.png')}
                        style={ListSongsComponentStyles.threeDots}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
    }
};


export default SongComponent;