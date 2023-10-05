import React from 'react';
import { View, Text,StyleSheet, Image } from 'react-native';
import icone from '../assets/icon-TCC.png';


const MinhaPagina = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Página</Text>
      <Image source={icone}/>
      

        <Text>Teste</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MinhaPagina;
