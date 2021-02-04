import React,{ Component } from "react";

import { 
    View, Text, ScrollView, Image, TouchableOpacity
} from "react-native";

import ListComponentsStyles from "../ListComponents/ListComponentsStyles";
import MainComponent from "../ListComponents/MainComponent";

// data example
const redvelvet = {
    album1:{
        imageUrl: require('../../images/playlist/redvelvetalbum.jpg'),
        title: 'Perfect Velvet',
        description: 'Album hay nhất trong năm của Red Velvet...',
    },
    album2:{
        imageUrl: require('../../images/playlist/redvelvetalbum2.png'),
        title: 'Sappy 2',
        description: 'Nguồn năng lượng tươi mới từ Red Velvet...',
    },
    album3:{
        imageUrl: require('../../images/playlist/redvelvetalbum3.jpg'),
        title: 'Red Flavor',
        description: 'Thư giãn với giai điệu nhẹ nhàng của Red Flavor...',
    },
}

class ListComponents extends Component{
    render(){
        return(
            <View style={ListComponentsStyles.container}>
                <Text style={ListComponentsStyles.TextTitle}>{this.props.titlelist}</Text>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <MainComponent 
                        imageurl={redvelvet.album1.imageUrl} 
                        title={redvelvet.album1.title}
                        description={redvelvet.album1.description}
                    />
                    <MainComponent 
                        imageurl={redvelvet.album2.imageUrl} 
                        title={redvelvet.album2.title}
                        description={redvelvet.album2.description}
                    />
                    <MainComponent 
                        imageurl={redvelvet.album3.imageUrl} 
                        title={redvelvet.album3.title}
                        description={redvelvet.album3.description}
                    />
                    <MainComponent 
                        imageurl={redvelvet.album1.imageUrl} 
                        title={redvelvet.album1.title}
                        description={redvelvet.album1.description}
                    />
                    <MainComponent 
                        imageurl={redvelvet.album2.imageUrl} 
                        title={redvelvet.album2.title}
                        description={redvelvet.album2.description}
                    />
                    <MainComponent 
                        imageurl={redvelvet.album3.imageUrl} 
                        title={redvelvet.album3.title}
                        description={redvelvet.album3.description}
                    />
                
                </ScrollView>  
            </View>
        );
    }
}

export default ListComponents;