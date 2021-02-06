import React,{ Component } from "react";

import { 
    View, Text, Image
} from "react-native";

import SliderStyles from "./SliderStyles";

import Swiper from "react-native-swiper";

class Slider extends Component{
    render(){
        const createList = (data)=>{
            var Lists = data.map((dataD) =>
                <View key={dataD.id}>
                    <Image 
                        source={dataD.imageUrl}
                        style={SliderStyles.sliderImage}
                    />
                </View>
            )
            return Lists;
        };
        return(
            <View style={SliderStyles.container}>
            <Swiper 
                autoplay 
                autoplayTimeout={5}
            >

            {createList(this.props.data)}
                
            </Swiper>
            </View>
        );
    }
}

export default Slider;