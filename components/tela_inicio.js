import React, { useState } from 'react';
import { View,StyleSheet, KeyboardAvoidingView, Platform, Image, Text, TouchableOpacity } from 'react-native';

export default function TelaInicio() {
  
 
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
     <Image source={require('./assets/icon-tcc.png')} style={styles.logo} />
       <Text style={styles.title}>SpaceSync</Text>

      <View style={styles.form}>
        
       
      <TouchableOpacity style={styles.buttonEntrar} >
      <Text style={styles.buttonCadastrarText}>ENTRAR</Text>
      </TouchableOpacity>
     

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  logo: {
    width: 150,
    height: 150,
  },

 title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 35,
    
  },

  form: {
    width: '100%',
    maxWidth: 300,
  },

  buttonCadastrarText:{
  paddingVertical: 10,
  color: 'white',
  fontWeight: 'BOLD',
  },
 buttonEntrar: {
  width: '50%',
  height: 42,
  borderRadius: 20,
  background: '#924DC1',
  alignSelf: 'center',
  textAlign:'center',
  marginBottom: 10
  },

});
