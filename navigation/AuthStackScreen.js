import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';

const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />             
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
   );
 }

 
const styles = StyleSheet.create({
  navbar: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // width: '100%',
    backgroundColor: '#f6f6f6',
    padding: 8, 
    height: 60,
    // zIndex: 1,
    position: 'absolute',
    bottom: 0,
    borderTopColor: '#B98B73',
    // borderTopWidth: 1
}
})

export default AuthStackScreen;