import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from './Stacks/HomeStack';
import ChatStack from './Stacks/ChatStack';
import MoreStack from './Stacks/MoreStack';

const Tab = createBottomTabNavigator();

const ProjectManagerContainer = () => {
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

                    if (rn === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === 'Chat') {
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                    }  else if (rn === 'More') {
                        iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
                    }

                    return <Ionicons name={iconName} color={color} size={focused ? size + 5 : size} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Chat" component={ChatStack} />
            <Tab.Screen name="More" component={MoreStack} />
        </Tab.Navigator>
    );
};

export default ProjectManagerContainer;
