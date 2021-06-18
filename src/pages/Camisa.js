import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';

const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`

const Camisa = () => {

    let { tipo } = useParams();

    return (
        <Center>
            <p>{tipo}</p>
        </Center>
    );
}

export default Camisa;