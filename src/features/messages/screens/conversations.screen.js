import React, { useContext } from 'react';
import { SafeArea } from '../../../components/safe-area/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { MessagesContext } from '../../../services/messages/messages.context';
import { FlatList, Image } from 'react-native';
import { Avatar, AvatarContainer, CardContainer, Loading, Message, SearchIcon, TextContainer, Time } from '../components/messages.style';

export const ConversationsScreen = ({ navigation }) => {
  const { conversations, isLoading } = useContext(MessagesContext)

  return (
    <SafeArea>
      {isLoading && <Loading />}
      <SearchIcon />
      <Spacer position={"left"}>
        <Text variant="header">Messages</Text>
      </Spacer>
      <FlatList data={conversations} renderItem={({ item }) => {
        let { name,
          lastname,
          last_message,
          last_date,
          image
        } = item;
        return (
          <Spacer size="large">
            <CardContainer onPress={() => navigation.navigate("chat", { profile: item })}>
              <AvatarContainer>
                <Avatar source={{ uri: image }} />
              </AvatarContainer>
              <TextContainer>
                <Text>{`${name} ${lastname}`}</Text>
                <Message>{last_message}</Message>
              </TextContainer>
              <Time>{last_date}</Time>
            </CardContainer>
          </Spacer>
        )
      }}
        keyExtractor={(item, index) => `message-id -> ${item}${index}`}
      />
    </SafeArea>
  )
}