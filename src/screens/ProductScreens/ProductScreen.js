import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
    font-size       : ${props=>props.fSize? props.fSize:'18px'};
    color           : ${props=>props.fColor? props.fColor:'tomato'};
    font-weight     : ${props=>props.fWeight? props.fWeight:500};
`
const Container = styled.View`
    flex            : 1;
    background-color: #0984e3;
    align-items     : center;
    justify-content : space-between;
`
export default () => {
    return (
        <Container>
            <Text>
                Ini Product 
            </Text>
        </Container>
    );
};