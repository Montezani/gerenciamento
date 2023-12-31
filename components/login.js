import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform, Image, Text, TouchableOpacity } from 'react-native'; 

import icone from '../assets/icon-tcc.png';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Implemente a lógica de cadastro aqui
    // Por exemplo, você pode fazer uma chamada à API ou armazenar os dados localmente.
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
     <Image source={icone} style={styles.logo} />
       <Text style={styles.title}>SpaceSync</Text>

      <View style={styles.form}>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />
      
      <TouchableOpacity style={styles.buttonEntrar} >
      <Text style={styles.buttonCadastrarText}>ENTRAR</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.buttonCadastrar} >
      <Text style={styles.buttonCadastrarText}>CADASTRE-SE</Text>
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
  input: {
    marginBottom: 10,
    padding: 10,
    backgroundColor:'#C299DC',
    borderColor: '#ccc',
    borderRadius: 20,
    color: 'white'
  },
  buttonCadastrar: {
  width: '50%',
  height: '20%',
  borderRadius: 20,
  background: '#924DC1',
  alignSelf: 'center',
  textAlign:'center',
  },
  buttonCadastrarText:{
  paddingVertical: 10,
  color: 'white',
  fontWeight: 'BOLD',
  },
 buttonEntrar: {
  width: '50%',
  height: '20%',
  borderRadius: 20,
  background: '#924DC1',
  alignSelf: 'center',
  textAlign:'center',
  marginBottom: 10
  },

});
