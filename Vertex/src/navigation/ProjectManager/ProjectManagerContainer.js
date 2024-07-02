import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import your stacks
import HomeStack from './Stacks/HomeStack';
import ChatStack from './Stacks/ChatStack';
import ProjectStack from './Stacks/ProjectStack';

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
                    } else if (rn === 'Add Project') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    } else if (rn === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} color={color} size={focused ? size + 5 : size} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Add Project" component={ProjectStack} />
            <Tab.Screen name="Chat" component={ChatStack} />
        </Tab.Navigator>
    );
};

export default ProjectManagerContainer;
