import React,{ Component } from "react";
import { 
    ScrollView,
} from "react-native";

import "react-native-gesture-handler";

import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import ShortcutIcons from "../ShortcutIcons/ShortcutIcons";
import ListComponents from "../ListComponents/ListComponents";
import ListSongsComponent from "../ListSongsComponent/ListSongsComponent";
import ArtistListComponent from "../ArtistListComponent/ArtistListComponent";

// data example
const artistData = [
    {   
        id: 1,
        imageUrl: require('../../images/artists/redvelvet.jpg'),
        name: 'Red Velvet',
    },
    {   
        id: 2,
        imageUrl: require('../../images/artists/Ngot.png'),
        name: 'Ngọt',
    },
    {
        id: 3,
        imageUrl: require('../../images/artists/MTP.jpg'),
        name: 'Sơn Tùng M-TP',
    },
    {
        id: 4,
        imageUrl: require('../../images/artists/DenVau.jpg'),
        name: 'Đen Vâu',
    },
];

const albumData = [
    {
        id: 1,
        imageUrl: require('../../images/playlist/redvelvetalbum.jpg'),
        title: 'Perfect Velvet',
        description: 'Album hay nhất trong năm của Red Velvet...',
    },
    {
        id: 2,
        imageUrl: require('../../images/playlist/redvelvetalbum2.png'),
        title: 'Sappy 2',
        description: 'Nguồn năng lượng tươi mới từ Red Velvet...',
    },
    {
        id: 3,
        imageUrl: require('../../images/playlist/redvelvetalbum3.jpg'),
        title: 'Red Flavor',
        description: 'Thư giãn với giai điệu nhẹ nhàng của Red Flavor...',
    },
];

const songData = [
    {
        id: 1,
        imageUrl: require('../../images/songs/DiVeNha.jpg'),
        titlesong: "Đi về nhà",
        artistsong: "Đen Vâu, JustaTee"
    },
    {
        id: 2,
        imageUrl: require('../../images/songs/DomDom.jpg'),
        titlesong: "Đom đóm",
        artistsong: "Jack"
    },
    {
        id: 3,
        imageUrl: require('../../images/songs/NangTho.jpg'),
        titlesong: "Nàng thơ",
        artistsong: "Hoàng Dũng"
    },
];

const sliderData = [
    {
        id: 1,
        imageUrl: require('../../images/Slider/slider1.jpg'),
    },
    {
        id: 2,
        imageUrl: require('../../images/Slider/slider2.jpg'),
    },
    {
        id: 3,
        imageUrl: require('../../images/Slider/slider3.jpg'),
    },
];

class Home extends Component{
    render(){
        const {navigation} = this.props;
        return (
            <ScrollView 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{flex: 1, flexDirection: 'column' }}
            >
                <Header />
                <Slider data={sliderData} />
                <ShortcutIcons />
                <ListComponents titlelist='Red Velvet hay nhất' data={albumData} />

                <ListSongsComponent titlelist='Bài hát nghe nhiều' data={songData} navigation={navigation} />

                <ListComponents titlelist='Playlist thư giãn' data={albumData} />
                <ListComponents titlelist='Indie Việt toàn tập' data={albumData} />

                <ArtistListComponent titlelist='Nghệ sĩ yêu thích' data={artistData} />

   
            </ScrollView>
        );
    }
}

export default Home;