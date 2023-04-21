import React from 'react'
import { InputContainer, TxInput } from './messages.style'
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from '../../../infrastracture/theme/colors';

export const Input = (props) => {
    const {
        text,
        setText,
        send,
        userId
    } = props;
    return (
        <InputContainer>
            <Ionicons name="attach" size={30} />
            <TxInput value={text} onChangeText={setText} />
            <Ionicons onPress={() => { send(text, userId); setText("") }} name="send" size={25} color={colors.brand.primary} />
        </InputContainer>
    )
}