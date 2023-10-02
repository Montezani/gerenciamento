import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, Pressable, Alert, Modal} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export const Home = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // Estado do Modal
  const [items, setItems] = useState([
    { label: 'LABORATÓRIO 6', value: 'LABORATÓRIO 6',status:'r'}, // status "r" de reservado e "l" de livre
    { label: 'LABORATÓRIO 2', value: 'LABORATÓRIO 2',status:'l' },
    { label: 'QUADRA', value: 'QUADRA',status:'l' },
  ]);

  const verificaAmbiente = () => {
      if (items.status === 'r') {
        setModalVisible(true)
      }
  }

  //o useEffect  vai verificar s eo status esta r ou l

  useEffect( () => {

      if (items.status === 'r') {
        setModalVisible(true)
      }

  },[items] );




  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{
            backgroundColor: '#A167C9',
            width: '130px',
            alignSelf: 'center',
            marginHorizontal:30
          }}
        />

        {/* Modal é um tipo de Alert */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {setModalVisible(!modalVisible)}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Este Ambiente já está Rervado</Text>
            
            {/*Pressable é um botão personalizável*/}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Selecionar outro Ambiente</Text>
            </Pressable>

          </View>
        </View>
      </Modal>

      {/*Após realizar a verificação se o ambiente esta ou não reservado vamos remover esse Pressable*/}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

       
    
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '30px',
    height: '20px',
    transform: 'translatey(4px)',
  },

 centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF', // estilo do Pressable Rosa
  },
  buttonClose: {
    backgroundColor: '#A167C9', //estilo do Pressable do Fechar Modal
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
