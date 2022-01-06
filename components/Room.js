import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import CustomText from './CustomText';
import LocationWhite from '../assets/icons/location_white.svg';
import Star from '../assets/icons/star.svg';
import HeartIcon from '../assets/icons/heart.svg';
import HeartRedIcon from '../assets/icons/heart_red.svg';

function Room({ margin, navi, featured, style, room, favourite }) {
    // console.log(room)
    // return ( null )
    return (
        <TouchableWithoutFeedback onPress={() => { navi.navigate('Room', { id: room.id })}}>
        <View style={[styles.container, margin, style]}>
            <View style={styles.image_container}>
                {
                    room.imgUrl ? (
                        <Image
                            source={{ uri: room.imgUrl }}
                            style={styles.image}
                        />
                    ) : (
                        <View style={[styles.image, { backgroundColor: '#B5B5B5', borderRadius: 10 }]} />
                    )
                }
                {/* <Image
                    source={{ uri: room.imgUrl }}
                    style={styles.image}
                /> */}
            </View>
            
            <View style={styles.like}>
                { favourite ? ( <HeartRedIcon /> ) : ( <HeartIcon /> )}
            </View>
            <View style={styles.room_info}>
                {
                    featured ? (
                        <View style={styles.featured}>
                            <Star height={14} width={14} />
                            <CustomText style={{ color: '#fff', fontSize: 12 }}>Featured</CustomText>
                        </View>
                    ) : (
                        null
                    )
                }
                
                <View>
                <CustomText style={{ fontSize: 14, fontWeight: '500', color: '#fff', fontWeight: '800', marginBottom: 4 }}>{room.propertyName}</CustomText>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <LocationWhite height={11} width={11} stroke="black" /><CustomText style={{ fontSize: 12, color: '#fff' }}> {room.address.city}</CustomText>
                    </View>
                    
                    
                    <CustomText style={{ fontSize: 12, color: '#fff' }}> | {room.availableFor}</CustomText>
                   
                </View>
                
                </View>

                
            </View>
            <View style={styles.room_price }>
                <CustomText style={{fontSize: 10, color: '#fff', opacity: 0.9 }}>Monthly Rent</CustomText>
                <CustomText style={{fontSize: 18,color: '#fff', fontWeight: 'bold'}}>₹ {room.minPrice}</CustomText>
                    
             </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 206,
        width: 293,
        borderRadius: 10,
        // marginLeft: 10, 
        // marginRight: 10 
    },
    image_container: {
        // flex: 1,
        resizeMode: 'cover',
        height: '100%'
    },
    image: {
        width: '100%', 
        height: '100%',
        // borderTopRightRadius: 15,
        // borderTopLeftRadius: 15
        borderRadius: 10,
    },
    room_info: {
        position: 'absolute',
        bottom: -4,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    room_price: {
        position: 'absolute',
        // width: 'auto',
        height: 49,
        right: 0,
        top: 150,
        backgroundColor: '#C49A6C',
        borderTopLeftRadius: 24.5,
        borderBottomLeftRadius: 24.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 5,
        paddingLeft: 15
    }, 
    featured: {
        position: 'absolute',
        paddingTop: 4,
        paddingRight: 9,
        paddingBottom: 4,
        paddingLeft: 7,
        width: 76,
        // height: 49,
        left: 10,
        top: -135,
        flexDirection: 'row',
        backgroundColor: '#3C2415',
        alignItems: 'center',
        borderRadius: 15
    },
    like: {
        position: 'absolute',
        right: 10,
        top: 10,
    }
})

export default Room;
