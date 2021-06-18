import React, { useState } from 'react';
import styled from 'styled-components';
import ModalView from './Modal';

const TesteModal = () => {
    const View = styled.div`
    padding: 15px;
    `
    const [modalVisible, setModalVisible] = useState(false);
    const handleModal = () => {
    setModalVisible(true);
    }
    
    return (
    <View>
      <p>Abrir modal</p>
      <button onClick={handleModal}>Abrir modal</button> 
      <ModalView visible={modalVisible} setVisible={setModalVisible} />
    </View>
    );
}

export default TesteModal;

