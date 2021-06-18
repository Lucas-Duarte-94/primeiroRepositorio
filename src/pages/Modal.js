import React, { useState } from 'react';
import styled from 'styled-components';


const ModalView = (props) => {

    const Modal = styled.div`
        background-color: #BBBBBB;
        margin: 15px;
        padding: 10px;
    `

    const closeModal = () => {
        props.setVisible(false);
    }

    return (
        <>
            {props.visible &&
                <Modal>
                    <p>qualquer coisa</p>
                    <button onClick={closeModal}>Fechar modal</button>
                </Modal>
            }
        </>
    );
}

export default ModalView;