import { 
    StyleSheet, Dimensions
} from "react-native";

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const ArtistListComponentStyles = StyleSheet.create({
    container:{
        //backgroundColor: 'lightblue',
        width: widthDevice/1.065,
        height: heightDevice/3,
        margin: 10,
    },

    TextTitle:{
        fontSize: 18,
        fontWeight: "bold",
        margin: 2,
    },

    ImageStyles:{
        width: widthDevice/2.5,
        height: heightDevice/5,
        marginVertical: 6,
        borderRadius: 100,
    },

    containerView:{
        //backgroundColor: 'yellow',
        width: widthDevice/2.45,
        height: heightDevice/3,
        marginHorizontal: 5,
    },

    TextFirst:{
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
    },

})

export default ArtistListComponentStyles;