import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Entypo } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

import Ambientes from './ambientes';
import Agendamentos from './AGENDAMENTOS';

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

const CalendarScreen = ({ navigation, route }) => {
  const [vis, setVis] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');

  const { id, nome } = route.params.info;
  const info = { id, nome };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleProcurarPress = () => {
    navigation.navigate('AMBIENTES', { info })
  }; 

  const [listaHorarios, setListaHorarios] = useState([
    {
      "hor_id": 1,
      "hor_inicio": "07:20:00",
      "hor_fim": "08:10:00"
    },
    {
      "hor_id": 2,
      "hor_inicio": "08:10:00",
      "hor_fim": "09:00:00"
    },
    {
      "hor_id": 3,
      "hor_inicio": "09:00:00",
      "hor_fim": "09:50:00"
    },
    {
      "hor_id": 4,
      "hor_inicio": "10:05:00",
      "hor_fim": "10:55:00"
    },
    {
      "hor_id": 5,
      "hor_inicio": "10:55:00",
      "hor_fim": "11:45:00"
    },
    {
      "hor_id": 6,
      "hor_inicio": "11:45:00",
      "hor_fim": "12:35:00"
    },
    {
      "hor_id": 7,
      "hor_inicio": "13:00:00",
      "hor_fim": "13:50:00"
    },
    {
      "hor_id": 8,
      "hor_inicio": "13:50:00",
      "hor_fim": "14:40:00"
    },
    {
      "hor_id": 9,
      "hor_inicio": "14:40:00",
      "hor_fim": "15:30:00"
    },
    {
      "hor_id": 10,
      "hor_inicio": "19:00:00",
      "hor_fim": "20:53:00"
    },
    {
      "hor_id": 11,
      "hor_inicio": "21:08:00",
      "hor_fim": "23:00:00"
    },
    {
      "hor_id": 12,
      "hor_inicio": "01:20:00",
      "hor_fim": "08:10:00"
    },
    {
      "hor_id": 13,
      "hor_inicio": "01:20:00",
      "hor_fim": "08:10:00"
    }
  ]); 

  const listaFormatDrop = 
  listaHorarios.map(
    hr => {
      return { label: hr.hor_inicio + ' - ' + hr.hor_fim, value: hr.hor_id }
    }
  )
  ;

  const [open, setOpen] = useState(false);
  const [horario, setHorario] = useState(null); 

  console.log('data: ' + selectedDate + 'hora: ' + horario);

  return (
    <View style={styles.container}>

      {(vis === 0 &&
        <>
          <Text style={styles.selectText}>SELECIONE UM DIA:</Text>
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

              <DropDownPicker
                    open={open}
                    value={horario}
                    items={listaFormatDrop}
                    setOpen={setOpen}
                    setValue={setHorario}
                    setItems={setListaHorarios}
                    placeholder="SELECIONAR"
                    placeholderStyle={{ fontWeight: 'bold' }}
                    style={{ backgroundColor: '#E1CBEE', width: 200, alignSelf: 'center', borderWidth: 0, borderColor: 'transparent', marginBottom: 20 }}
                    containerStyle={{ width: '100%' }}
                    itemStyle={{ justifyContent: 'flex-start' }}
                />

              {/* <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textS}>INÍCIO <Entypo name="plus" size={20} color="black" /> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textS}>FIM <Entypo name="plus" size={20} color="black" /> </Text>
                </TouchableOpacity>
              </View> */}
              <TouchableOpacity style={[styles.procurarButton]} onPress={handleProcurarPress}>
                <Text style={styles.procurarText}>Procurar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>)
        || (vis === 2 &&
          <Ambientes />)
        ||
        <Agendamentos />
      }
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
    position: 'relative',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    right: '12%'

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
