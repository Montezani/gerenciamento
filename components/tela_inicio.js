import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import icone from '../assets/icon-TCC.png';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MinhaPagina = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.logo}>
      <Image source={icone} style={styles.logo} />
      </View>

      <View style={styles.titulo}>
      <Text style={styles.titulo}>SpaceSync</Text>
      </View>

      <TouchableOpacity style={styles.botao} >
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
    margin:-15,
    padding: 20,
   
  },
  logo: {
    width: 200, 
    height:200,
  },

  botao: {
  fontSize:20,
  padding: 20,


  },
});

export default MinhaPagina;
