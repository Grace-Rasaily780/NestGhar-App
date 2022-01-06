import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CustomText from './CustomText';
import ArrowRightIcon from '../assets/icons/arrow-right.svg';

function Item({ icon, name, right }) {
    return (
        <View>
            {/* <View
                style={{
                    borderBottomColor: '#8F8E8E',
                    borderBottomWidth: 1,
                    marginTop: 14,
                    marginBottom: 14,
                    width: '100%'
                }}
            /> */}
            {
                right === false ? (
                    <View style={[styles.item, { paddingLeft: 0 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#A5CF7C20', borderRadius: 8, padding: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                {icon}
                            </View>

                            <View style={{ marginLeft: 15 }}>
                                <CustomText style={{fontSize: 15, textAlign: 'left', color: '#22201F' }}>{name}</CustomText>
                                
                                {/* <CustomText style={{ color: '#8a8a8a', fontSize: 14 }}>{description}</CustomText> */}
                            </View>

                            
                        </View>
                            
                        <View>
                        </View>
                    </View>
                ) : (
                    <View style={[styles.item]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#A5CF7C20', borderRadius: 8, padding: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                {icon}
                            </View>

                            <View style={{ marginLeft: 15 }}>
                                <CustomText style={{fontSize: 15, textAlign: 'left', color: '#22201F' }}>{name}</CustomText>
                                
                                {/* <CustomText style={{ color: '#8a8a8a', fontSize: 14 }}>{description}</CustomText> */}
                            </View>

                            
                        </View>
                            
                        <View>
                            <ArrowRightIcon />
                        </View>
                    </View>
                )
            }
            

            {
                right === false ? (
                    null
                ) : (
                    <View
                        style={{
                            borderBottomColor: '#B5B5B5',
                            borderBottomWidth: 1,
                            marginTop: 14,
                            marginBottom: 14,
                            width: '78%',
                            marginLeft: '17.5%',
                            opacity: 0.25
                        }}
                    />
                )
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: '1%',
        paddingLeft: '4%',
        paddingRight: '4%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default Item;
