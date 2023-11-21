import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importe o hook useNavigation
import { AntDesign } from '@expo/vector-icons';

const App = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigation = useNavigation();  // Inicialize o hook de navegação

  const handleRoomSelection = (room) => {
    if (selectedRoom === room) {
      setSelectedRoom(null);
    } else {
      setSelectedRoom(room);
      navigation.navigate('AGENDAMENTOS');  // Navegue para a tela de AGENDAMENTOS
    }
  };

  const isRoomSelected = (room) => {
    return selectedRoom === room;
  };

  const roomData = [
    { id: 'lab4', name: 'LAB 4' },
    { id: 'lab5', name: 'LAB 5' },
    { id: 'lab6', name: 'LAB 6' },
    { id: 'quadra', name: 'QUADRA' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
<<<<<<< HEAD
        {/* <Text style={styles.ambientes}>AMBIENTES</Text> */}

        <View
          style={[
            styles.placeholder,
            lab4Occupied && { backgroundColor: '#A167C9' }, // Altere a cor para vermelho se ocupado
          ]}
        >
          <View style={styles.horizontalContainer}>
            <Text
              style={[
                styles.title,
                lab4Occupied && styles.titleOccupied, // Aplicar estilo de texto ocupado
              ]}
            >
              LAB 4
=======
        <Text style={styles.ambientes}>SELECIONAR AMBIENTE:</Text>
        {roomData.map((room) => (
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
>>>>>>> 88719ae9159a9df2a7456907e47412fa3b48aaf4
            </Text>
          </View>
        ))}
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

export default App;
