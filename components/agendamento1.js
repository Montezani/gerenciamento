import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const Agendamentos = () => {

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
       


        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'left',
                padding: '30px',
                backgroundColor: '#F6EAFB',
                height: '700px',
                width: '520px',
                borderRadius: '40px',
               
            }}>



                <Text style={{
                    textAlign: 'left',
                    width: 'auto',
                    height: '40px',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                }}>RESPONSÁVEL PELA RESERVA</Text>

                <TextInput style={{
                    backgroundColor: '#E1CBEE',
                    height: '40px',
                    borderRadius: '10px',
                    placeholder: 'SELECIONAR'
                }}>
                </TextInput>

                <Text style={{
                    textAlign: 'left',
                    width: 'auto',
                    height: '49px',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    marginBottom: '20px',

                }}>CURSO</Text>

                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="SELECIONAR"
                    style={{ backgroundColor: '#E1CBEE', width: '200px', alignSelf: 'left' }}
                />

                <Text style={{
                    textAlign: 'left',
                    width: '146px',
                    height: '40px',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                }}>MÓDULO</Text>

                <DropDownPicker
                    open={open2}
                    value={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems2}
                    placeholder="SELECIONAR"
                    style={{ backgroundColor: '#E1CBEE', width: '200px', alignSelf: 'left' }}
                />


                <Text style={{

                    textAlign: 'letf',
                    width: '146px',
                    height: '15px',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                }}>CONTEÚDO</Text>

                <TextInput style={{
                    backgroundColor: '#E1CBEE',
                    height: '200px',
                    borderRadius: '20px',
                    marginBottom: '50px',
                    
                }}>
                </TextInput>
               

                <Button 
                title='AGENDAR' 
                style={{ marginTop: '10px',   borderRadius:'90%' }}
                color='#924DC1' 
                onPress={() => navigation.navigate('Home')} />
            </View>

            
        </View>


       
    )

}

  
export default Agendamentos