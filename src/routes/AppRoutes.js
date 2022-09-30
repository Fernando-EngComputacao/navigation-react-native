import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Produtores';
import MelhoresProdutores from '../screens/MelhoresProdutores';

export default function AppRoutes() {
    const Tab = createBottomTabNavigator();
    
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Melhores Produtores' component={MelhoresProdutores} />
        </Tab.Navigator>
    </NavigationContainer>


}