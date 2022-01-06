import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView , SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import globalstyles from '../globalStyles';
import RoomType from '../components/RoomType';
import FoodOption from '../components/FoodOption';
import CustomText from '../components/CustomText';
import UndoIcon from '../assets/icons/undo.svg';
import Logo from '../assets/logo.svg';
import HeartIcon from '../assets/icons/heart.svg';
import HeartRedIcon from '../assets/icons/heart_red.svg';
import ShareIcon from '../assets/icons/share.svg';
import LocationOutlineIcon from '../assets/icons/location_outline.svg';
import Amenities from '../components/Amenities';
import Breakfast from '../assets/icons/breakfast_illustra.svg';
import Lunch from '../assets/icons/lunch_illustra.svg';
import Dinner from '../assets/icons/dinner_illustra.svg';
import WifiIcon from '../assets/icons/wifi.svg';
import TvIcon from '../assets/icons/tv.svg';
import ParkingIcon from '../assets/icons/parking.svg';
import KitchenIcon from '../assets/icons/kitchen.svg';
import CctvIcon from '../assets/icons/cctv.svg';
import { useSelector } from 'react-redux';

function RoomScreen({ navigation, route }) {
    // console.log(route.params.id)
    const [property, setProperty] = useState({});

    const propertyState = useSelector(state => state.properties);
    const { loading, propertyList } = propertyState;
    useEffect(() => {
        if(!loading){
            setProperty(propertyList.propertyListings.filter(property => ( property.id == route.params.id ))[0]);
            // console.log(propertyList.propertyListings.filter(property => ( property.id == route.params.id )))
            // console.log(property.address);
        }
    }, [])
    
    // return (
    //     null
    // )
    return (
        property !== {} || undefined ? (
            <View style={[globalstyles.main_container]}>
            <ScrollView style={{ marginBottom: 135 }}>
            <View style={{}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ width: '25%' }}>
                        <UndoIcon width={24} height={24} onPress={() => { navigation.goBack(); }} />
                    </View>
                    
                    <View style={{ width: '33.3%', flexDirection: 'row', justifyContent: 'center' }}>
                        <Logo width={56} height={31}  />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '22%' }}>
                        <View style={{ borderWidth: 1, borderColor: '#B5B5B', borderRadius: 200, padding: 5  }}>
                            <HeartIcon />
                        </View>

                        <View style={{ borderWidth: 1, borderColor: '#B5B5B', borderRadius: 200, padding: 5  }}>
                            <ShareIcon />
                        </View>
                    </View>
                </View>
                <View style={styles.room_image_container}>
                    <Image
                        style={{ width: '100%', height: '100%', borderRadius: 15 }} 
                        source={{ uri: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' }}
                    />
                </View>
                
                <View style={{ marginTop: 15, padding: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <View>
                            <CustomText style={{ fontSize: 24, color: '#22201F', marginBottom: 2, fontWeight: 'bold' }}>{property.propertyName}</CustomText>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <LocationOutlineIcon height={17} width={17} fill="none" />
                                <CustomText style={{ fontSize: 14, color: '#22201F', opacity: 0.9 }}> {property.address?.addressLine1}, {property.address?.city}
                                </CustomText>
                            </View>
                        </View>

                        <View style={styles.room_gender}>
                            <CustomText style={{fontSize: 14,color: '#fff',}}>{property.availableFor}</CustomText>
                                
                        </View>
                    </View>
                    
                    <View
                    style={{
                        borderBottomColor: '#B5B5B5',
                        borderBottomWidth: 0.5,
                        marginTop: 14,
                        width: '100%',
                        opacity: 0.5
                    }}
                    /> 

                    <View style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <CustomText style={{ fontSize: 18, color: '#22201F', fontWeight: 'bold' }}>About This Property</CustomText>
                        <CustomText style={{ marginTop: 10, fontSize: 16, lineHeight: 20, color: '#22201F' }}>{property.description}</CustomText>
                        <View style={{ paddingTop: 16, paddingBottom: 16, borderWidth: 1, borderColor: '#F37F7F', borderRadius: 8, marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <CustomText style={{ fontSize: 14,color: '#F37F7F', lineHeight: 20 }}>Read More</CustomText>
                        </View>
                    </View>
                    
                    {
                        property.rooms !== null ? (
                            <View>
                            <CustomText style={{ fontSize: 18, fontWeight: 'bold', color: '#22201F'  }}>Room Type</CustomText>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 10 }}>
                                <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between',  }}>
                                    <RoomType type="single" price={6454} />
                                    
                                    <RoomType type="double" price={10454} />
                                </ScrollView>
                                </View>
                                <View>
                                    <View><CustomText style={{ fontSize: 14, fontWeight: '500', color: '#000', lineHeight: 20 }}>Room Detail</CustomText></View>
                                    <View style={{ paddingLeft: 5, paddingRight: 5 }}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 6, paddingBottom: 6 }}>
                                        <CustomText style={{ fontSize: 14, lineHeight: 20, color: '#22201F' }}>Total Bed</CustomText>
                                        <CustomText style={{ fontSize: 14, lineHeight: 20, color: '#22201F', fontWeight: '600' }}>1</CustomText>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 6, paddingBottom: 6 }}>
                                        <CustomText style={{ fontSize: 14, lineHeight: 20, color: '#22201F' }}>Space Available</CustomText>
                                        <CustomText style={{ fontSize: 14, lineHeight: 20, color: '#22201F', fontWeight: '600' }}>2 Adult</CustomText>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 6, paddingBottom: 6 }}>
                                        <CustomText style={{ fontSize: 14, lineHeight: 20, color: '#22201F' }}>Room Features</CustomText>
                                        <CustomText style={{ fontSize: 14, lineHeight: 20, color: '#22201F', fontWeight: '600' }}>Cupboard, Cot, Pillow</CustomText>
                                    </View>

                                    </View>
                                </View>
                            </View>
                        ) : (
                            null
                        )
                    }
                    

                    <View style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <CustomText style={{ fontSize: 18, color: '#22201F', fontWeight: 'bold', marginBottom: 20 }}>What Ths Place Offers</CustomText>

                        <Amenities icon={<WifiIcon />} text="Wifi" />
                        <Amenities icon={<TvIcon />} text="Tv" />
                        <Amenities icon={<ParkingIcon />} text="Free Parking" />
                        <Amenities icon={<KitchenIcon />} text="Kitchen" />
                        <Amenities icon={<CctvIcon />} text="CCTV" />

                        <View style={{ paddingTop: 16, paddingBottom: 16, borderWidth: 1, borderColor: '#F37F7F', borderRadius: 8, marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <CustomText style={{ fontSize: 14,color: '#F37F7F', lineHeight: 20 }}>Read More</CustomText>
                        </View>
                    </View>

                    <View>
                        <CustomText style={{ fontSize: 18, color: '#22201F', fontWeight: 'bold', marginBottom: 20 }}>Food Option</CustomText>

                        <View style={{}}>
                            
                        <FoodOption 
                            icon={<Breakfast />} 
                            food="Breakfast"
                            time="Daily 7:00AM - 10:00 AM"
                        />

                        <FoodOption 
                            icon={<Lunch />} 
                            food="Lunch"
                            time="Weekend Sat & Sun 12:30 PM - 2:00 PM"
                        />

                        <FoodOption 
                            icon={<Dinner />} 
                            food="Dinner"
                            time="Daily 7:30 Pm - 11:30 PM"
                        />
            
                        </View>
                    </View>
                </View>
                
            </View>
            </ScrollView>
            <View style={styles.reserve_container}>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-evenly'}}>
                        <CustomText style={{ fontSize: 12, color: '#000' }}>Total Price</CustomText>
                        <View style={{ flexDirection: 'row', marginTop: 3, alignItems: 'center' }}>
                            <CustomText style={{ fontSize: 22, color: '#22201F',fontWeight: 'bold' }}>₹{property.minPrice}</CustomText>
                        </View>
                        
                    </View>

                    <TouchableWithoutFeedback onPress={() => navigation.navigate('RoomStack')}>
                        <View style={styles.reserve_button}>
                            <CustomText style={{ color: '#fff', fontSize: 17 }}>Reserve Room</CustomText>
                        </View>
                        
                    </TouchableWithoutFeedback>
            </View>
            </View>
        ) : (
            null
        )
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 38,
        backgroundColor: '#fff'
        // height: 100
    },
    room_image_container: {
        resizeMode: 'cover',
        width: '100%',
        height: 253,
        borderRadius: 15
    },
    overlay: {
        position: 'absolute',
        // display: none,
        // width: '100%',
        // height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 2,
        padding: 10
    },
    room_gender: {
        // position: 'absolute',
        // width: 'auto',
        height: 49,
        // right: 0,
        // top: 150,
        backgroundColor: '#C49A6C',
        borderTopLeftRadius: 24.5,
        borderBottomLeftRadius: 24.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 19,
        paddingLeft: 31
    }, 
    reserve_container: {
        backgroundColor: '#fff',
        borderTopEndRadius: 15,
        height: 105,
        width: '107%',
        // marginBottom: 0,
        position: 'absolute',
        bottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 14,
        paddingRight: 14,
    },
    reserve_button: {
        backgroundColor: '#A5CF7C',
        // width: 156,
        // height: 38,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 47,
        paddingRight: 47,
        borderRadius: 50,
    }  
    
})

export default RoomScreen;
