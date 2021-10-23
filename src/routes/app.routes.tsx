import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Home } from '../screens/Home';
import { Cadastro } from '../screens/Cadastro';

export function AppRoutes(){
    return (
        <Navigator 
            initialRouteName="Home"
            screenOptions={() => ({
                headerShown: false,
                gestureEnabled: true,
            })}
        >
            <Screen name="Home" component={Home} />
            <Screen name="Cadastro" component={Cadastro} />
        </Navigator>
    );
}