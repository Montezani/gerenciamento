import React from 'react'
import {View, Text, Button, Image, StyleSheet  } from 'react-native'
import { NavigationContainer   } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './components/home'
import { Calculos } from './components/calculos'

const Stack = createStackNavigator();


export default () => {
  return(
    
      
    
    <NavigationContainer> 
    
        <Stack.Navigator>  
            <Stack.Screen name='AGENDAMENTO'component={Home} 
            options={{
                       title: 'Agendamento',
                       headerStyle: { backgroundColor: '#E1CBEE' },
                       headerTitleStyle: { color: '#000',
                                            fontSize:25,
                                            fontWeight:'bold'},
            }}
            />
            <Stack.Screen name='Home' component={Calculos} 
                        options={{
                                   title: 'Agendamento',
                                   headerStyle: { backgroundColor: '#E1CBEE' },
                                   headerTitleStyle: { color: '#000',
                                                          fontSize:25,
                                                          fontWeight:'bold'},
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

