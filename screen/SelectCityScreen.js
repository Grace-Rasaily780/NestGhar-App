import React from 'react';
import { StyleSheet, View, Text, Picker, TextInput, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native';
import globalstyles from '../globalStyles';
import Logo from '../assets/logo.svg';
import UndoIcon from '../assets/icons/undo.svg';
import LocationSelect from '../components/LocationSelect';
import CustomText from '../components/CustomText';

function SelectCityScreen({ navigation }) {
    const data = [
        {   
            id: 1,
            location: 'Lalitpur',
            img: 'https://media.istockphoto.com/photos/kathmandu-picture-id519624147?k=20&m=519624147&s=612x612&w=0&h=ots6Nm-Xg0wLAEB0PmR97kr_tESTUgmBzNDS3k89Bck='
        },
        {
            id: 2,
            location: 'Bhaktapur',
            img: 'https://media.istockphoto.com/photos/bahakapur-nepal-picture-id469532554?b=1&k=20&m=469532554&s=170667a&w=0&h=cNpG0jBWqTwL1kEbT8WzwMkftJT89KDETBpvaTpCZ2c='
        },
        {
            id: 3,
            location: 'Kathmandu',
            img: 'https://media.istockphoto.com/photos/patan-picture-id637268486?k=20&m=637268486&s=612x612&w=0&h=-I96cD0nJvgsRSYljbLqnrLR5bxxJX6APw-eut43heQ='
        }
    ]
    return (
        <View style={[globalstyles.main_container]}>
            <View style={{ marginBottom: 10, padding: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: '33.3%' }}>
                    <UndoIcon width={24} height={24} onPress={() => { navigation.goBack(); }} />
                </View>

                <View style={{ width: '40.3%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}><Logo width={78} height={44}  /></View>
                
                <View style={{ width: '33.3%' }}></View>
            </View>
            <ScrollView style={{ padding: 8, marginBottom: 100 }}>
            <View style={{ marginBottom: 15 }}>
                <CustomText style={{fontSize: 20 , color: '#22201F', fontWeight: '700'}}>Select City</CustomText>
                <CustomText style={{fontSize: 14 , color: '#22201F', marginTop: 9}}>We are present in these cities!</CustomText>
            </View>
            {
                    data.map((item, index) => (
                        <View key={index}>
                            <LocationSelect margin={{ marginBottom: 16 }} navi={navigation} location={item.location} img={item.img}  />
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default SelectCityScreen;
