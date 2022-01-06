import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import CustomText from '../components/CustomText';
import FavRoom from '../components/FavRoom';
import OccpantDetails from '../components/OccpantDetails';
import RoomType from '../components/RoomType';
import SelectDate from '../components/SelectDate';
import SelectRoomType from '../components/SelectRoomType';
import globalstyles from '../globalStyles';
import UndoIcon from '../assets/icons/undo.svg';
import Room from '../components/Room';

function FavoriteScreen({ navigation }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
   
    const data = [
        {
            name: 'Room 1',
            location: 'Lalitpur',
            monthlyrent: 'Rs. 10,000',
            gender: 'men',
            image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
        },
        {
            name: 'Room 2',
            location: 'Kathmandu',
            monthlyrent: 'Rs. 10,000',
            gender: 'unisex',
            image: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
        },
        {
            name: 'Room 3',
            location: 'Kathmandu',
            monthlyrent: 'Rs. 10,000',
            gender: 'unisex',
            image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Room 4',
            location: 'Lalitpur',
            monthlyrent: 'Rs. 10,000',
            gender: 'unisex',
            image: 'https://media.istockphoto.com/photos/coastal-bedroom-interior-mockup-3d-render-picture-id1284744586?b=1&k=20&m=1284744586&s=170667a&w=0&h=q1Z0Jq5UBoRYeenScMxyV-VdSX_ds0ooTODrsvVMd1U='
        },
        {
            name: 'Room 5',
            location: 'Lalitpur',
            monthlyrent: 'Rs. 10,000',
            gender: 'unisex',
            image: 'https://media.istockphoto.com/photos/modern-bedroom-picture-id1313528964?b=1&k=20&m=1313528964&s=170667a&w=0&h=YgdyhC38G93TZ5g8LBjKvHZM8GSg2houKBOrbrxETkw='
        },
        {
            name: 'Room 6',
            location: 'Bhaktapur',
            monthlyrent: 'Rs. 10,000',
            gender: 'women',
            image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Room 7',
            location: 'Bhaktapur',
            monthlyrent: 'Rs. 10,000',
            gender: 'women',
            image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlZHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
    ]
    return (
        <View style={[globalstyles.main_container]}>
            <View style={{ marginBottom: 14, padding: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                <View style={{ width: '30.3%' }}>
                    <UndoIcon width={24} height={24} onPress={() => { navigation.goBack(); }} />
                </View>

                <View style={{ width: '42.3%' }}><CustomText style={{ textAlign: 'center', fontSize: 18 }}>Favourite</CustomText></View>
                
                <View style={{ width: '33.3%' }}></View>
            </View>
            <ScrollView style={{ marginBottom: 100 }}>
                <View>
                {
                    data.map(room => (
                        <Room
                            name={room.name}
                            location={room.location} 
                            monthlyrent={room.monthlyrent}
                            image={room.image}
                            style={{ marginBottom: 20, width: '100%' }}
                            navi={navigation}
                            key={room.name}
                            favourite={true}
                        />
                    ))
                }
                </View>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        
    },
    reserve_container: {
        backgroundColor: '#51130190',
        marginTop: 42,
        padding: 20,
        paddingTop: 25,
        // height: '10%'
    },
    overlay: {
        position: 'absolute',
        // display: none,
        // width: '100%',
        // height: '100%',
        top: 2,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 2,
        padding: 17,
    },
    reserve_confirm_container: {
        backgroundColor: '#fcfcfc',
        width: '100%',
        height: 5000,
        transform: [
            {
                translateY: -18
            }
        ],
        
        // top: -40,
        
        // marginTop: 20,
        borderRadius: 20,
        paddingTop: 30,
        paddingLeft: 20
    },
    confirm_button: {
        padding: '2%',
        backgroundColor: '#B98B73',
        width: 156,
        height: 40,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 19,
        // position: 'absolute',
        // top: '11.8%',
        // left: '35%'
        transform: [
            {
                translateY: 50
            },
            {
                translateX: 100
            }
        ]
    }
})

export default FavoriteScreen;
