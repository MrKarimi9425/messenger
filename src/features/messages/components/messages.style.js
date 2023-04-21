import styled from "styled-components";
import Feather from "react-native-vector-icons/Feather";
import { Image, TextInput, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../../infrastracture/theme/colors";

export const SearchIcon = styled(Feather).attrs({
  name: 'search',
  size: 35,
})`
    align-self: flex-end;
    margin: 20px 20px 0 0;
  `;

export const CardContainer = styled(TouchableOpacity)`
    padding: ${props => props.theme.space[0]} ${props => props.theme.space[4]} ${props => props.theme.space[0]} ${props => props.theme.space[4]};
    flex-direction: row;
    align-items: center;
  `;

export const AvatarContainer = styled.View`
    width: 70px;
    height: 70px;
    border-radius: 100px;
    background-color: blue;
    overflow: hidden;
  `;

export const Avatar = styled(Image).attrs({
  resizeMethod: 'resize',
  resizeMode: 'stretch'
})`
    width: 100%;
    height: 100%;
  `;

export const TextContainer = styled.View`
    flex: 1;
    padding: ${props => props.theme.space[3]};
  `;

export const Time = styled(Text).attrs({
  variant: "hint"
})`
    align-self: flex-start;
    margin-top: ${props => props.theme.space[3]}
  `;

export const Message = styled(Text).attrs({
  variant: "hint",
  numberOfLines: 2
})`
    margin-top: ${props => props.theme.space[2]}
  `;

export const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px 30px 10px 30px;
`;

export const InputContainer = styled.View`
    flex-direction: row;
    background-color: ${props => props.theme.colors.bg.secondary};
    padding: ${props => props.theme.space[3]};
    align-items: center;
    margin: ${props => props.theme.space[2]};
    border-radius: ${props => props.theme.space[3]};
`;

export const TxInput = styled(TextInput).attrs({
  placeholder: "Write a Text"
})`
    flex: 1;
    margin: 0px ${props => props.theme.space[2]} 0px ${props => props.theme.space[2]};
`;

export const Loading = styled(ActivityIndicator).attrs({
  size: "small",
  color: colors.brand.primary
})`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -5px;
`;