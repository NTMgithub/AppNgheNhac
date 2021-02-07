import React,{ Component } from "react";

import { 
    View, ScrollView, Image, Text, TouchableOpacity
} from "react-native";

import Slider from "@react-native-community/slider";

import PlayAudioScreenStyles from "./PlayAudioScreenStyles";

class PlayAudioScreen extends Component{
    render(){
        return(
            <ScrollView style={PlayAudioScreenStyles.container} 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={PlayAudioScreenStyles.header} >
                    <TouchableOpacity onPress ={ ()=> this.props.navigation.goBack() } >
                        <Image source={require('../../images/expand-arrow.png')}
                            style={PlayAudioScreenStyles.expandArrow}
                        />
                    </TouchableOpacity>
                    <View style={PlayAudioScreenStyles.titleContainer}>
                        <Text style={PlayAudioScreenStyles.headerText1} >
                            Đang phát từ Album
                        </Text>
                        <Text style={PlayAudioScreenStyles.headerText2} >
                            Perfect Velvet
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../../images/threedots.png')}
                            style={PlayAudioScreenStyles.threeDots}
                        />
                    </TouchableOpacity>
                </View>
                <View style={PlayAudioScreenStyles.imageContainer} >
                    <Image source={require('../../images/playlist/redvelvetalbum.jpg')} 
                            style={PlayAudioScreenStyles.imageStyle}
                    />
                </View>
                <View style={PlayAudioScreenStyles.infoContainer} >
                    <View style={PlayAudioScreenStyles.infoName} >
                        <View style={PlayAudioScreenStyles.infoTextName} >
                            <Text style={PlayAudioScreenStyles.nameSong} >
                                Peek-A-Boo
                            </Text>
                            <Text style={PlayAudioScreenStyles.artistSong} >
                                Red Velvet
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../../images/heart.png')}
                                    style={PlayAudioScreenStyles.heartIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={PlayAudioScreenStyles.infoControls} >
                        <View>
                            <Slider style={PlayAudioScreenStyles.seekBarStyle} 
                                maximumTrackTintColor="#000000"
                                minimumTrackTintColor="#FFFFFF"
                                thumbTintColor="#FFFFFF"
                            />
                        </View>
                        <View style={PlayAudioScreenStyles.textSeekbarContainer} >
                            <Text style={PlayAudioScreenStyles.textSeekbar} >0:00</Text>
                            <Text style={PlayAudioScreenStyles.textSeekbar} >3:17</Text>
                        </View>
                        <View style={PlayAudioScreenStyles.mediaControlContainer} > 
                            <TouchableOpacity>
                                <Image source={require('../../images/shuffle.png')}  
                                    style={PlayAudioScreenStyles.repeatShuffleStyle}
                                />
                            </TouchableOpacity>
                            <View style={PlayAudioScreenStyles.mainButtonContainer} >
                                <TouchableOpacity>
                                    <Image source={require('../../images/skip-to-start.png')}  
                                        style={PlayAudioScreenStyles.previousNextControl}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={PlayAudioScreenStyles.playButtonContainer} >
                                    <Image source={require('../../images/play.png')}  
                                        style={PlayAudioScreenStyles.playButton}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../../images/end.png')}  
                                        style={PlayAudioScreenStyles.previousNextControl}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../../images/repeat.png')}  
                                    style={PlayAudioScreenStyles.repeatShuffleStyle}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={PlayAudioScreenStyles.lyricContainer} >
                    <View style={PlayAudioScreenStyles.lyricView1} >
                        <Text style={PlayAudioScreenStyles.textLyric} >
                            Lời bài hát
                        </Text>
                        <View style={PlayAudioScreenStyles.lyricView2} >
                            <Text style={PlayAudioScreenStyles.lyricFullText} >
                            Peek-peek-a-peek-a-boo {'\n'}
                            Peek-peek-a-peek-a-boo  {'\n'}
                            흥, 흥이 난 여우 그, 그런 나라구 {'\n'}
                            Peek-peek-a-peek-a-boo {'\n'}
                            I said one, two, three! play the game again
                            </Text>     
                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        );
    }
}

export default PlayAudioScreen;