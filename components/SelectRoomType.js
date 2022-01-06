import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useDispatch } from 'react-redux';
import { saveRoomType } from '../actions/reserveAction';
import CustomText from './CustomText';
import SingleBedIcon from '../assets/icons/single_bed.svg';
import DoubleBedIcon from '../assets/icons/double_bed.svg'
import Cupboard from '../assets/icons/cupboard_illustra.svg'
import Cot from '../assets/icons/cot_illustra.svg'
import TickCircleIcon from '../assets/icons/tick_circle.svg'

function SelectRoomType() {
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const order = () => {
        dispatch(saveRoomType({
            name: 'name',
            roomType: 'Private Room',
            rent: 'Rs. 10,000/month'
        }))
    }

    const type = "single";
    useEffect(() => {
        order()
    }, [])
    return (
        <View style={[styles.select_date_container, { marginBottom: 40 }]}>
            <View style={{flexDirection: 'row', marginBottom: 19}}>
                <View style={styles.select_date_info}>
                    <CustomText style={{ fontSize: 18, color: '#22201F' }}>Select Room Type </CustomText>
                    <CustomText style={{ fontSize: 18, fontWeight: 'bold', color: '#EA9C26' }}>Change</CustomText>
                </View>
            </View>
                <View style={styles.room_type_container}>
                    <View style={{ backgroundColor: '#B0C89908', paddingTop: 13, paddingBottom: 13, paddingLeft: 14.58, paddingRight: 14.58, borderRadius: 10 }}>
                    { type === "single" ? <SingleBedIcon /> : type === "double" ? <DoubleBedIcon /> : null } 
                    </View>
                    <View style={styles.room_type_info}>
                        <CustomText style={{ fontSize: 14, color: '#22201F', fontWeight: '400' }}>Type</CustomText>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CustomText style={{ fontSize: 20, color: '#3C2415', fontWeight: 'bold' }}>Private Room</CustomText>
                        </View>
                    </View>
                </View>


                <View style={{ borderRadius: 15, borderColor: '#B5B5B5', opacity: 0.5, borderWidth: 1, paddingLeft: 19, paddingRight: 19, paddingTop: 17, paddingBottom: 17, marginTop: 10, width: '101%' }}>
                    <CustomText style={{ color: '#22201F', fontSize: 14 }}>Room Type 1</CustomText>

                    
                    <View style={{ flexDirection: 'row' , flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', width: '47%', paddingTop: 12, paddingBottom: 12, paddingLeft: 10, paddingRight: 10, alignItems: 'center',justifyContent: 'space-between', backgroundColor: '#B0C89920', borderRadius: 8 }}>
                            <View>
                                <Cupboard /> 
                            </View>
                            <CustomText style={{ fontSize: 12 }}>Cupboard</CustomText>
                            <View>
                                <TickCircleIcon />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', width: '47%', paddingTop: 12, paddingBottom: 12, paddingLeft: 10, paddingRight: 10, alignItems: 'center',justifyContent: 'space-between', backgroundColor: '#B0C89920', borderRadius: 8 }}>
                            <View>
                                <Cot /> 
                            </View> 
                            <CustomText style={{ fontSize: 12 }}>Cot</CustomText>
                            <View>
                                <TickCircleIcon />
                            </View>
                        </View>
                    </View>
                </View>


                <View style={styles.room_type_info_price}>
                   <CustomText style={{ fontSize: 14, color: '#22201F', fontWeight: '400' }}>Rent</CustomText>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CustomText style={{ fontSize: 20, color: '#3C2415', fontWeight: 'bold' }}>₹6454</CustomText><CustomText style={{ fontSize: 12, color: '#C49A6C', marginLeft: 5 }}>/ month</CustomText>
                    </View>
                </View>
                {/* <Collapsible collapsed={isCollapsed}>
                    <View style={styles.room_options_container}>
                        <View style={{ flexDirection: 'row' , flexWrap: 'wrap', justifyContent: 'space-between', paddingLeft: '3%', paddingRight: '3%' }}>
                            <View style={{ flexDirection: 'row', width: '40%', padding: '3%', alignItems: 'center' }}>
                                <MaterialCommunityIcons name="bed-empty" size={24} color="black" />
                            </View>

                            <View style={{ flexDirection: 'row', width: '40%', padding: '3%', alignItems: 'center' }}>
                                <MaterialCommunityIcons name="bed-empty" size={24} color="black" />
                            </View>

                            <View style={{ flexDirection: 'row', width: '40%', padding: '3%', alignItems: 'center' }}>
                                <MaterialCommunityIcons name="bed-empty" size={24} color="black" />
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

                        <View style={styles.select_container}>
                            <View style={{ flexDirection: 'row' }}>
                                <CustomText style={{ fontWeight: 'bold', fontSize: 16.5 }}>Rs. 10,000</CustomText><CustomText style={{ fontSize: 16.5 }}>/month</CustomText>
                            </View>

                            <View>
                                <TouchableWithoutFeedback onPress={() => { setIsCollapsed(true); order() }}>
                                    <View style={styles.filter_button}> 
                                        <CustomText style={{ color: '#c39d88', textAlign: 'center', fontSize: 15 }}>Select</CustomText>
                                    </View>
                                </TouchableWithoutFeedback>
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

export default SelectRoomType;
