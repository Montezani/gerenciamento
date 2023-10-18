import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import icone from '../assets/icon-TCC.png';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MinhaPagina = () => {
  return (
    <View style={styles.container}>
      
      <View>
      <Image source={icone} style={styles.logo} />
      </View>

      <View>
      <Text style={styles.titulo}>SpaceSync</Text>
      </View>

      <TouchableOpacity>
      <Text style={styles.botao}>START</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    margin:-40,
    padding: -20,
   
  },
  logo: {
    width: 300, 
    height:300,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
   
    
  },

  botao: {
  marginTop:50,
  fontSize:15,
  backgroundColor:'#924DC1',
  borderRadius: 20,
  height: 40,
  width: 120,
  textAlign: 'center',
  padding: 8,
  color: 'white',
  fontWeight:'500',

  },
});

export default MinhaPagina;
