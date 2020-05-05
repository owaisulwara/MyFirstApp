import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens Importing
import { Home, SignUp, SignIn } from '../screens';


const Stack = createStackNavigator();

export default AppContainer = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
);