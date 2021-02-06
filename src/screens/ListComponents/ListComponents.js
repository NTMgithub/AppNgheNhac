import React,{ Component } from "react";

import { 
    View, Text, ScrollView, Image, TouchableOpacity
} from "react-native";

import ListComponentsStyles from "../ListComponents/ListComponentsStyles";
import MainComponent from "../ListComponents/MainComponent";

class ListComponents extends Component{
    render(){
        //Ham tao list theo data truyen vao
        const createList = (data) =>{
            var Lists = data.map((albumD) =>
                <MainComponent 
                    key={albumD.id} 
                    imageurl={albumD.imageUrl}  
                    title={albumD.title}
                    description={albumD.description}  
                />
            )
            return Lists;
        };
        return(
            <View style={ListComponentsStyles.container}>
                <Text style={ListComponentsStyles.TextTitle}>{this.props.titlelist}</Text>
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

export default ListComponents;