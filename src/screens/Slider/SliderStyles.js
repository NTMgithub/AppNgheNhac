import {StyleSheet, Dimensions} from "react-native";

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;


const SliderStyles = StyleSheet.create({
    container:{
        //backgroundColor: 'lightblue',
        width: widthDevice/1.06,
        height: heightDevice/4,
        borderRadius: 10,
        margin: 10,
    },

    sliderImage:{
        width: widthDevice/1.065,
        height: heightDevice/4.5,
        borderRadius: 20,
    },
})

export default SliderStyles;