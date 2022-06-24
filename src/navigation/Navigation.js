import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import { Agregar } from '../screen/Agregar';
import HomeScreen from '../screen/HomeScreen';

const Tab = createBottomTabNavigator();

export function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: () => {
                        return <Icon name='home' color='#04214e' size={30} />
                    },
                    tabBarLabelStyle: {
                        color: '#04214e'
                    }
                }}
            />

            <Tab.Screen name='Agregar'
                component={Agregar}
                options={{
                    tabBarIcon: () => {
                        return <Icon name='add' color='#04214e' size={40} />
                    },
                    tabBarLabelStyle: {
                        color: '#04214e'
                    }
                }}
            />
        </Tab.Navigator>
    )
}