import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import CustomText from '../components/CustomText';
import OccpantDetails from '../components/OccpantDetails';
import RoomType from '../components/RoomType';
import SelectDate from '../components/SelectDate';
import SelectRoomType from '../components/SelectRoomType';
import globalstyles from '../globalStyles';

function BankDetailsScreen({ navigation }) {
    const [name, onChangeName] = useState("Bank Name");
    const [accountNumber, onChangeAccountNumber] = useState("9810000000");
    const [holderName, onChangeHolderName] = useState("First Last");
    const [ifscCode, onChangeIfscCode] = useState("9810000000");
   
    return (
        <View style={styles.main_container}>
            <View style={styles.reserve_container}>
                <View style={styles.overlay}>
                    <Ionicons name="arrow-back-sharp" size={21} color="#fff" onPress={() => { navigation.goBack(); }} />
                </View>
                <CustomText style={{ transform: [{ translateX: 36 }, { translateY: -11 }], fontSize: 21, color: '#fcfcfc', fontWeight: '500' }}>Bank Details</CustomText>

                

            </View>


            <TouchableWithoutFeedback onPress={() => { navigation.navigate('Upload Documents') }}>
                <CustomText style={{ transform: [{ translateX: 320 }, { translateY: 57 }], fontSize: 16, color: '#fcfcfc', fontWeight: '500', position: 'absolute' }}>Skip</CustomText>
            </TouchableWithoutFeedback>

            <View style={{ zIndex: 1 }}>
                <View style={styles.reserve_confirm_container}>
                <ScrollView>
                <View style={{ minHeight: 825 }}>
                    <CustomText style={{ fontSize: 17, paddingLeft: 10, paddingTop: 6 }}>Please provide your bank details to ensure quick refunds</CustomText>
                    {/* <View
                    style={{
                        borderBottomColor: '#8F8E8E',
                        borderBottomWidth: 1,
                        marginTop: 14,
                        marginBottom: 14,
                        width: '100%'
                    }}
                    /> */}



                    <View style={styles.input_container}>
                        <CustomText style={{ color: '#8a8a8a' }}>Bank Name</CustomText>
                        <TextInput 
                            onChangeText={onChangeName}
                            value={name}
                            autoCapitalize="words"
                        />
                    </View>


                    <View style={styles.input_container}>
                        <CustomText style={{ color: '#8a8a8a' }}>Account Number</CustomText>
                        <TextInput 
                            onChangeText={onChangeAccountNumber}
                            value={accountNumber}
                            autoCapitalize="words"
                        />
                    </View>


                    <View style={styles.input_container}>
                        <CustomText style={{ color: '#8a8a8a' }}>Account Holder's Name</CustomText>
                        <TextInput 
                            onChangeText={onChangeHolderName}
                            value={holderName}
                            autoCapitalize="words"
                        />
                    </View>


                    <View style={styles.input_container}>
                        <CustomText style={{ color: '#8a8a8a' }}>IFSC Code</CustomText>
                        <TextInput 
                            onChangeText={onChangeIfscCode}
                            value={ifscCode}
                            autoCapitalize="words"
                        />
                    </View>
                    
                    
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Upload Documents') }}>
                    <View style={styles.confirm_button}>
                        <CustomText style={{ color: '#fcfcfc', fontSize: 15 }}>Next</CustomText>
                    </View>
                    </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        
    },
    reserve_container: {
        backgroundColor: '#51130190',
        marginTop: 42,
        padding: 20,
        paddingTop: 25,
        // height: '10%'
    },
    overlay: {
        position: 'absolute',
        // display: none,
        // width: '100%',
        // height: '100%',
        top: 2,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 2,
        padding: 17,
    },
    reserve_confirm_container: {
        backgroundColor: '#fcfcfc',
        width: '100%',
        // height: 5000,
        transform: [
            {
                translateY: -18
            }
        ],
        
        // top: -40,
        
        // marginTop: 20,
        borderRadius: 20,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 21,
        paddingRight: 21
    },
    confirm_button: {
        padding: '2%',
        backgroundColor: '#B98B73',
        width: 100,
        height: 40,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 19,
        // position: 'absolute',
        // top: '11.8%',
        // left: '35%'
        transform: [
            {
                translateY: 30
            },
            {
                translateX: 125
            }
        ]
    },
    input_container: {
        padding: '3%',
        paddingLeft: '4%',
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomColor: '#5b5e56',
        borderBottomWidth: 1,
        marginTop: 20,
        height: 63
        // marginLeft: '3%'
    }
})

export default BankDetailsScreen;
