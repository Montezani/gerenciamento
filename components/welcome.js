import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; // Importe os ícones AntDesign

const App = ({navigation}) => {
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
        <Text style={styles.ambientes}>BEM VINDO, USUÁRIO!</Text>


        <View
          style={[
            styles.placeholder,
            lab4Occupied && { backgroundColor: '#A167C9', }, // Altere a cor para vermelho se ocupado
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
             
            >
  
              <AntDesign name="delete" size={24} color="black" />


            </TouchableOpacity>
          </View>
          
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
              
            >
              <AntDesign name="delete" size={24} color="black" />


            </TouchableOpacity>
          </View>
          
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
             
            >
             <AntDesign name="delete" size={24} color="black" />

            </TouchableOpacity>
          </View>
         
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
             
            >
             <AntDesign name="delete" size={24} color="black" />
             
            </TouchableOpacity>
          </View>
         

          </View>

{/* Contêiner para os botões */}
<View style={styles.buttonContainer}>
  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('calendario')}>
    <Text style={styles.button1}>NOVO AGENDAMENTO</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VER AMBIENTES')}>
    <Text style={styles.button2}>VER AMBIENTES</Text>
  </TouchableOpacity>
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
    width: '90%',
  },

  placeholder: {
    backgroundColor: '#E1CBEE',
    padding: 12,
    width: '90%',
    borderRadius: 20,
    margin: 10,
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
  buttonContainer: {
    flexDirection: 'column', // Coloca os botões lado a lado
    alignItems: 'center',
    
  },  

  
button1:{
  backgroundColor: '#924DC1',
  padding: 15,
  width: '100%',
  fontWeight: 'bold',
  marginTop: 150,
  borderRadius: 15,
  marginBottom: 20,
  alignItems: 'flex-start', 
  color:'white',
  borderWidth: 0,

},

button2:{
  backgroundColor: '#924DC1',
  padding: 15,
  fontWeight: 'bold',
  marginTop: 20,
  width: '100%',
  borderRadius: 15,
  marginBottom: 20,
  alignItems: 'flex-start', 
  color:'white',
  borderWidth: 0,
  
  
},
  
});

export default App;
