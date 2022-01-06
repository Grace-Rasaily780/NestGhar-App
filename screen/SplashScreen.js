import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Picker, TextInput, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
          AsyncStorage.getItem('@userInfo').then((value) => {
            if(value){
              navigation.navigate('App');
            } else {
              navigation.navigate('Auth');
            }
          });
        // let value = true;
        // if(value){
        //     navigation.navigate('App');
        //   } else {
        //     navigation.navigate('Auth');
        //   }
        }, 1000);
      }, []);
    return (
        <View>
            
        </View>
    )
}

export default SplashScreen;