import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ConversationsScreen } from '../../features/messages/screens/conversations.screen';

const MessagesTab = createBottomTabNavigator();
export const MessagesNavigator = () => {
    return <MessagesTab.Navigator
        initialRouteName=''
        screenOptions={{
            headerShown: false,
        }}
    >
        <MessagesTab.Screen name='conversations' component={ConversationsScreen} />
    </MessagesTab.Navigator >
}