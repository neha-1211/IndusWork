import React from 'react';
import {
    DefaultTheme,
    NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types';
import TabNavigation from './TabNavigations';
import { Login, SplashScreen } from '../screens';



const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
    const { bottom } = useSafeAreaInsets();

    // Reuse the login state pattern from your reference Navigation.tsx.
    //   const isLoggedIn = useStore(state => state.isLoggedIn);

    return (
        <NavigationContainer
            theme={{
                ...DefaultTheme,
                colors: {
                    ...DefaultTheme.colors,
                    background: '#F4F7FB',
                },
            }}>

            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{
                    headerShown: false,
                    orientation: 'portrait',
                    contentStyle: {
                        paddingBottom: bottom,
                        backgroundColor: '#F4F7FB',
                    },
                    animation: 'slide_from_right',
                }}>

                {/* Splash is always the first screen */}
                <Stack.Screen name="Splash">
                    {props => (
                        <SplashScreen
                            {...props}
                        />
                    )}
                </Stack.Screen>

                <Stack.Group navigationKey="auth">

                    <Stack.Screen
                        name="Login"
                        component={Login}
                    />


                </Stack.Group>

                <Stack.Group navigationKey="app">

                    {/* Bottom tabs */}
                    <Stack.Screen
                        name="Tabs"
                        component={TabNavigation}
                        options={{
                            contentStyle: {
                                paddingBottom: 0,
                            },
                        }}
                    />



                </Stack.Group>

            </Stack.Navigator>
        </NavigationContainer>
    );
}