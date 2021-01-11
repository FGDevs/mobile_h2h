import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { color } from '../theme';
import { HomeScreen, CartScreen, ProfileScreen } from '../screens';

const Tab = createBottomTabNavigator();

export default ()=>{
    return (
        <Tab.Navigator
            screenOptions = {({route}) => ({
                tabBarIcon:({focused,color,size})=>{
                    let iconName;
                    let type;
                    if(route.name === 'Home'){
                        iconName= focused? 'home':'home-outline'
                        type    = 'ionicon'
                    }else if(route.name === 'Cart'){
                        iconName= focused? 'cart':'cart-outline'
                        type    = 'ionicon'
                    }else{
                        iconName= focused? 'person':'person-outline'
                        type    = 'ionicon'
                    }
                    return <Icon name={iconName} type={type} size={size} color={color} />
                },
                tabBarLabel:()=>{
                    return null;
                }
            })}
            tabBarOptions={{
                style : {backgroundColor:color.secondary},
                inactiveTintColor   : color.lt_secondary,
                activeTintColor     : color.dk_secondary
            }}
        >
            <Tab.Screen name='Home'     component={HomeScreen} />
            <Tab.Screen name='Cart'     component={CartScreen} />
            <Tab.Screen name='Profile'  component={ProfileScreen} />
        </Tab.Navigator>
    );
};