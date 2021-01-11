import React from 'react';
import TabRoot from '../Tabroot'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='TabRoot' component={TabRoot} />
        </Stack.Navigator>
    );
};