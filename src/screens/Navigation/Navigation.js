import React, { Component } from 'react';

import { View, Text, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
//Chuyen cac screen
import { createStackNavigator } from "@react-navigation/stack";
//bottom tab
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Khai bao cac screen
import PlayAudioScreen from '../PlayAudioScreen/PlayAudioScreen';
import Home from "../Home/Home";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class TabNavigation extends Component{
    render(){
        return(
            <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
            activeTintColor: '#2366FF',
            }}
            >
            <Tab.Screen 
                name="Home"
                component={Home}
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
        );
    }
    
};

class Navigation extends Component{
    render(){
        const {navigation} = this.props;
        return(
            <NavigationContainer>

                {/* khai bao cac screen */}
                <Stack.Navigator initialRouteName="Home" mode="modal"
                > 
                    <Stack.Screen name="Home" component={TabNavigation} 
                        options ={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name="PlayAudioScreen" component={PlayAudioScreen}  
                        options ={{
                            headerShown: false
                        }}
                    />
                    
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
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

export default Navigation;