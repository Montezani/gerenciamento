import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importe o hook useNavigation
import { AntDesign } from '@expo/vector-icons';

const Ambientes = ({ route }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigation = useNavigation();  // Inicialize o hook de navegação

  const { id, nome } = route.params.info;
  const info = { id, nome };

  const handleRoomSelection = (room) => {
    if (selectedRoom === room) {
      setSelectedRoom(null);
    } else {
      setSelectedRoom(room);
      navigation.navigate('AGENDAMENTOS', { info });  // Navegue para a tela de AGENDAMENTOS
    }
  };

  const isRoomSelected = (room) => {
    return selectedRoom === room;
  };

  // const roomData = [
  //   { id: 'lab4', name: 'LAB 4' },
  //   { id: 'lab5', name: 'LAB 5' },
  //   { id: 'lab6', name: 'LAB 6' },
  //   { id: 'quadra', name: 'QUADRA' },
  // ]; 
  const roomData = [
    {
      "esp_id": 1,
      "esp_nome": "Lab. 1",
      "esp_capacidade": 20,
      "esp_disponibilidade": 1,
      "esp_observacao": "De frente à coordenação"
    },
    {
      "esp_id": 2,
      "esp_nome": "Lab. 2",
      "esp_capacidade": 20,
      "esp_disponibilidade": 1,
      "esp_observacao": "Corredor da sala de coordenação"
    },
    {
      "esp_id": 3,
      "esp_nome": "Lab. 3",
      "esp_capacidade": 20,
      "esp_disponibilidade": 1,
      "esp_observacao": "Corredor da sala de coordenação"
    },
    {
      "esp_id": 4,
      "esp_nome": "Lab. 4",
      "esp_capacidade": 20,
      "esp_disponibilidade": 1,
      "esp_observacao": "De frente ao áudio visual"
    },
    {
      "esp_id": 5,
      "esp_nome": "Lab. 5",
      "esp_capacidade": 20,
      "esp_disponibilidade": 1,
      "esp_observacao": "De frente ao lab 6"
    },
    {
      "esp_id": 6,
      "esp_nome": "Lab. 6",
      "esp_capacidade": 20,
      "esp_disponibilidade": 1,
      "esp_observacao": "De frente ao lab 5"
    },
    {
      "esp_id": 7,
      "esp_nome": "Quadra",
      "esp_capacidade": 20,
      "esp_disponibilidade": 1,
      "esp_observacao": "Área externa"
    },
    {
      "esp_id": 8,
      "esp_nome": "Sala de informática",
      "esp_capacidade": 10,
      "esp_disponibilidade": 1,
      "esp_observacao": "De frente a sala dos professores"
    },
    {
      "esp_id": 9,
      "esp_nome": "Sala temática",
      "esp_capacidade": 40,
      "esp_disponibilidade": 1,
      "esp_observacao": "Ao lado da passarela"
    },
    {
      "esp_id": 10,
      "esp_nome": "Lab. enfermagem",
      "esp_capacidade": 40,
      "esp_disponibilidade": 1,
      "esp_observacao": "De frente a sala 11"
    },
    {
      "esp_id": 11,
      "esp_nome": "Lab. farmácia",
      "esp_capacidade": 40,
      "esp_disponibilidade": 1,
      "esp_observacao": "De frente a sala 14"
    },
    {
      "esp_id": 12,
      "esp_nome": "Lab. prancheta",
      "esp_capacidade": 35,
      "esp_disponibilidade": 1,
      "esp_observacao": "De frente a sala 15"
    },
    {
      "esp_id": 13,
      "esp_nome": "Áudio visual",
      "esp_capacidade": 40,
      "esp_disponibilidade": 1,
      "esp_observacao": "Ao lado da cantina"
    },
    {
      "esp_id": 14,
      "esp_nome": "Oficina de artes",
      "esp_capacidade": 10,
      "esp_disponibilidade": 1,
      "esp_observacao": "De frente a escada"
    },
    {
      "esp_id": 15,
      "esp_nome": "Lab. materiais",
      "esp_capacidade": 25,
      "esp_disponibilidade": 1,
      "esp_observacao": "Ao lado da cozinha"
    },
    {
      "esp_id": 16,
      "esp_nome": "Lab. prancheta 2",
      "esp_capacidade": 25,
      "esp_disponibilidade": 1,
      "esp_observacao": "Ao lado do lab de materiais"
    },
    {
      "esp_id": 17,
      "esp_nome": "Lab. ciências e biologia",
      "esp_capacidade": 40,
      "esp_disponibilidade": 1,
      "esp_observacao": "Área externa"
    },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.ambientes}>SELECIONAR AMBIENTE:</Text>


        {roomData.map((room) => (
          <View
            key={room.esp_id}
            style={[
              styles.placeholder,
              isRoomSelected(room.id) && { backgroundColor: '#A167C9' },
            ]}
          >
            <View style={styles.horizontalContainer}>
              <Text
                style={[
                  styles.title,
                  isRoomSelected(room.id) && styles.titleOccupied,
                ]}
              >
                {room.esp_nome}
              </Text>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => handleRoomSelection(room.id)}
              >
                <AntDesign
                  name={isRoomSelected(room.id) ? 'checkcircle' : 'checkcircleo'}
                  size={30}
                  color={isRoomSelected(room.id) ? 'white' : '#A167C9'}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.availabilityText}>
              Disponibilidade: {isRoomSelected(room.id) ? 'Ocupado' : 'Livre'}
            </Text>
          </View>
        ))}
        {/* {roomData.map((room) => (
          <View
            key={room.id}
            style={[
              styles.placeholder,
              isRoomSelected(room.id) && { backgroundColor: '#A167C9' },
            ]}
          >
            <View style={styles.horizontalContainer}>
              <Text
                style={[
                  styles.title,
                  isRoomSelected(room.id) && styles.titleOccupied,
                ]}
              >
                {room.name}
              </Text>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => handleRoomSelection(room.id)}
              >
                <AntDesign
                  name={isRoomSelected(room.id) ? 'checkcircle' : 'checkcircleo'}
                  size={30}
                  color={isRoomSelected(room.id) ? 'white' : '#A167C9'}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.availabilityText}>
              Disponibilidade: {isRoomSelected(room.id) ? 'Ocupado' : 'Livre'}
            </Text>
          </View>
        ))} */}


      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  titleOccupied: {
    textDecorationLine: 'line-through', // Adicionar estilo line-through se ocupado
  },

  content: {
    alignItems: 'center',
    width: '100%',
  },

  placeholder: {
    backgroundColor: '#E1CBEE',
    padding: 12,
    width: '90%',
    borderRadius: 10,
    margin: 30,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  availabilityText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  checkbox: {
    width: 25,
  },
  roundCheckbox: {
    borderRadius: 1,
  },
  ambientes: {
    position: 'relative',
    fontWeight: 'bold',
    marginBottom: 45,
    fontSize: 20,
    right: '12%'
  },
});

export default Ambientes;
