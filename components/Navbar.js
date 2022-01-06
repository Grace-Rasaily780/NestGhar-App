import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomText from './CustomText';

function Navbar() {
    return (
        <View style={styles.navbar}>
            
            <View style={styles.icon_container}>
                <MaterialIcons name="home" style={styles.icons} />
                <CustomText style={styles.icon_text}>Home</CustomText>
            </View>
            
             <View style={styles.icon_container}>
                <MaterialIcons name="dashboard" style={styles.icons} />
                <CustomText style={styles.icon_text}>Dashboard</CustomText>
            </View>
            
            <View style={styles.icon_container}>
                <MaterialIcons name="account-circle" style={styles.icons} />
                <CustomText style={styles.icon_text}>Profile</CustomText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#f6f6f6',
        padding: 12, 
        height: 70,
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        borderTopColor: '#B98B73',
        borderTopWidth: 2
    },
    icons: {
        color: '#4e4e4e',
        fontSize: 26,
        marginBottom: 2
    },
    icon_container: {
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon_text: {
        color: '#7e807a',
        fontWeight: '600'
    }
})

export default Navbar;
