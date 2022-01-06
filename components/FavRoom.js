import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CustomText from './CustomText';

function FavRoom() {
    return (
        <TouchableWithoutFeedback>
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image
                    source={require('../assets/room.png')}
                    style={styles.image}
                />
            </View>
            
            <View style={styles.room_info}>
                <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <CustomText style={{ fontSize: 23, fontWeight: '500', color: '#424242' }}>Name</CustomText>

                    <AntDesign name="heart" size={24} color="#dc3545" style={{ transform:[ { translateY: 5 } ] }} />
                </View>
                

                {/* <CustomText style={{ fontSize: 12, color: '#424242' }}>Location</CustomText> */}
                <View
                    style={{
                        borderBottomColor: '#8F8E8E',
                        borderBottomWidth: 1,
                        marginTop: 12,
                        marginBottom: 12,
                        width: '120%'
                    }}
                    />
                </View>

                <View style={{ marginTop: 20, color: '#424242' }}>
                    <CustomText style={{fontSize: 14, color: '#424242' }}>Monthly Rent</CustomText>
                    <CustomText style={{color: '#424242'}}>Rs. 10,000 onwards</CustomText>
                    
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e9e9e9',
        height: 180,
        width: '110%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: 'row'
        // marginLeft: 10, 
        // marginRight: 10 
    },
    image_container: {
        flex: 1,
        resizeMode: 'cover',
    },
    image: {
        width: '80%', 
        height: '100%',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    room_info: {
        // position: 'absolute',
        // bottom: -2,
        padding: 12,
        // marginLeft: -80
        transform: [
            {
                translateX: -52
            }
        ]
    }
})

export default FavRoom;
