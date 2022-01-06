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

function ProfessionalDetailsScreen({ navigation }) {
    const [company, onChangeCompany] = useState("Company Name");
    const [enrollmentDate, onChangeEnrollmentDate] = useState("01 Dec, 2005");
    const [designation, onChangeDesignation] = useState("Designation/Course");
    const [companyAddress, onChangeCompanyAddress] = useState("Lalitpur");
    const [city, onChangeCity] = useState("Lalitpur");
    const [province, onChangeProvince] = useState("Pronvice No.3");
   
    return (
        <View style={styles.main_container}>
            <View style={styles.reserve_container}>
                <View style={styles.overlay}>
                    <Ionicons name="arrow-back-sharp" size={21} color="#fff" onPress={() => { navigation.goBack(); }} />
                </View>
                <CustomText style={{ transform: [{ translateX: 36 }, { translateY: -11 }], fontSize: 21, color: '#fcfcfc', fontWeight: '500' }}>Professional Details</CustomText>
            </View>

            <View style={{ zIndex: 1 }}>
                <View style={styles.reserve_confirm_container}>
                <ScrollView>
                <View style={{ minHeight: 825 }}>
                    <CustomText style={{ fontSize: 17, paddingLeft: 12, paddingTop: 6 }}>Please tell us about yourself</CustomText>
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
                        <CustomText style={{ color: '#8a8a8a' }}>Company/College</CustomText>
                        <TextInput 
                            onChangeText={onChangeCompany}
                            value={company}
                            autoCapitalize="words"
                        />
                    </View>


                    <View style={styles.input_container}>
                        <CustomText style={{ color: '#8a8a8a' }}>Enrollment Date</CustomText>
                        <TextInput 
                            onChangeText={onChangeEnrollmentDate}
                            value={enrollmentDate}
                            autoCapitalize="words"
                        />
                    </View>


                    <View style={styles.input_container}>
                        <CustomText style={{ color: '#8a8a8a' }}>Designation/Course</CustomText>
                        <TextInput 
                            onChangeText={onChangeDesignation}
                            value={designation}
                            autoCapitalize="words"
                        />
                    </View>


                    <View style={styles.input_container}>
                        <CustomText style={{ color: '#8a8a8a' }}>Company/College Address</CustomText>
                        <TextInput 
                            onChangeText={onChangeCompanyAddress}
                            value={companyAddress}
                            autoCapitalize="words"
                        />
                    </View>


                    <View style={styles.input_container}>
                        <CustomText style={{ color: '#8a8a8a' }}>City</CustomText>
                        <TextInput 
                            onChangeText={onChangeCity}
                            value={city}
                            autoCapitalize="words"
                        />
                    </View>

                    <View style={styles.input_container}>
                        <CustomText style={{ color: '#8a8a8a' }}>Province</CustomText>
                        <TextInput 
                            onChangeText={onChangeProvince}
                            value={province}
                            autoCapitalize="words"
                        />
                    </View>
                    
                    
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Emergency Details') }}>
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

export default ProfessionalDetailsScreen;
