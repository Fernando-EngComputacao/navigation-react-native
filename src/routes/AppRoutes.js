import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductorRoutes from "./ProductorRoutes";
import BestProductorsRoutes from "./BestProductorsRoutes";

export default function AppRoutes() {
    const Tab = createBottomTabNavigator();
    
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={ProductorRoutes} />
            <Tab.Screen name='Melhores Produtores' component={BestProductorsRoutes} />
        </Tab.Navigator>
    </NavigationContainer>


}