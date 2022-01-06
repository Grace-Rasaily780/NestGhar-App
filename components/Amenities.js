import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView , SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import WifiIcon from '../assets/icons/wifi.svg';
import CustomText from './CustomText';

function Amenities({ icon, text }) {
    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                {icon}
                <CustomText style={{ fontSize: 14, color: '#22210F', lineHeight: 20, marginLeft: 8 }}>{text}</CustomText>
            </View>
        </>
    )
}

export default Amenities;
