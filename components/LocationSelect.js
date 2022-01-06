import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import CustomText from './CustomText';
import LocationWhite from '../assets/icons/location_white.svg';

function LocationSelect({ margin, navi, location, img }) {
    return (
        <TouchableWithoutFeedback>
        <View style={[styles.container, margin]}>
            <View style={styles.image_container}>
                <Image
                    source={{ uri: img }}
                    style={styles.image}
                />
            </View>
            
            <View style={styles.room_info}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', textAlign: 'center', height: '100%', alignItems: 'center' }}>
                    <CustomText style={{ color: '#fff', fontSize: 27, fontWeight: 'bold', letterSpacing: 0.5, textAlign: 'center', textTransform: 'uppercase', }}>{location}</CustomText>
                </View>

                
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 163,
        width: '100%',
        borderRadius: 15,
        // marginLeft: 10, 
        // marginRight: 10 
    },
    image_container: {
        // flex: 1,
        resizeMode: 'cover',
        height: '100%',
        backgroundColor: '#3C2415',
        opacity: 0.5,
        borderRadius: 15
    },
    image: {
        width: '100%', 
        height: '100%',
        // borderTopRightRadius: 15,
        // borderTopLeftRadius: 15
        borderRadius: 15,
    },
    room_info: {
        position: 'absolute',
        // bottom: '32%',
        // left: '8%',
        padding: 12,
        zIndex: 1,
        height: '100%',
        width: '60%'
    },
    room_price: {
        position: 'absolute',
        width: 93,
        height: 49,
        left: 200,
        top: 150,
        backgroundColor: '#C49A6C',
        borderTopLeftRadius: 24.5,
        borderBottomLeftRadius: 24.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 5
    }
});

export default LocationSelect;
