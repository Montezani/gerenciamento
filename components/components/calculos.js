import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export const Calculos = ({navigation}) =>{
  return(
    <View style={styles.container}>
   <Text style={styles.textTitle}>HELLO</Text>

    
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textTitle:{
    fontWeight:'bold', 
    fontSize:20,
    color:'#6717e9',
    paddingBottom:15
  },
 
})