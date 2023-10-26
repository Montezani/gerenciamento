import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Gerenciamento from './components/gerenciamento'
import Login from './components/login'
import Calendario from './components/calendario'
import Cadastro from './components/cadastro'
import Ambientes from './components/AMBIENTES'
import Agendamentos from './components/AGENDAMENTOS'
import AcessoTelas from './components/telas'
import TelaInicio from './components/tela_inicio'
import Welcome from './components/welcome'
import Ver from './components/VER AMBIENTES'

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
              color: '#E1CBEE',
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
              right: '12%',
              color: '#E1CBEE',
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
              color: '#E1CBEE',
            },
            headerStyle: {
              backgroundColor: '#E1CBEE',
            },
          }}
        />

        <Stack.Screen name='AMBIENTES' component={Ambientes}
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

        <Stack.Screen name='AGENDAMENTOS' component={Agendamentos}
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

        <Stack.Screen name='tela_inicio' component={TelaInicio}
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
         <Stack.Screen name='welcome' component={Welcome}
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
       <Stack.Screen name='VER AMBIENTES' component={Ver}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              //color:'#E1CBEE',
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

export default Rotas;
