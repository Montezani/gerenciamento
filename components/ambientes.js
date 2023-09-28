import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; // Importe os ícones AntDesign

const App = () => {
  const [lab4Occupied, setLab4Occupied] = useState(false);
  const [lab5Occupied, setLab5Occupied] = useState(false);
  const [lab6Occupied, setLab6Occupied] = useState(false);
  const [quadraOccupied, setQuadraOccupied] = useState(false);

  const handleCheckboxChange = (target) => {
    switch (target) {
      case 'lab4':
        setLab4Occupied(!lab4Occupied);
        break;
      case 'lab5':
        setLab5Occupied(!lab5Occupied);
        break;
      case 'lab6':
        setLab6Occupied(!lab6Occupied);
        break;
      case 'quadra':
        setQuadraOccupied(!quadraOccupied);
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.ambientes}>AMBIENTES</Text>

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
            </Text>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => handleCheckboxChange('lab4')}
            >
              <AntDesign
                name={lab4Occupied ? 'checkcircle' : 'checkcircleo'}
                size={30}
                color={lab4Occupied ? 'white' : '#A167C9'} // Cor do ícone
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.availabilityText}>
            Disponibilidade: {lab4Occupied ? 'Ocupado' : 'Livre'}
          </Text>
        </View>

        <View
          style={[
            styles.placeholder,
            lab5Occupied && { backgroundColor: '#A167C9' }, // Altere a cor para vermelho se ocupado
          ]}
        >
          <View style={styles.horizontalContainer}>
            <Text
              style={[
                styles.title,
                lab5Occupied && styles.titleOccupied, // Aplicar estilo de texto ocupado
              ]}
            >
              LAB 5
            </Text>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => handleCheckboxChange('lab5')}
            >
              <AntDesign
                name={lab5Occupied ? 'checkcircle' : 'checkcircleo'}
                size={30}
                color={lab5Occupied ? 'white' : '#A167C9'} // Cor do ícone
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.availabilityText}>
            Disponibilidade: {lab5Occupied ? 'Ocupado' : 'Livre'}
          </Text>
        </View>

        <View
          style={[
            styles.placeholder,
            lab6Occupied && { backgroundColor: '#A167C9' }, // Altere a cor para vermelho se ocupado
          ]}
        >
          <View style={styles.horizontalContainer}>
            <Text
              style={[
                styles.title,
                lab6Occupied && styles.titleOccupied, // Aplicar estilo de texto ocupado
              ]}
            >
              LAB 6
            </Text>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => handleCheckboxChange('lab6')}
            >
              <AntDesign
                name={lab6Occupied ? 'checkcircle' : 'checkcircleo'}
                size={30}
                color={lab6Occupied ? 'white' : '#A167C9'} // Cor do ícone
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.availabilityText}>
            Disponibilidade: {lab6Occupied ? 'Ocupado' : 'Livre'}
          </Text>
        </View>

        <View
          style={[
            styles.placeholder,
            quadraOccupied && { backgroundColor: '#A167C9' }, // Altere a cor se estiver ocupado
          ]}
        >
          <View style={styles.horizontalContainer}>
            <Text
              style={[
                styles.title,
                quadraOccupied && styles.titleOccupied, // Aplicar estilo de texto ocupado
              ]}
            >
              QUADRA
            </Text>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => handleCheckboxChange('quadra')}
            >
              <AntDesign
                name={quadraOccupied ? 'checkcircle' : 'checkcircleo'}
                size={30}
                color={quadraOccupied ? 'white' : '#A167C9'} // Cor do ícone
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.availabilityText}>
            Disponibilidade: {quadraOccupied ? 'Ocupado' : 'Livre'}
          </Text>
        </View>
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
    width: 25, // Largura ajustada para o ícone do círculo de seleção
    height: 0, // Altura ajustada para o ícone do círculo de seleção
  },
  roundCheckbox: {
    borderRadius: 1, // Tornar a caixa de seleção redonda
  },
  ambientes: {
    position: 'relative',
    fontWeight: 'bold',
    marginBottom: 45,
    fontSize: 25,
  },
});

export default App;
