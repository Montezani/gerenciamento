import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Gerenciamento} from './components/gerenciamento'


const Stack = createStackNavigator();

export default () => {
   return(
     <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name= 'GERENCIAMENTO'                 component= {Gerenciamento} 
           
            options={{
              headerTitleAlign: 'center',
              
              headerTitleStyle: {
                fontSize:20,
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