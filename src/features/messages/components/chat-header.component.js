import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, AvatarContainer, HeaderContainer, TextContainer } from './messages.style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'
import { colors } from '../../../infrastracture/theme/colors'

export const Header = ({ route, navigation }) => {
  const { name, lastname, image } = route.params.profile;
  return (
    <HeaderContainer>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5 name="chevron-left" size={25} color={colors.ui.disabled} />
      </TouchableOpacity>
      <Spacer position="left">
        <AvatarContainer>
          <Avatar source={{ uri: image }} />
        </AvatarContainer>
      </Spacer>
      <TextContainer>
        <Text>
          {`${name} ${lastname}`}
        </Text>
      </TextContainer>
      <Feather name="more-vertical" size={25} color={colors.ui.disabled} />
    </HeaderContainer>
  )
}