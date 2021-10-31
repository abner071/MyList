import React, { useState, useEffect } from 'react';
import { max } from 'react-native-reanimated';

import { Header } from '../../components/Header';

import {
    Container,
    Input,
    Form,
    Label,
    ButtonSave,
    ButtonText,
} from './styles';

interface ItemList {
    id: string;
    name: string;
    text: string;
}

export function Cadastro(){
    const [ itens, setItens ] = useState([] as ItemList[]);

    function handleChangeItemText(id: string, text: string){
        const dataItens = itens.map(item => {
            let obj = {
                id: item.id,
                name: item.name,
                text: (id === item.id) ? text : item.text
            } as ItemList;

            return obj;
        })
        
        const newData = handleAddInput(dataItens);

        setItens(newData);
    }

    function handleAddInput(data: ItemList[]){
        const sequencial = data.length + 1;

        const emptyInputs = data.filter(item => {
            return item.text === ""
        });

        if(emptyInputs.length === 0){
            var newData = [
                ...data,
                {
                    id: sequencial,
                    name: "Item " + sequencial,
                    text: ""
                }
            ] as ItemList[];

        }else if(emptyInputs.length > 1){
            var dataMax = data[data.length - 1];

            var newData = data.filter(item => {
                return parseInt(item.id) !== parseInt(dataMax.id)
            });

        }else{
            var newData = data;
        }

        return newData;
    }

    useEffect(() => {
        const data = [
            {
                id: '1',
                name: 'Item 1',
                text: '',
            }
        ] as [ItemList];
        
        setItens(data);
    }, []);

    return (
        <Container>
            <Header title="Nova Lista" />

            <Form
                scrollEnabled
            >
                <Input 
                    placeholder="Título"
                />

                <Label>Itens da lista</Label>
                
                {
                    itens && itens.map(item => {
                        return (
                            <Input
                                key={item.id}
                                placeholder={item.name}
                                onChangeText={text => handleChangeItemText(item.id, text)}
                                value={item.text}
                            />
                        );
                    })
                }
                
            </Form>

            <ButtonSave>
                <ButtonText>Salvar</ButtonText>
            </ButtonSave>
        </Container>
    );
}