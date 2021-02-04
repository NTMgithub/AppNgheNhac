import React,{ Component } from "react";
import { 
    ScrollView, View, Text, Image, TouchableOpacity
} from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";

import ListSongsComponentStyles from "./ListSongsComponentStyles";
import SongComponent from "./SongComponent";


const dataSong = {

    song1: {
        imageurl: require('../../images/songs/DiVeNha.jpg'),
        titlesong: "Đi về nhà",
        artist: "Đen Vâu, JustaTee"
    },

    song2: {
        imageurl: require('../../images/songs/DomDom.jpg'),
        titlesong: "Đom đóm",
        artist: "Jack"
    },

    song3: {
        imageurl: require('../../images/songs/NangTho.jpg'),
        titlesong: "Nàng thơ",
        artist: "Hoàng Dũng"
    },
    
};

class ListSongsComponent extends Component{
    render(){
        return(
            <View style={ListSongsComponentStyles.container}>
                <Text style={ListSongsComponentStyles.TextTitle}>{this.props.titlelist}</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >

                <SongComponent 
                    imageurl={dataSong.song1.imageurl} 
                    titlesong={dataSong.song1.titlesong} 
                    artistsong={dataSong.song1.artist}
                />
                <SongComponent 
                    imageurl={dataSong.song2.imageurl} 
                    titlesong={dataSong.song2.titlesong} 
                    artistsong={dataSong.song2.artist}
                />
                <SongComponent 
                    imageurl={dataSong.song3.imageurl} 
                    titlesong={dataSong.song3.titlesong} 
                    artistsong={dataSong.song3.artist}
                />
                <SongComponent 
                    imageurl={dataSong.song1.imageurl} 
                    titlesong={dataSong.song1.titlesong} 
                    artistsong={dataSong.song1.artist}
                />
                <SongComponent 
                    imageurl={dataSong.song2.imageurl} 
                    titlesong={dataSong.song2.titlesong} 
                    artistsong={dataSong.song2.artist}
                />
                <SongComponent 
                    imageurl={dataSong.song3.imageurl} 
                    titlesong={dataSong.song3.titlesong} 
                    artistsong={dataSong.song3.artist}
                />
                <SongComponent 
                    imageurl={dataSong.song1.imageurl} 
                    titlesong={dataSong.song1.titlesong} 
                    artistsong={dataSong.song1.artist}
                />
                <SongComponent 
                    imageurl={dataSong.song2.imageurl} 
                    titlesong={dataSong.song2.titlesong} 
                    artistsong={dataSong.song2.artist}
                />
                <SongComponent 
                    imageurl={dataSong.song3.imageurl} 
                    titlesong={dataSong.song3.titlesong} 
                    artistsong={dataSong.song3.artist}
                />

                </ScrollView>
                <TouchableOpacity style={ListSongsComponentStyles.buttonXemThem}>
                    <Text style={ListSongsComponentStyles.textXemThem}>Xem thêm</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default ListSongsComponent;