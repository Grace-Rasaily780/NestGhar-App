import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import globalstyles from '../globalStyles';
import Item from '../components/Item';
import { TouchableWithoutFeedbackComponent } from 'react-native';
import CustomText from '../components/CustomText';

function Dashboard({ navigation }) {
    return (
        <View style={[globalstyles.main_container]}>
            

            <ScrollView>

                <View style={{ minHeight: 625 }}>


                <View>
                    <CustomText style={{fontSize: 22 , color: '#464646'}}>My Items</CustomText>

                    <View style={styles.items_container}>

                    <TouchableOpacity onPress={() => { navigation.navigate('Transactions') }}>
                    <Item
                        icon="creditcard"
                        name="Transactions"
                        description="Previous Payments"
                    />
                    </TouchableOpacity>
                    <Item
                        icon="wallet"
                        name="Wallet"
                        description="Current Balance: Rs. 0"
                    />

                    <Item
                        icon="book"
                        name="Bookings"
                        description="Booking History"
                    />

                    <TouchableOpacity onPress={() => { navigation.navigate('Favorite') }}>
                    <Item
                        icon="hearto"
                        name="Favorites"
                        description="Properties you liked"
                    />
                    </TouchableOpacity>

                    </View>
                </View>

                <View style={{ marginTop: '8%' }}>
                    <CustomText style={{fontSize: 22 , color: '#464646'}}>Info</CustomText>

                    <View style={styles.items_container}>

                    <Item
                        icon="infocirlceo"
                        name="About Nest Ghar"
                        description="Read our story"
                    />
                        
                    </View>
                </View>


                </View>
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    items_container: {
        paddingTop: '4%',
        // minHeight: 800
    },
    item: {
        padding: '1%',
        paddingLeft: '4%',
        paddingRight: '4%',
        flexDirection: 'row'
    }
})

export default Dashboard;
