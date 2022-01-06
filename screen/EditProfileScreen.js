import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Item from '../components/Item';
import globalstyles from '../globalStyles';
import CustomText from '../components/CustomText';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userActions';
import ProfileIcon from '../assets/icons/profile_yellow.svg';
import EmailIcon from '../assets/icons/email.svg';
import CalenderIcon from '../assets/icons/calender-yellow.svg';
import UndoIcon from '../assets/icons/undo.svg';
import { RadioButton } from 'react-native-paper';
import TrashIcon from '../assets/icons/trash.svg';

function EditProfileScreen({ navigation }) {
    const [checked, setChecked] = useState('male')
    const dispatch = useDispatch();
    const img = require('../assets/profile_pic.jpeg');
    // const userDetails = useSelector((state) =>  state.userDetails);
    useEffect(() =>{
        // dispatch(detailsUser());
    }, []);
    return (
            <View style={[globalstyles.main_container, , { 
                backgroundColor: '#fff', elevation: 5
            }]}>
                <View style={{ marginBottom: 14, padding: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                    <View style={{ width: '30.3%' }}>
                        <UndoIcon width={24} height={24} onPress={() => { navigation.goBack(); }} />
                    </View>

                    <View style={{ width: '40.3%' }}><CustomText style={{ textAlign: 'center', fontSize: 18 }}>Edit Profile</CustomText></View>
                    
                    <View style={{ width: '33.3%' }}></View>
                </View>
                 <ScrollView style={{  marginBottom: 0,  }}>
                <View style={styles.profile_picture_container}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Pic Upload'); }}>
                        <Image source={img} style={{ height: 95, width: 95, borderRadius: 100 , padding: '2%'  }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ backgroundColor: '#F37F7F', borderRadius: 30, padding: 7, position: 'absolute', right: 0, top: -22 }}>
                            <TrashIcon />
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.profile_info_container}>

                    <View style={{ marginBottom: 22 }}>
                        <ProfileIcon width={24} height={24} style={styles.profile_edit_input_icon} />
                        <CustomText style={styles.profile_edit_input_placeholder}>Name</CustomText>
                        <TextInput style={styles.profile_edit_input} />
                    </View>

                    <View style={{ marginBottom: 22 }}>
                        <EmailIcon width={24} height={24} style={styles.profile_edit_input_icon} />
                        <CustomText style={styles.profile_edit_input_placeholder}>Email</CustomText>
                        <TextInput style={styles.profile_edit_input} keyboardType="email-address" />
                    </View>

                    <View style={{ marginBottom: 12 }}>
                        <CalenderIcon width={24} height={24} style={styles.profile_edit_input_icon} />
                        <CustomText style={styles.profile_edit_input_placeholder}>DOB</CustomText>
                        <TextInput style={styles.profile_edit_input} />
                    </View>

                    <View style={{ marginBottom: 10 }}>
                                <CustomText style={{ color: '#22201F', fontSize: 12, paddingTop: '2%', paddingBottom: '1%', paddingLeft: 8 }}>Gender</CustomText>
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
                                            style={{ borderColor: '#EA9C26' }}
                                            value="female"
                                            status={ checked === 'female' ? 'checked' : 'unchecked' }
                                            onPress={() => setChecked('female')}
                                        />
                                        <CustomText style={{ fontSize: 16, color: '#22201F' }}>Female</CustomText>
                                    </View>
                                </View>

                            </View>
                </View>
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    profile_picture_container: {
        height: 95,
        width: 95,
        // position: 'absolute',
        left: '38%',
        paddingTop: '5%',
        backgroundColor: '#B5B5B508',
    },
    profile_info_container: {
        // top: 110
        marginTop: '15%',
        padding: 8
    },
    items_container: {
        paddingLeft: '1%',
        paddingRight: '1%',
        paddingTop: '6%',
        paddingBottom: '4%',
        marginLeft: '4%',
        marginRight: '4%',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        // minHeight: 800
    },
    item: {
        paddingLeft: '1%',
        paddingRight: '1%',
        paddingTop: '6%',
        paddingBottom: '4%',
        marginLeft: '4%',
        marginRight: '4%',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        flexDirection: 'row', 
        alignItems: 'center'
    }, profile_edit_input: {
        borderWidth: 1,
        borderColor: '#B5B5B5',
        borderRadius: 10,
        paddingTop: 19,
        paddingBottom: 19,
        paddingLeft: 64,
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
    }, profile_edit_input_icon: {
        position: 'absolute',
        left: '6%',
        top: 21,
        backgroundColor: '#fff',
        zIndex: 1,
    }
});

export default EditProfileScreen;
