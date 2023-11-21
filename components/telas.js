import * as React from 'react';
import { Button, View, Text } from 'react-native';

function Botoes({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Botões</Text>
      <Button
        title="agendamentos"
        onPress={() => navigation.navigate('AGENDAMENTOS')}
      />
      <Button

      

        title="ambientes"
        onPress={() => navigation.navigate('AMBIENTES')}

      />
      <Button
        title="cadastro"
        onPress={() => navigation.navigate('cadastro')}
      />
      <Button
        title="calendario"
        onPress={() => navigation.navigate('calendario')}
      />
    
      <Button
        title="login"
        onPress={() => navigation.navigate('login')}
      />
      <Button
        title="gerenciamento"
        onPress={() => navigation.navigate('GERENCIAMENTO')}
      />
      <Button
        title="tela_inicio"
        onPress={() => navigation.navigate('tela_inicio')}
      />
       <Button
        title="welcome"
        onPress={() => navigation.navigate('welcome')}
      />
      <Button
        title="ver_ambientes"
        onPress={() => navigation.navigate('VER AMBIENTES')}
      />

     

    </View>
  );
}

export default Botoes;
