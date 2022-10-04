import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Produtor from "../screens/Produtor";
import Home from '../screens/Home';

export default function ProductorRoutes() {
    const Stack = createNativeStackNavigator();

    return <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="Produtor" component={Produtor} />
    </Stack.Navigator>

}