import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomText from './CustomText';


function FoodOption({ icon, time, food }) {
    return (
        <View style={styles.food_option_container}>
            {icon}
            <View style={styles.room_type_info}>
                <CustomText style={{ fontSize: 14, color: '#22201F', fontWeight: '600' }}>{food}</CustomText>
                <CustomText style={{ fontSize: 14, color: '#22201F' }}>{time}</CustomText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    food_option_container: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    },
    room_type_container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    },
    room_type_info: {
        marginLeft: 10,
        color: '#424242',
    },
})

export default FoodOption;
