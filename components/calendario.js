import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Entypo } from '@expo/vector-icons';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleProcurarPress = () => {
    // Implemente a lógica para lidar com o botão "Procurar" aqui
  };

  return (
    <View style={styles.container}>
      <Text style={styles.selectText}>SELECIONE UM DIA</Text>
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          theme={{
            calendarBackground: '#E1CBEE',
            textSectionTitleColor: 'black',
            dayTextColor: 'black',
            todayTextColor: 'black',
            selectedDayTextColor: 'white',
            monthTextColor: 'black',
            arrowColor: 'black',
            // Defina a cor dos números do calendário
            calendarTextColor: 'black', // Cor dos números do calendário
          }}
          onDayPress={onDayPress}
          markedDates={{ [selectedDate]: { selected: true, disableTouchEvent: true, selectedColor: '#924DC1' } }}
        />
        <View style={styles.buttonContainer}>
          <Text style={styles.label}>HORÁRIO</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textS}>INÍCIO <Entypo name="plus" size={20} color="black" /> </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textS}>FIM <Entypo name="plus" size={20} color="black" /> </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.procurarButton]} onPress={handleProcurarPress}>
            <Text style={styles.procurarText}>Procurar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    fontWeight: 900,
  },
  calendar: {
    backgroundColor: '#E1CBEE',
    width: 320,
    height: 400,
    padding: 35,
  },
  calendarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  selectText: {
    position: 'flex',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column', // Exibe os botões em coluna
    alignItems: 'center', // Centraliza os botões verticalmente
    marginTop: 20,
  },
  buttonGroup: {
    flexDirection: 'row', // Exibe os botões lado a lado
    alignItems: 'center', // Centraliza os botões verticalmente
    marginBottom: 10, // Adiciona espaço entre o grupo de botões e o botão "Procurar"
  },
  label: {
    fontSize: 14, // Tamanho da letra diminuído
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#E1CBEE',
    height: 25,
    width: 100, // Aumentei a largura do botão "Procurar" para acomodar o texto
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginRight: 10, // Adiciona espaço entre os botões "Início" e "Fim"
  },
  procurarButton: {
    backgroundColor: '#640BA7', // Cor diferente para o botão "Procurar"
    height: 40,
    width: 100, // Aumentei a largura do botão "Procurar" para acomodar o texto
    borderRadius: 10, // Bordas arredondadas
    alignItems: 'center',
    justifyContent: 'center',
  },
  procurarText: {
    color: 'white', // Cor do texto dentro do botão "Procurar"
    fontWeight: 'bold',
  },
});

export default CalendarScreen;
