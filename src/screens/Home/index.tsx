import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Header } from '../../components/Header';

import { useTheme } from 'styled-components';

import {
    Container,
    Title,
    Content,
    ButtonAdd,
    Icon
} from './styles';

export function Home(){
    const theme = useTheme();

    const { navigate } = useNavigation();

    function handleCadastro(){
        navigate('Cadastro');
    }

    return (
        <Container>
            <Header title="My List" />

            <Content>
                <Title>Minhas Listas</Title>

                <ButtonAdd onPress={handleCadastro}>
                    <Icon name="add-circle" />
                </ButtonAdd>
            </Content>
        </Container>
    );
}