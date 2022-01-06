import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import CustomText from '../components/CustomText';
import OccpantDetails from '../components/OccpantDetails';
import RoomType from '../components/RoomType';
import SelectDate from '../components/SelectDate';
import SelectRoomType from '../components/SelectRoomType';
import globalstyles from '../globalStyles';
import UndoIcon from '../assets/icons/undo.svg';

function ReserveScreen({ navigation }) {
    // var date = new Date();
    // if(date.getMonth() )
    // console.log(date.getMonth());
    // const [eleDisplay, setEleDisplay] = useState('block');
    // const display = { display: eleDisplay }
    const [isCollapsed, setIsCollapsed] = useState(false);
   
    return (
        <View style={[globalstyles.main_container]}>
            {/* <ScrollView> */}
            {/* <View style={styles.reserve_container}>
                <View style={styles.overlay}>
                    <Ionicons name="arrow-back-sharp" size={21} color="#fff" onPress={() => { navigation.goBack(); }} />
                </View>
                <CustomText style={{ transform: [{ translateX: 36 }, { translateY: -11 }], fontSize: 21, color: '#fcfcfc', fontWeight: '500' }}>Name</CustomText>
            </View> */}
            <View style={{ marginBottom: 14, padding: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                <View style={{ width: '30.3%' }}>
                    <UndoIcon width={24} height={24} onPress={() => { navigation.goBack(); }} />
                </View>

                <View style={{ width: '42.3%' }}><CustomText style={{ textAlign: 'center', fontSize: 18 }}>Room Reservation</CustomText></View>
                
                <View style={{ width: '33.3%', flexDirection: 'row', alignItems:'center', justifyContent: 'center' }}><View style={{ paddingLeft: 7, paddingRight: 7, paddingTop: 8, paddingBottom: 8, borderWidth: 2, borderColor: '#B5B5B530', borderRadius: 30 }}><CustomText style={{ color: '#F37F7F' }}>1/2</CustomText></View></View>
            </View>
            <View>
                <ScrollView style={{ marginBottom: 170 }}>
                <View style={styles.reserve_confirm_container}>
                    <SelectDate />


                    {/* <View
                    style={{
                        borderBottomColor: '#8F8E8E',
                        borderBottomWidth: 1,
                        marginTop: 14,
                        marginBottom: 14,
                        width: '100%'
                    }}
                    /> */}
                    <SelectRoomType />
                    <OccpantDetails />
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Booking Summary') }}>
                    <View style={styles.confirm_button}>
                        <CustomText style={{ color: '#fff', fontSize: 17, fontWeight: '600' }}>Confirm Details</CustomText>
                    </View>
                    </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
                
            </View>
            {/* </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        // flex: 1
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
        // width: '100%',
        // height: 5000,
        // top: -40,
        
        // marginTop: 20,
        // borderRadius: 20,
        padding: 0,
        marginTop: 10
    },
    confirm_button: {
        padding: '5.5%',
        backgroundColor: '#A5CF7C',
        width: '100%',
        // height: 40,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 20
        // position: 'absolute',
        // top: '11.8%',
        // left: '35%'
        // transform: [
        //     {
        //         translateY: 50
        //     },
        //     {
        //         translateX: 100
        //     }
        // ]
    }
})

export default ReserveScreen;
