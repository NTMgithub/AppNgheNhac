import { 
    StyleSheet, Dimensions
} from "react-native";

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const ListSongsComponentStyles = StyleSheet.create({
    container:{
        //backgroundColor: 'lightblue',
        width: widthDevice/1.065,
        //height: heightDevice/2,
        margin: 10,
    },
    
    TextTitle:{
        fontSize: 18,
        fontWeight: "bold",
        margin: 2,
        marginBottom: 10,
    },

    songComponent:{
        //backgroundColor: 'green',
        width: widthDevice/1.065,
        height: heightDevice/12,
        flexDirection: 'row',
        marginVertical: 5,
    },

    containerImageTitle:{
        flexDirection: 'row',
        width: widthDevice/1.35,
    },

    imageContainer:{
        width: widthDevice/6,
        height: heightDevice/12,
        borderRadius: 10,
    },

    titleSongView:{
        margin: 10,
        marginTop: 7,
    },

    titleSong:{
        fontSize: 16.5,
        fontWeight: "bold",
    }, 
    
    artistSong:{
        fontSize: 14,
        color: 'grey',
    },

    containerHeartDetail:{
        flexDirection: 'row', 
        
    },

    heartStyles:{
        width: widthDevice/15,
        height: heightDevice/30,
        margin: 10,
        

    },

    threeDots:{
        width: widthDevice/20,
        height: heightDevice/35,
        margin: 12,
    },

    buttonXemThem:{
        backgroundColor: '#CCCCCC',
        width: widthDevice/3.5,
        height: heightDevice/30,
        borderRadius: 20,
        margin: 5,
        marginLeft: widthDevice/3,
    },

    textXemThem:{
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
    },

})

export default ListSongsComponentStyles;