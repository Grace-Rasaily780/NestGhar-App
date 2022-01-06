import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';;
import TokenAmount from '../components/TokenAmount';
import globalstyles from '../globalStyles';
import { useSelector } from 'react-redux';
import CustomText from '../components/CustomText';
import UndoIcon from '../assets/icons/undo.svg';
import Item from '../components/Item';
import ProfileIcon from '../assets/icons/profile_green.svg';
import CalenderTickIcon from '../assets/icons/calendar-tick_green.svg';
import BuildingIcon from '../assets/icons/building-3.svg';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function BookingSummaryScreen({ navigation }) {
    const data = useSelector(state => state.reserveCreate);
    const room = data.room
    return (
        <View style={[globalstyles.main_container]}>
            <View style={{ marginBottom: 14, padding: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                <View style={{ width: '30.3%' }}>
                    <UndoIcon width={24} height={24} onPress={() => { navigation.goBack(); }} />
                </View>

                <View style={{ width: '42.3%' }}><CustomText style={{ textAlign: 'center', fontSize: 18 }}>Room Reservation</CustomText></View>
                
                <View style={{ width: '33.3%', flexDirection: 'row', alignItems:'center', justifyContent: 'center' }}><View style={{ paddingLeft: 7, paddingRight: 7, paddingTop: 8, paddingBottom: 8, borderWidth: 2, borderColor: '#B5B5B530', borderRadius: 30 }}><CustomText style={{ color: '#F37F7F' }}>2/2</CustomText></View></View>
            </View>

            <View style={{ zIndex: 1 }}>
                <ScrollView style={{ marginBottom: 170 }}>
                <View style={styles.reserve_confirm_container}>
                    {/* <View
                    style={{
                        borderBottomColor: '#8F8E8E',
                        borderBottomWidth: 1,
                        marginTop: 14,
                        marginBottom: 14,
                        width: '100%'
                    }}
                    /> */}
                    <View style={[styles.select_date_container, { marginBottom: 30 }]}>
                        <View style={{flexDirection: 'row', marginBottom: 19}}>
                            <View style={styles.select_date_info}>
                                <CustomText style={{ fontSize: 18, color: '#22201F' }}>Personal Detail</CustomText>
                                <CustomText style={{ fontSize: 18, fontWeight: 'bold', color: '#EA9C26', textAlign: 'right' }}>Edit</CustomText>
                            </View>
                        </View>

                        <View style={{ marginBottom: 10 }}>
                        <Item 
                            icon={<ProfileIcon width={24} height={24} />}
                            name="Grace Rasaily"
                            right={false}
                            
                        />
                        </View>

                        <View style={{ marginBottom: 10 }}>
                        <Item 
                            icon={<CalenderTickIcon width={24} height={24} />}
                            name={data.joiningDate}
                            right={false}
                             
                        />
                        </View>

                        <View style={{ marginBottom: 20 }}>
                        <Item 
                            icon={<BuildingIcon width={24} height={24} />}
                            name={<View style={{ flexDirection: 'column' }}>
                                <CustomText>{room.name}</CustomText>
                                <CustomText>{room.roomType}</CustomText>
                            </View>}
                            right={false}
                             
                        />
                        </View>
                    
                        <View style={{ backgroundColor: '#F37F7F15', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 16, paddingBottom: 16, paddingLeft: 22, paddingRight: 22, borderRadius: 10, borderColor: '#F37F7F', borderWidth: 1, width: '101%' }}>
                            <CustomText style={{ color: '#F37F7F', fontSize: 14, fontWeight: 'bold' }}>Rent:</CustomText>

                            <CustomText style={{ color: '#F37F7F', fontSize: 14, fontWeight: 'bold' }}>{room.rent}</CustomText>
                        </View>
                    </View>

                    <View style={[styles.select_date_container, { marginBottom: 30 }]}>
                        <View style={{flexDirection: 'row', marginBottom: 19}}>
                            <CustomText style={{ fontSize: 18, color: '#22201F' }}>Apply Coupon</CustomText>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput 
                                placeholder="Add here"
                                style={{ color: '#B5B5B5', fontSize: 12, paddingTop: 19, paddingBottom: 19, borderWidth: 1, borderColor: '#B5B5B550', paddingLeft: 17, borderRadius: 10, width: '100%' }}
                            />

                            <TouchableWithoutFeedback style={{ backgroundColor: '#3C2415', borderRadius: 10, paddingTop: 11, paddingBottom: 11, paddingLeft: 32, paddingRight: 32, transform: [{ translateX: -110 }] }}>
                                <CustomText style={{ color: '#fff', fontSize: 14 }}>Apply</CustomText>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <TokenAmount />
                    <View style={styles.confirm_button}>
                        <CustomText style={{ color: '#fff', fontSize: 17 }}>Proceed To Pay</CustomText>
                    </View>
                    </View>
                </ScrollView>
                
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
        padding: 0,
        marginTop: 10
    },
    confirm_button: {
        padding: '5.5%',
        backgroundColor: '#A5CF7C',
        width: '100%',
        // height: 40,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 20
        // position: 'absolute',
        // top: '11.8%',
        // left: '35%'
    },
    info_item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '1.5%'
    },
    info_item_text: {
        marginLeft: 9,
        fontSize: 15
    },select_date_container: {
        marginLeft: 10,
        marginRight: 10,
        // alignItems: 'center',
        // alignContent: 'center'
    },
    select_date_info: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
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
        transform: [
            { 
                translateX: -10
            }
        ]
        // marginRight: 10
    }, room_type_container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        marginRight: 10
    }, room_type_info: {
        marginLeft: 10,
        color: '#424242',
    },
    room_type_info_price: {
        // marginLeft: 10,
        marginTop: 15,
    },
})

export default BookingSummaryScreen;
