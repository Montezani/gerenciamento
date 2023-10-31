import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const Agendamentos = ({navigation}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'EXATAS', value: 'EXATAS' },
        { label: 'ETIM', value: 'ETIM' },
        { label: 'NOVOTEC', value: 'NOVOTEC' },
        { label: 'BIOLOGICAS', value: 'BIOLOGICAS' },
        { label: 'LINGUAGENS', value: 'LINGUAGENS' },
    ]);


    const [open2, setOpen2] = useState(false); 
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        { label: '1°', value: '1°' },
        { label: '2°', value: '2°' },
        { label: '3°', value: '3°' },

    ]);


    return (
        <View style={{  flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 30,
                backgroundColor: '#F6EAFB',
                height: 600,
                width: 370,
                borderRadius: 50,
               
            }}>

                

                <Text style={{
                     textAlign: 'center',
                     fontWeight: 'bold',
                     marginBottom: 10,

                }}>CURSO</Text>

                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="SELECIONAR"
                    placeholderStyle={{ fontWeight: 'bold' }}
                    style={{ backgroundColor: '#E1CBEE', width: '90%', alignSelf: 'center', borderWidth: 0,  borderColor: 'transparent', }}
                  containerStyle={{ width: '100%' }}
                    itemStyle={{ justifyContent: 'flex-start' }}
/> 
<Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: 10,
                    marginTop: 10
                }}>RESPONSÁVEL PELA RESERVA</Text>

                <TextInput style={{
                    backgroundColor: '#E1CBEE',
                    height: 40,
                    borderRadius: 9,
                    placeholder: 'SELECIONAR',
                    marginBottom: 10,
                   
                    
                }}>
                </TextInput>   

                 <Text style={{
                 
                 textAlign: 'center',
                 fontWeight: 'bold',
                 marginBottom: 10,
                 }}>CONTEÚDO</Text>
                 
                 <TextInput style={{
                 backgroundColor: '#E1CBEE',
                 height: 60,
                 borderRadius: 9,
                 marginBottom:10,
                 
                 }}>
                 </TextInput>
                 
                 
                 <Text style={{
                     textAlign: 'center',
                     fontWeight: 'bold',
                     marginBottom: 10,
                }}>MÓDULO</Text>

                <DropDownPicker
                    open={open2}
                    value={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems2}
                    placeholder="SELECIONAR"
                    placeholderStyle={{ fontWeight: 'bold' }}
                    style={{ backgroundColor: '#E1CBEE', width: '90%', alignSelf: 'center', borderWidth: 0,  borderColor: 'transparent', marginBottom: 20 }}
                    containerStyle={{ width: '100%' }}
                    itemStyle={{ justifyContent: 'flex-start' }}
                />

                <Button 
                title='AGENDAR' 
                color='#924DC1' 
                onPress={() => navigation.navigate('calendario')} />
            
            </View>

            
        </View>


       
    )

}

  
export default Agendamentos