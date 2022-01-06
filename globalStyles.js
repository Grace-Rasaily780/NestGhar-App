import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
// console.log(Dimensions.get('window'));

const globalstyles = StyleSheet.create({
    main_container: {
        // paddingBottom: 70,
        paddingTop: Constants.statusBarHeight + 10,
        padding: 11,
        // paddingBottom: 0,
        minHeight: Dimensions.get('window').height,
        backgroundColor: '#fff'
    }
})

export default globalstyles;
