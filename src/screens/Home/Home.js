import React,{ Component } from "react";
import { 
    ScrollView,
} from "react-native";

import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import ShortcutIcons from "../ShortcutIcons/ShortcutIcons";
import ListComponents from "../ListComponents/ListComponents";

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
              <ListComponents titlelist='Các bài hát nghe nhiều' />
              <ListComponents titlelist='Top US-UK' />
              <ListComponents titlelist='Nghệ sĩ phổ biến' />
            </ScrollView>
        );
    }
}

export default Home;