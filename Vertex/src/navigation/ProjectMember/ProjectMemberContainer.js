import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './Stacks/HomeStack';
import ChatStack from './Stacks/ChatStack';

// Import your stacks

const Tab = createBottomTabNavigator();

const ProjectMemberContainer = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#0077b6',
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: true,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === 'Employee Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === 'Employee Chat') {
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                    }  

                    return <Ionicons name={iconName} color={color} size={focused ? size + 5 : size} />;
                },
            })}
        >
            <Tab.Screen name="Employee Home" component={HomeStack}  options={{ title: 'Home' }}/>
            <Tab.Screen name="Employee Chat" component={ChatStack}  options={{ title: 'Chat' }}/>
        </Tab.Navigator>
    );
};

export default ProjectMemberContainer;
