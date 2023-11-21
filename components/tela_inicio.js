import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import icone from '../assets/icon-TCC.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MinhaPagina = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      </View>

      
      <View style={styles.circuloLine1} />
      <View style={styles.circulo} />
      
      <View style={styles.circuloLine2} />
      <View style={styles.circuloTop} />

      
      

      <Image source={icone} style={styles.logo} />
      
      <Text style={styles.titulo}>SpaceSync</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('login')}> 
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
  logoContainer: {
    alignItems: 'center',
  },
  titulo: {
    position: 'relative',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginVertical: -40, 
    
    
  },
  logo: {
    width: 300,
    height: 300,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  botao: {
    marginTop: 60,
    fontSize: 15,
    backgroundColor: 'black',
    borderRadius: 20,
    height: 40,
    width: 120,
    textAlign: 'center', 
    color: 'white',
    fontWeight: '500',
    background: 'linear-gradient(to right, #924DC1, #FFA500)',
    
    padding: 8,
  },
  circulo: {
    backgroundColor: '#924DC1',
    aspectRatio: 3,
    width: 200,
    height: 200,
    position: 'absolute',
    bottom: -3,
    right: -4,
    borderTopLeftRadius: '300%',
    
  },

  circuloLine1: {
    backgroundColor: 'white',
    borderColor: '#924DC1',
    borderWidth: '2px',
    aspectRatio: 1,
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -5,
    right: -3,
    borderTopLeftRadius: '300%',
    
  },

  circuloTop: {
    backgroundColor: '#924DC1',
    aspectRatio: 1,
    width: 200,
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    borderBottomRightRadius: '100%',
  },

  circuloLine2: {
    backgroundColor: 'white',
    borderColor: '#924DC1',
    borderWidth: '2px',
    aspectRatio: 1,
    width: 250,
    height: 250,
    position: 'absolute',
    top: -2,
    left: -4,
    borderBottomRightRadius: '100%',
    
  },

});

export default MinhaPagina;
