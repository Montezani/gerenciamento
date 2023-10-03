import React, {useState, useEffect } from "react";

import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import icone from '../assets/icon-tcc.png';


const Telainicio = () => {
  

  const styles = StyleSheet.create({

    Body:{
      flex: 1,
    },
  
    Button:{
      height: 40,
      width: 40,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: '#924DC1',
      borderRadius: 10,
      position: "relative",
      right: -300,
    },
  
    FlatList:{
      flex: 1,
      marginTop: 5,
    },
  
    containerView:{
      marginBottom: 15,
      padding: 15,
      borderRadius: 100,
      backgroundColor: "#E1CBEE",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: '#eee'
    },
  
    iconsContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
  
    icon: {
      marginHorizontal: 5,
    },
  
    Texto:{
      fontSize: 14,
      color: "#333",
      fontWeight: "bold",
      marginTop: 4,
      textAlign: "center",
      textTransform: 'uppercase'
    },
  });

  return (
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="padding"
        style={{flex: 1}}
        enabled={Platform.OS === 'ios'}
      >
       
          
          <View style={styles.Body}>
          <Image source={icone} style={styles.logo} />
       <Text style={styles.title}>SpaceSync</Text>
            <FlatList
              style={styles.FlatList}
              data={task}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({item})=> (
                <View style={styles.containerView}>
                  <Text style={styles.Texto}> {item} </Text>
                  <View style={styles.iconsContainer}>
                    <TouchableOpacity style={styles.icon}>
                      <MaterialIcons name="delete-forever" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                      <MaterialCommunityIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
  
          <TouchableOpacity style={styles.Button}>
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
  
        
      </KeyboardAvoidingView>
    </>
  );
};

export default Gerenciamento;