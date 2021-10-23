import styled from "styled-components/native";
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Content = styled.View`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-bottom: 10px;
`;

export const ButtonAdd = styled(BorderlessButton)`
    position: absolute;
    width: 60px;
    height: 60px;
    bottom: 90px;
    right: 25px;
    align-items: center;
    justify-content: center;
`;
export const Icon = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(60)}px;
`;