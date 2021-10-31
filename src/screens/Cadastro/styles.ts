import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Form = styled.ScrollView`
    width: 100%;
    padding: 15px;
`;

export const Input = styled.TextInput`
    width: 100%;
    padding: 10px;
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    margin-bottom: 8px;
`;

export const Label = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-top: 25px;
    margin-bottom: 10px;
    text-align: center;
`;

export const ButtonSave = styled(RectButton)`
    width: 100%;
    padding: 15px;
    justify-content: flex-end;
    background-color: ${({ theme }) => theme.colors.secondary_light};
    border-radius: 1px;
`;

export const ButtonText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
`;