import React,{ Component } from "react";

import { 
    View, Text, ScrollView, Image, TouchableOpacity
} from "react-native";

import ArtistListComponentStyles from "./ArtistListComponentStyles"
import ArtistComponent from "./ArtistComponent";


// data example
const artistdata = {
    artist1:{
        imageUrl: require('../../images/artists/redvelvet.jpg'),
        name: 'Red Velvet',
    },
    artist2:{
        imageUrl: require('../../images/artists/Ngot.png'),
        name: 'Ngọt',
    },
    artist3:{
        imageUrl: require('../../images/artists/MTP.jpg'),
        name: 'Sơn Tùng M-TP',
    },
    artist4:{
        imageUrl: require('../../images/artists/DenVau.jpg'),
        name: 'Đen Vâu',
    },
}

class ArtistListComponent extends Component{
    render(){
        return(
            <View style={ArtistListComponentStyles.container}>
                <Text style={ArtistListComponentStyles.TextTitle}>{this.props.titlelist}</Text>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <ArtistComponent 
                        imageurl={artistdata.artist1.imageUrl} 
                        title={artistdata.artist1.name}
                    />
                    <ArtistComponent 
                        imageurl={artistdata.artist2.imageUrl} 
                        title={artistdata.artist2.name}
                    />
                    <ArtistComponent 
                        imageurl={artistdata.artist3.imageUrl} 
                        title={artistdata.artist3.name}
                    />
                    <ArtistComponent 
                        imageurl={artistdata.artist4.imageUrl} 
                        title={artistdata.artist4.name}
                    />
                    <ArtistComponent 
                        imageurl={artistdata.artist1.imageUrl} 
                        title={artistdata.artist1.name}
                    />
                    <ArtistComponent 
                        imageurl={artistdata.artist2.imageUrl} 
                        title={artistdata.artist2.name}
                    />
                    <ArtistComponent 
                        imageurl={artistdata.artist3.imageUrl} 
                        title={artistdata.artist3.name}
                    />
                    <ArtistComponent 
                        imageurl={artistdata.artist4.imageUrl} 
                        title={artistdata.artist4.name}
                    />
                
                </ScrollView>  
            </View>
        );
    }
}

export default ArtistListComponent;