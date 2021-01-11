import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoot, AuthStackRoot } from './src/navigations/stackroots';

export default Main = () => {
    const isLogin = useSelector(state => state.Auth.isLogin)
  
    return (
        <NavigationContainer>
            { isLogin?
              <StackRoot />
              :
              <AuthStackRoot />
            }
        </NavigationContainer>
    );
};