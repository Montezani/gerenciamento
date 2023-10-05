import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import icone from '../assets/icon-TCC.png';


const MinhaPagina = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Página</Text>
      <View style={styles.conteudo}>
      <Image source={icone} style={styles.logo} />
      

        <Text>Teste</Text>
      </View>
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
