import React,{ Component } from "react";
import { 
    ScrollView,
} from "react-native";

import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import ShortcutIcons from "../ShortcutIcons/ShortcutIcons";
import ListComponents from "../ListComponents/ListComponents";
import ListSongsComponent from "../ListSongsComponent/ListSongsComponent";


class Home extends Component{
    render(){
        return (
            <ScrollView 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{flex: 1, flexDirection: 'column' }}
            >
                <Header />
                <Slider />
                <ShortcutIcons />
                <ListComponents titlelist='Red Velvet hay nhất' />
                <ListSongsComponent titlelist='Bài hát nghe nhiều' />

                <ListComponents titlelist='Playlist thư giãn' />
                <ListComponents titlelist='Indie Việt toàn tập' />

                <ListComponents titlelist='Nghệ sĩ yêu thích' />
            </ScrollView>
        );
    }
}

export default Home;