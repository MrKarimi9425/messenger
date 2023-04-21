import React, { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from '../../../components/typography/text.component';
import { SafeArea } from '../../../components/safe-area/safe-area.component';
import { MessagesContext } from '../../../services/messages/messages.context';
import { Header } from '../components/chat-header.component';
import { Input } from '../components/chat-input.component';
import styled from 'styled-components';
import { Loading } from '../components/messages.style';

const SendView = styled(Text).attrs({
    variant: "message"
})`
    align-self: flex-start;
    background-color: #4D67F3;
    elevation: 2;
    padding: ${props => props.theme.space[1]} ${props => props.theme.space[3]} ${props => props.theme.space[1]} ${props => props.theme.space[3]}
    margin: ${props => props.theme.space[1]} ${props => props.theme.space[2]} ${props => props.theme.space[1]} ${props => props.theme.space[2]}
    color: ${props => props.theme.colors.text.inverse};
    border-radius: ${props => props.theme.space[3]};
`;

const ReceiveView = styled(Text).attrs({
    variant: "message"
})`
    align-self: flex-end;
    background-color: #fff;
    elevation: 2;
    padding: ${props => props.theme.space[1]} ${props => props.theme.space[3]} ${props => props.theme.space[1]} ${props => props.theme.space[3]}
    margin: ${props => props.theme.space[1]} ${props => props.theme.space[2]} ${props => props.theme.space[1]} ${props => props.theme.space[2]}
    color: ${props => props.theme.colors.text.primary};
    border-radius: ${props => props.theme.space[3]};
`;

const MessagesContainer = styled.View`
    flex: 1;
`;

export const ChatScreen = (props) => {
    const { id } = props.route.params.profile;
    const [text, setText] = useState("");
    const { findMessages, messages, send, isLoading } = useContext(MessagesContext);

    useEffect(() => {
        findMessages(id);
    }, [])

    return (
        <SafeArea>
            {isLoading && <Loading />}
            <Header {...props} />
            <MessagesContainer>
                <FlatList
                    contentContainerStyle={{}}
                    inverted={true}
                    data={JSON.parse(JSON.stringify(messages)).reverse()}
                    renderItem={({ item }) => {
                        return <>
                            {
                                item.status == "send" ?
                                    <SendView>{item.message}</SendView> :
                                    <ReceiveView>{item.message}</ReceiveView>
                            }
                        </>
                    }}
                    keyExtractor={(item, index) => `message-id -> ${item}${index}`}
                />
            </MessagesContainer>
            <Input userId={id} text={text} setText={setText} send={send} />
        </SafeArea>
    )
}