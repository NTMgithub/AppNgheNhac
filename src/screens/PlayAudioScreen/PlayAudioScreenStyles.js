import { StyleSheet, Dimensions } from "react-native";

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const PlayAudioScreenStyles = StyleSheet.create({
    container:{
        backgroundColor: 'grey',
        width: widthDevice,
        height: heightDevice,
    },

    header:{
        backgroundColor: 'grey',
        width: widthDevice,
        height: heightDevice/15,
        flexDirection: 'row',
    },

    imageContainer:{
        width: widthDevice,
        height: heightDevice/2.3,
        justifyContent: 'center',
    },

    imageStyle:{
        width: widthDevice/1.28,
        height: heightDevice/2.4,
        margin: 10,
        alignSelf: "center",
    },

    infoContainer:{
        //backgroundColor: '#B2BE00',
        width: widthDevice,
        height: heightDevice/4,
    },

    expandArrow:{
        width: widthDevice/15,
        height: heightDevice/30,
        margin: 12,
        tintColor: '#EFF2FB',
    },

    titleContainer:{
        width: widthDevice/1.31,
        height: heightDevice/15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    threeDots:{
        width: widthDevice/20,
        height: heightDevice/35,
        margin: 12,
        tintColor: '#EFF2FB',
    },

    headerText1:{
        textTransform: 'uppercase',
        fontSize: 12,
        color: '#EFF2FB',
    },

    headerText2:{
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
    },

    infoName:{
        flexDirection: 'row',
    },

    infoTextName:{
        margin: 10,
        width: widthDevice/1.81,
        marginHorizontal: widthDevice/8.7,
    },

    nameSong:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },

    artistSong:{
        fontSize: 16,
        color: '#ECE8FF',
        fontWeight: "300",
    },

    heartIcon:{
        width: widthDevice/17,
        height: heightDevice/35,
        margin: 16,
        tintColor: '#EFF2FB',
    },

    infoControls:{
        //backgroundColor: '#8B65F2',
        //width: widthDevice,
        height: heightDevice/6.5,
        
    },

    seekBarStyle:{
        width: widthDevice/1.17,
        height: heightDevice/40,
        marginTop: 5,
        margin: 20,
        alignSelf: "center",
    },

    textSeekbarContainer:{
        flexDirection: 'row',
        justifyContent: "space-between",
        width: widthDevice/1.27,
        height: heightDevice/40,
        alignSelf: "center",
        marginTop: -20,
    },

    textSeekbar:{
        color: "#EFF2FB",
    },

    mediaControlContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: widthDevice/1.27,
        alignSelf: 'center',
        marginTop: 10,
       // backgroundColor: 'blue',
    },

    mainButtonContainer:{
        flexDirection: 'row',
        //backgroundColor: 'red',
        width: widthDevice/2.5,
        height: heightDevice/30,
        justifyContent: 'space-between',
        alignSelf: 'center',
        //marginTop: -4,
    },

    repeatShuffleStyle:{
        width: widthDevice/20,
        height: heightDevice/40,
        margin: 3,
        tintColor: '#FFFFFF',
    },

    previousNextControl:{
        width: widthDevice/12.5,
        height: heightDevice/25,
        tintColor: '#FFFFFF',
    },

    playButton:{
        width: widthDevice/15,
        height: heightDevice/30,
        margin: 11,
        marginHorizontal: 13.5,
    },


    playButtonContainer:{
        backgroundColor: 'white',
        borderRadius: 50,
        width: widthDevice/8,
        height: heightDevice/15.5,
        marginTop: -10,
    },

    lyricContainer:{
        //backgroundColor: 'red',
        height: heightDevice/2,
    },

    lyricView1:{
        backgroundColor: '#BE544B',
        width: widthDevice/1.22,
        height: heightDevice/5,
        alignSelf: 'center',
        borderRadius: 10,
    },

    textLyric:{
        fontSize: 12.5,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        margin: 10,
    },

    lyricView2:{
        //backgroundColor: 'green',
        width: widthDevice/1.22,
        height: heightDevice/7,
        alignSelf: 'center',
        marginTop: -15,
    },

    lyricFullText:{
        margin: 10,
        fontSize: 16,
        color: '#FFFFFF',
    },

});

export default PlayAudioScreenStyles;