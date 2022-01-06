import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomText from './CustomText';
import SingleBedIcon from '../assets/icons/single_bed.svg';
import DoubleBedIcon from '../assets/icons/double_bed.svg'

function RoomType({ price, type }) {
    return (
        <View style={styles.room_type_container}>
            <View style={{ backgroundColor: '#B0C89908', paddingTop: 13, paddingBottom: 13, paddingLeft: 14.58, paddingRight: 14.58, borderRadius: 10 }}>
               { type === "single" ? <SingleBedIcon /> : type === "double" ? <DoubleBedIcon /> : null } 
            </View>
            <View style={styles.room_type_info}>
                { type === "single" ? <CustomText style={{ fontSize: 14, color: '#22201F', fontWeight: '400' }}>Private Room</CustomText> : type === "double" ? <CustomText style={{ fontSize: 14, color: '#22201F', fontWeight: '400' }}>Two Sharing Room</CustomText> : null }
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CustomText style={{ fontSize: 20, color: '#3C2415', fontWeight: 'bold' }}>₹{price}</CustomText><CustomText style={{ fontSize: 14, color: '#3C2415', marginLeft: 5 }}> Onwards</CustomText>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    room_type_container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        marginRight: 10
    },
    room_type_info: {
        marginLeft: 10,
        color: '#424242',
    },
})

export default RoomType;
