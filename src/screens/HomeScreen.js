import React from 'react';
import styled from 'styled-components/native';
import { color } from '../theme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ParcelScreen, ProductScreen } from './ProductScreens';
import pattern from '../../assets/pattern.png'

const Tab = createMaterialTopTabNavigator();

const Text = styled.Text`
    font-size       : ${props=>props.fSize? props.fSize:'18px'};
    color           : ${props=>props.fColor? props.fColor:'tomato'};
    font-weight     : ${props=>props.fWeight? props.fWeight:500};
`
const Image = styled.Image`
    flex            : 1;
    width           : undefined;
    height          : undefined;
`
const Container = styled.View`
    flex            : 1;
    background-color: ${color.primary};
    align-items     : center;
    justify-content : space-between;
`
const Header = styled.View`
    width           : 100%;
    flex            : 1;
    flex-direction  : row;
    justify-content : space-between;
    align-items     : center;
    padding         : 15px 0;
`
const TronBx = styled.View`
    flex            : 5;
    margin          : 0 15px;
`
const Tron = styled.View`
    border-radius   : 10px;
    height          : 100%;
    width           : 100%;
    overflow        : hidden;
`
const User = styled.View`
    flex            : 1;
    justify-content : center;
    align-items     : center;
    padding         : 11px 15px 11px 5px;
`
const Profile = styled.TouchableOpacity`
    border-radius   : 100px;
    height          : 100%;
    width           : 100%;
    overflow        : hidden;
`
const Body = styled.View`
    flex            : 7;
    width           : 100%;
`
const SearchBx = styled.ImageBackground`
    margin-top      : 5px;
    justify-content : center;
    padding         : 7px 15px;
`
const Search = styled.TextInput`
    height          : 42px;
    background-color: ${color.lt_primary};
    border-radius   : 10px;
`
export default () => {
    return (
        <Container>
            <Header>
                <TronBx>
                    <Tron>
                        <Image 
                            source      = {{uri:`https://images.unsplash.com/photo-1609862351410-709228a62361?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}} 
                            resizeMode  = 'cover'
                        />
                    </Tron>
                </TronBx>
                <User>
                    <Profile>
                        <Image 
                            source       = {{uri:`https://images.unsplash.com/photo-1609857311281-6ffa568ec7f1?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}} 
                            resizeMode   = 'cover'
                        />
                    </Profile>
                </User>
            </Header>        
            <Body>
                <SearchBx
                    source = {require('../../assets/pattern.png')}
                >
                    <Text fWeight = {'bold'} fSize = {'25px'} fColor = {'white'}>
                        Discover.
                    </Text>
                    <Search 
                        placeholder = "Search for item..."
                    />
                </SearchBx>
                <Tab.Navigator
                    tabBarOptions={{
                        labelStyle  : {
                            fontSize        : 12,
                            fontWeight      : 'bold'
                        },
                        style       : {
                            backgroundColor : 'transparent',
                            elevation       : 0
                        },
                        indicatorStyle:{
                            backgroundColor :color.secondary
                        },
                        inactiveTintColor   : '#74b9ff',
                        activeTintColor     : 'white'
                    }}
                >
                    <Tab.Screen name="Parcel"   component={ParcelScreen}    />
                    <Tab.Screen name="Product"  component={ProductScreen}   />
                </Tab.Navigator>
            </Body>
        </Container>
    );
};