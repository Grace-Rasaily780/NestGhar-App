import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import OccpantDetails from '../components/OccpantDetails';
import RoomType from '../components/RoomType';
import SelectDate from '../components/SelectDate';
import SelectRoomType from '../components/SelectRoomType';
import Transaction from '../components/Transaction';
import globalstyles from '../globalStyles';

function TransactionsScreen({ navigation }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <View style={styles.main_container}>
            <View style={styles.reserve_container}>
                <View style={styles.overlay}>
                    <Ionicons name="arrow-back-sharp" size={21} color="#fff" onPress={() => { navigation.goBack(); }} />
                </View>
                <Text style={{ transform: [{ translateX: 36 }, { translateY: -11 }], fontSize: 21, color: '#fcfcfc', fontWeight: '500' }}>Transactions</Text>
            </View>

            
            <View style={{ zIndex: 1 }}>
                
                <View style={styles.reserve_confirm_container}>
                <ScrollView>
                    {/* <View
                    style={{
                        borderBottomColor: '#8F8E8E',
                        borderBottomWidth: 1,
                        marginTop: 14,
                        marginBottom: 14,
                        width: '100%'
                    }}
                    /> */}
                    {/* <ScrollView> */}
                    {/* <View style={{ minHeight: 1400 }}> */}
                        <Transaction key={1} />

                        <Transaction key={2} />

                        <Transaction key={3} />
                    {/* </View> */}
                    
                    </ScrollView>
                    </View>
                
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginBottom: 20
    },
    reserve_container: {
        // flex: 1,
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
        // flex: 1,
        backgroundColor: '#fcfcfc',
        width: '100%',
        // minHeight: 1025,
        transform: [
            {
                translateY: -18
            }
        ],
        
        // top: -40,
        
        // marginTop: 20,
        borderRadius: 20,
        padding: 20
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

export default TransactionsScreen;
