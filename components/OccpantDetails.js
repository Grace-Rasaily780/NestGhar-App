import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { CheckBox } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import CustomText from './CustomText';

function OccpantDetails() {
    const [date, setDate] = useState(null);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isSelected, setSelection] = useState(true);
    const [checked, setChecked] = useState('male')
    const [name, setName] = useState('');
    
    
    
    return (
        <View style={styles.select_date_container}>
            <View style={{flexDirection: 'row', marginBottom: 19}}>
                <View style={styles.select_date_info}>
                    <CustomText style={{ fontSize: 18, color: '#22201F' }}>Occpant Details</CustomText>
                </View>
            </View>
            <View style={styles.room_options_container}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                        <View style={{ justifyContent: 'space-between', padding: '2.5%' }}>
                            
                            <View style={{ marginBottom: 22 }}>
                                <CustomText style={styles.profile_edit_input_placeholder}>Name</CustomText>
                                <TextInput style={styles.profile_edit_input} placeholder="Add Here" />
                            </View>
                                {/* <CustomText style={{ color: '#8a8a8a', fontSize: 12.5, paddingTop: '2%', paddingBottom: '1%' }}>Name</CustomText>
                                <CustomText style={{ fontSize: 18, color: '#424242' }}>Grace Rasaily</CustomText> */}
                            
                            
                            <View style={{ marginBottom: 22 }}>
                                <CustomText style={styles.profile_edit_input_placeholder}>Phone Number</CustomText>
                                <TextInput style={styles.profile_edit_input} placeholder="Add Here" keyboardType="number-pad" />
                            </View>

                            <View style={{ marginBottom: 10 }}>
                                <CustomText style={{ color: '#22201F', fontSize: 12, paddingTop: '2%', paddingBottom: '1%' }}>Gender</CustomText>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                                        <RadioButton
                                            color='#EA9C26'
                                            value="male"
                                            status={ checked === 'male' ? 'checked' : 'unchecked' }
                                            onPress={() => setChecked('male')}
                                        />
                                        <CustomText style={{ fontSize: 16, color: '#22201F' }}>Male</CustomText>
                                    </View>
                                    
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton
                                            color='#EA9C26'
                                            value="female"
                                            status={ checked === 'female' ? 'checked' : 'unchecked' }
                                            onPress={() => setChecked('female')}
                                        />
                                        <CustomText style={{ fontSize: 16, color: '#22201F' }}>Female</CustomText>
                                    </View>
                                </View>

                                
                                <CustomText style={{ fontSize: 14, color: '#22201F', marginBottom: 8 }}>Please note your profile will be automatically updated with the selected gender</CustomText>
                            </View>


                        </View>

                      
                        </KeyboardAvoidingView>
                    </View>
                {/* <Collapsible collapsed={isCollapsed}>
                    <View style={styles.room_options_container}>
                        <View style={{ flexWrap: 'wrap', justifyContent: 'space-between', padding: '2.5%' }}>
                            <View style={{ marginBottom: 10 }}>
                                <CustomText style={{ color: '#8a8a8a', fontSize: 12.5, paddingTop: '2%', paddingBottom: '1%' }}>Name</CustomText>
                                <CustomText style={{ fontSize: 18, color: '#424242' }}>Grace Rasaily</CustomText>
                            </View>
                            
                            <View style={{ marginBottom: 10 }}>
                                <CustomText style={{ color: '#8a8a8a', fontSize: 12.5, paddingTop: '2%', paddingBottom: '1%' }}>Phone Number</CustomText>
                                <CustomText style={{ fontSize: 18, color: '#424242' }}>981000000</CustomText>
                            </View>

                            <View style={{ marginBottom: 10 }}>
                                <CustomText style={{ color: '#8a8a8a', fontSize: 12.5, paddingTop: '2%', paddingBottom: '1%' }}>Gender</CustomText>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                                        <RadioButton
                                            color='#B98B73'
                                            value="male"
                                            status={ checked === 'male' ? 'checked' : 'unchecked' }
                                            onPress={() => setChecked('male')}
                                        />
                                        <CustomText style={{ fontSize: 14, color: '#424242' }}>Male</CustomText>
                                    </View>
                                    
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton
                                            color='#B98B73'
                                            value="female"
                                            status={ checked === 'female' ? 'checked' : 'unchecked' }
                                            onPress={() => setChecked('female')}
                                        />
                                        <CustomText style={{ fontSize: 14, color: '#424242' }}>Female</CustomText>
                                    </View>
                                </View>

                                
                                <CustomText style={{ fontSize: 12, color: '#8a8a8a', marginBottom: 8 }}>Please note your profile will be automatically updated with the selected gender</CustomText>
                            </View>


                        </View>

                        <View
                        style={{
                            borderBottomColor: '#8F8E8E',
                            borderBottomWidth: 1,
                            marginTop: 14,
                            marginBottom: 14,
                            width: '100%'
                        }}
                        />


                    </View>
                </Collapsible> */}
            
        </View>
    )
}

const styles = StyleSheet.create({
    select_date_container: {
        
        // alignItems: 'center',
        // alignContent: 'center'
    },
    select_date_info: {
        marginLeft: 10,
        color: '#424242',
        flexDirection: 'row',

    },
    room_options_container: {
        
    },
    select_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '2%',
        paddingRight: '3%',
        paddingTop: '1%',
        paddingBottom: '1%',
        alignItems: 'center'
    },
    filter_button: {
        borderWidth: 2,
        width: '120%',
        borderColor: '#c39d88',
        padding: '5%',
        // flexDirection: 'row',
        // justifyContent: 'center',
        borderRadius: 30,
        // marginRight: 10
    }, profile_edit_input: {
        borderWidth: 1,
        borderColor: '#B5B5B5',
        borderRadius: 10,
        padding: 19,
        fontSize: 14,
        color: '#22201F',
        fontWeight: '500'
    }, profile_edit_input_placeholder: {
        position: 'absolute',
        left: '5%',
        top: -8,
        backgroundColor: '#fff',
        zIndex: 1,
        paddingLeft: 4,
        paddingRight: 4,
        color: '#22201F',
        fontSize: 12,
        // width: '22%'
    }
})

export default OccpantDetails
