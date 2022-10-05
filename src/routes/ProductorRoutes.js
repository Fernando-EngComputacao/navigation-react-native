import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Produtor from "../screens/Produtor";
import Home from '../screens/Home';
import Cesta from "../screens/Cesta";
import Resumo from '../screens/Cesta/components/Resumo'

export default function ProductorRoutes({ComponentePrincipal = Home}) {
    const Stack = createNativeStackNavigator();

    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={ComponentePrincipal} />
        <Stack.Screen name="Produtor" component={Produtor} />
        <Stack.Screen name="Cesta" component={Cesta} />
        <Stack.Screen name="ResumoCompra" component={Resumo} />
    </Stack.Navigator>

}