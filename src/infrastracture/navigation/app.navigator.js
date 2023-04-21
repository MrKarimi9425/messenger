import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MessagesNavigator } from './messages.navigator';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { ChatScreen } from '../../features/messages/screens/chat.screen';

const AppStack = createStackNavigator();
export const AppNavigator = () => {
    return (
        <AppStack.Navigator initialRouteName=''
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalSlideFromBottomIOS,
            }}        >
            <AppStack.Screen name='messages' component={MessagesNavigator} />
            <AppStack.Screen name='chat' component={ChatScreen} />
        </AppStack.Navigator>
    )
}