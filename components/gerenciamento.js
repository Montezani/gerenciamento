import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';

import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Gerenciamento = () => {
  const [tasks, setTasks] = useState([
    'Lab. 1', 'Lab. 2', 'Lab. 3', 'Lab. 4', 'Lab. 5', 'Lab. 6', 'Quadra',
    'Sala de informática', 'Sala temática', 'Lab. enfermagem', 'Lab. farmácia',
    'Lab. prancheta', 'Áudio visual', 'Oficina de artes', 'Lab. materiais',
    'Lab. prancheta 2', 'Lab. ciências e biologia'
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    addButton: {
      alignItems: "center",
      height: 40,
      width: 40,
      justifyContent: "center",
      backgroundColor: '#924DC1',
      borderRadius: 10,
      marginTop: 10,
    },
    taskContainer: {
      width: '90%',
      marginVertical: 10,
      padding: 20,
      borderRadius: 10,
      backgroundColor: "#E1CBEE",
      flexDirection: "row",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: '#eee',
      alignItems: "center",
    },
    iconsContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      marginHorizontal: 5,
    },
    taskText: {
      fontSize: 14,
      color: "#333",
      fontWeight: "bold",
      marginTop: 4,
      textAlign: "center",
      textTransform: 'uppercase',
    },
  });

  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item}</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon}>
          <MaterialIcons name="delete-forever" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <MaterialCommunityIcons name="pencil" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <FlatList
        style={{ width: '100%' }}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTask}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.addButton}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Gerenciamento;
