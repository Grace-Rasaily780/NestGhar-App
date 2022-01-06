import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import CustomText from './CustomText';

function Transaction() {
    const array = [0, 1];
    return (
        <View style={{ marginBottom: 35 }}>
            <CustomText style={{ fontSize: 18, marginLeft: 8 }}>Date</CustomText>



            
            {
                array.map(() => (
                    <View>
                    <View
                        style={{
                            borderBottomColor: '#8F8E8E',
                            borderBottomWidth: 1,
                            marginTop: 14,
                            marginBottom: 14,
                            width: '100%'
                        }}
                    />

                    <View style={{ paddingLeft: 8, paddingRight: 8 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                            <CustomText style={{ fontSize: 15 }}>Title</CustomText>

                            <CustomText style={{ fontSize: 15 }}>Rs. 6000</CustomText>
                        </View>

                        <View style={{ padding: 5 }}>
                            <CustomText style={{ color: '#8a8a8a', fontSize: 15 }}>Transaction ID: 123456241789062891</CustomText>
                        </View>
                        

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                            <CustomText style={{ fontSize: 15 }}>Date</CustomText>

                            <CustomText style={{ fontSize: 13,color: '#28a745' }}>SUCCESS</CustomText>
                        </View>
                    </View>
                    </View>
                ))
            }
            

        </View>
    )
}

export default Transaction;
