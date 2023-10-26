import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';



const App = () => {
  const [lab4Occupied, setLab4Occupied] = useState(true); 
  const [lab5Occupied, setLab5Occupied] = useState(false);
  const [lab6Occupied, setLab6Occupied] = useState(false);
  const [quadraOccupied, setQuadraOccupied] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        

        <View
          style={[
            styles.placeholder,
            lab4Occupied && { backgroundColor: '#A167C9' }, // Altere a cor para vermelho se ocupado
          ]}
        >
          <Text
            style={[
              styles.title,
              lab4Occupied && styles.titleOccupied, // Aplicar estilo de texto ocupado
            ]}
          >
            LAB 4
          </Text>
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
    width: 25,
    height: 0,
  },
  roundCheckbox: {
    borderRadius: 1,
  },
  ambientes: {
    position: 'relative',
    fontWeight: 'bold',
    marginBottom: 45,
    fontSize: 25,
  },
});

export default App;
