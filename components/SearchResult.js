import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import CustomText from './CustomText';

function SearchResult({ name, location, monthlyrent, image, navigation }) {
    // var uri = require('../assets/'+ image);
    return (
        <TouchableWithoutFeedback onPress={() => { navigation.navigate('Room') }}>
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image 
                    source={image} 
                    style={{ width: '70%', height: '100%', borderRadius: 15,  }}  
                    />
            </View>
            
            <View style={{ transform: [{ translateX: -55 }],  alignContent: 'center', alignSelf: 'center' }}>
                <CustomText style={{ fontSize: 18, fontWeight: '500', color: '#424242' }}>{name}</CustomText>

                <CustomText style={{ fontSize: 12, color: '#424242' }}>{location}</CustomText>

                <View  style={{ marginTop: 8, color: '#424242', flexDirection: 'row' }}>
                    <CustomText style={{fontSize: 14, color: '#424242' }}>{monthlyrent}</CustomText>
                    <CustomText style={{color: '#424242'}}> Onwards</CustomText>
                </View>
            </View>
            
        </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e9e9e9',
        height: 100,
        width: 340,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 15,
    },
    image_container: {
        width: '70%',
        height: '100%',
        // flex: 1,
        resizeMode: 'cover',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15
    }
})
export default SearchResult;
