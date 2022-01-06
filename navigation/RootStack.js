import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Tabs from './Tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screen/SplashScreen';
import AuthStackScreen from './AuthStackScreen';

const Root = createStackNavigator();

function RootStack() {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name="Splash" component={SplashScreen} />             
      <Root.Screen name="Auth" component={AuthStackScreen} />
      <Root.Screen name="App" component={Tabs} />
    </Root.Navigator>
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
});

export default RootStack;