import React,{ Component } from "react";
import { 
    View, Text, Image
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import ShortcutIcons from "../ShortcutIcons/ShortcutIcons";

const Tab = createBottomTabNavigator();

function TrangChu() {
    return (
      <View style={{flex: 1, flexDirection: 'column' }}>
        <Header />
        <Slider />
        <ShortcutIcons />
      </View>
    );
}
  
function CaNhan() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>CaNhan!</Text>
      </View>
    );
}
  
function TimKiem() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>TimKiem!</Text>
      </View>
    );
}

class BottomTab extends Component{
    render(){
        return(
            <NavigationContainer>
            <Tab.Navigator
                initialRouteName="TrangChu"
                tabBarOptions={{
                    activeTintColor: '#2366FF',
                }}
            >
                <Tab.Screen 
                    name="TrangChu"
                    component={TrangChu}
                    options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({focused }) => (   
                        <Image
                            source={require('../../images/home.png')}
                            style={{width: 26, height: 26 }}
                            tintColor={focused ? '#2366FF' : 'black' }
                        />
                    ),
                    }}
                />
                <Tab.Screen 
                    name="TimKiem"
                    component={TimKiem}
                    options={{
                    tabBarLabel: 'Tìm kiếm',
                    tabBarIcon: ({focused }) => (
                        <Image
                            source={require('../../images/loupe.png')}
                            style={{width: 26, height: 26}}
                            tintColor={focused ? '#2366FF' : 'black' }
                        />
                    ),
                   
                    }}
                />
                <Tab.Screen 
                    name="CaNhan"
                    component={CaNhan}
                    options={{
                    tabBarLabel: 'Cá nhân',
                    tabBarIcon: ({focused }) => (
                        <Image
                            source={require('../../images/user.png')}
                            style={{width: 26, height: 26}}
                            tintColor={focused ? '#2366FF' : 'black' }
                        />
                    ),
                    }}
                />
            </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default BottomTab;