import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import CustomText from './CustomText';

function TokenAmount() {
    
    return (
        <View style={[styles.select_date_container, { marginBottom: 40 }]}>
            <View style={{flexDirection: 'row', marginBottom: 19}}>
                <View style={styles.select_date_info}>
                    <CustomText style={{ fontSize: 18, color: '#22201F' }}>Invoice</CustomText>
                </View>
            </View>

            <View style={[styles.room_type_container]}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CustomText style={{ fontSize: 16, color: '#22201F' }}>Token Amount</CustomText>
                  
                    <CustomText style={{ fontSize: 16, color: '#22201F' }}>Rs.1,000</CustomText>
                </View>
                

            </View>

            <View
            style={{
            borderBottomColor: '#B5B5B550',
            borderBottomWidth: 1,
            marginTop: 18,
            marginBottom: 18,
            width: '100%'
            }}
            />

            <View style={[styles.room_type_container]}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CustomText style={{ fontSize: 16, color: '#22201F' }}>Payable Amount</CustomText>
                  
                    <CustomText style={{ fontSize: 16, color: '#22201F' }}>Rs.1,000</CustomText>
                </View>
                

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    info_item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '1.5%'
    },
    info_item_text: {
        marginLeft: 9,
        fontSize: 15
    }, select_date_container: {
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

export default TokenAmount;
