import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ver= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AMBIENTES DISPONÍVEIS</Text>
      
      

      <View>
        <Text style={styles.lab}>LAB 5</Text>
      <Text style={styles.lab}>LAB 5</Text>
      </View>
    </View>
    
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    position: 'relative',
    fontWeight: 'bold',
    
    fontSize: 25,
  },

  lab:{
    flexDirection: "row",
      width: '100%',
      marginVertical: 10,
      padding: 20,
      borderRadius: 10,
      backgroundColor: "#E1CBEE",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: '#eee',
      alignItems: "center",
  }
});

export default Ver;
