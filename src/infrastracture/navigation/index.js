import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from './app.navigator';
import { MessagesProvider } from '../../services/messages/messages.context';

export const Navigation = () => {
    return (
        <MessagesProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </MessagesProvider>
    )
}