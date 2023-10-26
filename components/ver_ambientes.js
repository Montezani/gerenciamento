import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ver= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AMBIENTES DISPONÍVEIS</Text>
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
    fontSize: 24,
  },
});

export default Ver;
