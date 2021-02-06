import React,{ Component } from "react";

import { 
    View, Text, ScrollView, Image, TouchableOpacity
} from "react-native";

import ArtistListComponentStyles from "./ArtistListComponentStyles"
import ArtistComponent from "./ArtistComponent";


class ArtistListComponent extends Component{
    render(){
        //Ham tao list theo data truyen vao
        const createList = (data) =>{
            var Lists = data.map((artistD) =>
                <ArtistComponent 
                    key={artistD.id} 
                    imageurl={artistD.imageUrl}  
                    title={artistD.name}    
                />
            )
            return Lists;
        };
        
        return(
            <View style={ArtistListComponentStyles.container}>
                <Text style={ArtistListComponentStyles.TextTitle}>{this.props.titlelist}</Text>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                
                    {createList(this.props.data)}

                </ScrollView>  
            </View>
        );
    }
}

export default ArtistListComponent;