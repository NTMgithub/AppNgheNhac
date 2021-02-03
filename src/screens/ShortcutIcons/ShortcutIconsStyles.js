import { 
    StyleSheet, Dimensions
} from "react-native";

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const ShortcutIconsStyles = StyleSheet.create({
    container:{
        //backgroundColor: 'blue',
        width: widthDevice/1.065,
        height: heightDevice/10,
        margin: 10,
        marginTop: -10,
        flexDirection: "row",
        justifyContent: "space-around",
    },

    imageIcon:{
        width: widthDevice/8,
        height: heightDevice/15,
        marginLeft: 4,
        marginBottom: 5,
    },

    imageText:{
        fontSize: 13.5,
        fontWeight: "600",
    
    },

})

export default ShortcutIconsStyles;