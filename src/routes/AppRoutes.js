import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductorRoutes from "./ProductorRoutes";
import BestProductorsRoutes from "./BestProductorsRoutes";
import Home from '../assets/home.svg';
import Coracao from '../assets/coracao.svg';

export default function AppRoutes() {
    const Tab = createBottomTabNavigator();
    
    return <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            let Icon = (route.name === 'Melhores Produtores' ? Coracao : Home);

            return <Icon color={color} />
          },
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
        })}>
            <Tab.Screen name='Home' component={ProductorRoutes} />
            <Tab.Screen name='Melhores Produtores' component={BestProductorsRoutes} />
        </Tab.Navigator>
    </NavigationContainer>


}