import React,{ Component } from "react";
import { 
    ScrollView, View, Text, Image, TouchableOpacity
} from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";

import ListSongsComponentStyles from "./ListSongsComponentStyles";
import SongComponent from "./SongComponent";

class ListSongsComponent extends Component{
    render(){
        const {navigation} = this.props;
        //Ham tao list theo data truyen vao
        const createList = (data) =>{
            var Lists = data.map((songD) =>
                <SongComponent 
                    key={songD.id} 
                    imageurl={songD.imageUrl}  
                    titlesong={songD.titlesong}
                    artistsong={songD.artistsong}  

                    navigation = {navigation}
                />
            )
            return Lists;
        };
        return(
            <View style={ListSongsComponentStyles.container}>
                <Text style={ListSongsComponentStyles.TextTitle}>{this.props.titlelist}</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                {createList(this.props.data)}

                </ScrollView>
                <TouchableOpacity style={ListSongsComponentStyles.buttonXemThem}
                >
                    <Text style={ListSongsComponentStyles.textXemThem}>Xem thêm</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default ListSongsComponent;