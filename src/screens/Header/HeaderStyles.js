import {StyleSheet, Dimensions} from "react-native";

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const HeaderStyles = StyleSheet.create({
    container:{
        //backgroundColor: 'red',
        flexDirection: 'row',
        width: widthDevice,
        height: heightDevice/10,
    },

    avatarImage:{
        //backgroundColor: 'blue',
        width: widthDevice/5.5,
        height: heightDevice/10,
    },

    avatarStyles:{
        backgroundColor: 'white',
        margin: 18,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        width: widthDevice/9,
        height: heightDevice/17,
    },

    searchBox:{
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 50,
        width: widthDevice/1.26,
        height: heightDevice/16,
        marginTop: 17,
    },

    searchStyles:{
        width: widthDevice/16,
        height: heightDevice/30,
        margin: 12,
    },

    searchInput:{
        //backgroundColor: 'red',
        width: widthDevice/1.87,
        height: heightDevice/15,
    },

    microStyles:{
        width: widthDevice/16,
        height: heightDevice/30,
        margin: 12,
    },
   
})

export default HeaderStyles;