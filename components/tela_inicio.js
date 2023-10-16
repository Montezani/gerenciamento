import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import icone from './assets/icon-TCC.png';

const MinhaPagina = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Página</Text>
      <Image source={icone} style={styles.logo} />
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
  logo: {
    width: 100, // Adjust the width and height as needed
    height: 100,
  },
});

export default MinhaPagina;
