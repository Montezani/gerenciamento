import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Gerenciamento from './components/gerenciamento'
import Login from './components/login'
import Calendario from './components/calendario'
import Cadastro from './components/cadastro'
import Ambientes from './components/ambientes'
import Agendamentos from './components/agendamento'

import AcessoTelas from './components/telas'


const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="telas">

        <Stack.Screen name='telas' component={AcessoTelas}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#E1CBEE',

            },
          }}
        />

        <Stack.Screen name='gerenciamento' component={Gerenciamento}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#E1CBEE',

            },
          }}
        />

        <Stack.Screen name='login' component={Login}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#E1CBEE',

            },
          }}
        />

        <Stack.Screen name='calendario' component={Calendario}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#E1CBEE',

            },
          }}
        />

        <Stack.Screen name='cadastro' component={Cadastro}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#E1CBEE',

            },
          }}
        />

        <Stack.Screen name='ambientes' component={Ambientes}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#E1CBEE',

            },
          }}
        />

        <Stack.Screen name='agendamentos' component={Agendamentos}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#E1CBEE',

            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Rotas