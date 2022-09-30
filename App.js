import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import useProdutores from './src/hooks/useProdutores';

import Home from './src/telas/Produtores';
import Cesta from './src/telas/Cesta';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import melhoresProdutores from './src/telas/MelhoresProdutores';

export default function App() {
  const produtores = useProdutores(false);

  const Tab = createBottomTabNavigator();

  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Melhores Produtores' component={melhoresProdutores}/>
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaView>
}