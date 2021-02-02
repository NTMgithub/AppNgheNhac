import React,{ Component } from "react";

import { 
    View, Text, Image
} from "react-native";

import SliderStyles from "./SliderStyles";

import Swiper from "react-native-swiper";

class Slider extends Component{
    render(){
        return(
            <View style={SliderStyles.container}>
            <Swiper 
                autoplay 
                autoplayTimeout={5}
            >
                <View>
                    <Image source={require('../../images/Slider/slider1.jpg')}
                        style={SliderStyles.sliderImage}
                    />
                </View>
                <View>
                    <Image source={require('../../images/Slider/slider2.jpg')}
                        style={SliderStyles.sliderImage}
                    />
                </View>
                <View>
                    <Image source={require('../../images/Slider/slider3.jpg')}
                        style={SliderStyles.sliderImage}
                    />
                </View>
            </Swiper>
            </View>
        );
    }
}

export default Slider;