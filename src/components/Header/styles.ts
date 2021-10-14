import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 55px;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.shape};
`;