import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Navbar from './components/Navbar';
import HomeScreen from './screen/HomeScreen';
import Dashboard from './screen/Dashboard';
import ProfileScreen from './screen/ProfileScreen';
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Tabs from './navigation/Tabs';
import store from './store';
import { Provider } from 'react-redux';
import Loading from './components/Loading';
import RegisterScreen from './screen/RegisterScreen';
import AuthStackScreen from './navigation/AuthStackScreen';
import RootStack from './navigation/RootStack';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api_url } from './constants/apiurl';


AsyncStorage.getItem('@userInfo')
    .then((user) => {
      let value = JSON.parse(user);
      axios.defaults.baseURL = api_url;

      // Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
      // See below for an example using Custom instance defaults instead.
      if(value){
        axios.defaults.headers.common['Authorization'] = `Bearer ${value.token}`;
        // axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJUZXN0VXNlciIsImlhdCI6MTYzNzkzOTA4NiwiZXhwIjoxNjM3OTQyNjg2fQ.O7ugHoQ5hwj1vMNK9vAlJTXO_0ySzk1oRzGOCkMiOMoXCkoDpaPBzM6JuWpBUNuUp7-illQQ6SSB5o5f-sno0A`;
        // console.log(axios.defaults.headers.common['Authorization'])
        const refreshUser = async () => {
          let refresh = { refreshToken: value.refreshToken }
          // let headers = { headers: { Authorization: `Bearer ${value.token}` } }
          const { data } = await axios.post(`${api_url}/api/auth/refresh`, refresh)
          value.refreshToken = data.refreshToken;
          value.token = data.accessToken;
          await AsyncStorage.setItem('@userInfo',  JSON.stringify(value))

        }
        refreshUser()
      }
    })

// const getFonts = () => Font.loadAsync({
//   'mulish-regular': require('./assets/static/Mulish-Regular.ttf'),
//   'mulish-bold': require('./assets/static/Mulish-Bold.ttf'),

// });


export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  const [role, setRole] = useState('user');
  const [signinedIn, setSigninedIn] = useState(true);
  useEffect(() => {
    // const refreshUser = async () => {
    //   let user = await AsyncStorage.getItem('@userInfo');
    //   let jsonuser = JSON.parse(user);
    //   console.log(jsonuser);
    //   let refresh = { refreshToken: jsonuser.refreshToken }
    //   let headers = { headers: { Authorization: `Bearer ${jsonuser.token}` } }
    //   const { data } = await axios.post(`${api_url}/api/auth/refresh`, refresh, headers)
    //   jsonuser.refreshToken = data.refreshToken;
    //   jsonuser.token = data.accessToken;
    //   await AsyncStorage.setItem('@userInfo',  JSON.stringify(jsonuser))

    // }
    // refreshUser()
  }, [])
  // if (fontsLoaded) {
    return (

      <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
            <RootStack />
            {/* <HomeScreen /> */}
        </NavigationContainer>
      </SafeAreaView>
      </Provider>
    );
  // }
  // else {
  //   return (
  //     <AppLoading 
  //       startAsync={getFonts} 
  //       onFinish={() => setFontsLoaded(true)} 
  //       onError={console.warn}
  //     />
  //   )
  // }
}

// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);
//   if (fontsLoaded) {
//     return (
//       <SafeAreaProvider>
//       <NativeRouter>
//       <View style={styles.container}>
//         <View style={styles.main_container}>
//           <Route exact path="/" component={HomeScreen} />
//           <Route path="/dashboard" component={Dashboard} />
//           <Route path="/profile" component={ProfileScreen} />
//         </View>
        
//       </View>
//       <Navbar />
//       </NativeRouter>
//       </SafeAreaProvider>
//     );
//   }
//   else {
//     return (
//       <AppLoading 
//         startAsync={getFonts} 
//         onFinish={() => setFontsLoaded(true)} 
//         onError={console.warn}
//       />
//     )
//   }
// }

/*<NavigationContainer style={styles.main_container}>
        <Tabs />
      </NavigationContainer>*/
const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#fff'
  }
});
