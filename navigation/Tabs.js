import React from 'react';
import { View } from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screen/HomeScreen';
import Dashboard from '../screen/Dashboard';
import ProfileScreen from '../screen/ProfileScreen';
import RoomScreen from '../screen/RoomScreen';
import SearchScreen from '../screen/SearchScreen';
import ReserveScreen from '../screen/ReserveScreen';
import BookingSummaryScreen from '../screen/BookingSummaryScreen';
import PersonalDetailsScreen from '../screen/PersonalDetailsScreen';
import ProfessionalDetailsScreen from '../screen/ProfessionalDetailsScreen';
import EmergencyDetailsScreen from '../screen/EmergencyDetailsScreen';
import BankDetailsScreen from '../screen/BankDetailsScreen';
import UploadDocumentsScreen from '../screen/UploadDocumentsScreen';
import FavoriteScreen from '../screen/FavoriteScreen';
import TransactionsScreen from '../screen/TransactionsScreen';
import ProfilePicUploadScreen from '../screen/ProfilePicUploadScreen';
import PropertyListScreen from '../screen/PropertyListScreen';
import CustomText from '../components/CustomText';
import HomeIcon from '../assets/icons/home.svg';
import CalendarIcon from '../assets/icons/calendar-tick.svg';
import NotificationIcon from '../assets/icons/notification.svg';
import ProfileIcon from '../assets/icons/profile.svg';
import HomeIconActive from '../assets/icons/home_active.svg';
import CalendarIconActive from '../assets/icons/calender-tick_active.svg';
import NotificationIconActive from '../assets/icons/notification_active.svg';
import ProfileIconActive from '../assets/icons/profile_active.svg';
import EditProfileScreen from '../screen/EditProfileScreen';
import SelectCityScreen from '../screen/SelectCityScreen';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const RoomStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const KYCStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />       
      <RoomStack.Screen name="Room" component={RoomScreen} />      
      <HomeStack.Screen name="RoomStack" component={RoomStackScreen} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
      <HomeStack.Screen name="Property List" component={PropertyListScreen} />
      <HomeStack.Screen name="SelectCity" component={SelectCityScreen} />
    </HomeStack.Navigator>
   );
 }

 function RoomStackScreen() {
  return (
    <RoomStack.Navigator screenOptions={{ headerShown: false }}>
      <RoomStack.Screen name="Reserve" component={ReserveScreen} />
      <RoomStack.Screen name="Booking Summary" component={BookingSummaryScreen} />
    </RoomStack.Navigator>
   );
 }

 function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />     
      <ProfileStack.Screen name="Edit Profile" component={EditProfileScreen} />
      <ProfileStack.Screen name="Favorite" component={FavoriteScreen} />
      {/* <ProfileStack.Screen name="KYC Screen" component={KYCStackScreen} /> */}
      
    </ProfileStack.Navigator>
   );
 }

//  function KYCStackScreen() {
//   return (
//     <KYCStack.Navigator screenOptions={{ headerShown: false }}>
//       <KYCStack.Screen name="Personal Details" component={PersonalDetailsScreen} />
//       <KYCStack.Screen name="Professional Details" component={ProfessionalDetailsScreen} />
//       <KYCStack.Screen name="Emergency Details" component={EmergencyDetailsScreen} />
//       <KYCStack.Screen name="Bank Details" component={BankDetailsScreen} />
//       <KYCStack.Screen name="Upload Documents" component={UploadDocumentsScreen} />
//     </KYCStack.Navigator>
//    );
//  }

//  function DashboardStackScreen() {
//   return (
//     <DashboardStack.Navigator screenOptions={{ headerShown: false }}>
//       <DashboardStack.Screen name="Dashboard" component={Dashboard} />
//       <DashboardStack.Screen name="Transactions" component={TransactionsScreen} />  
//       <DashboardStack.Screen name="Favorite" component={FavoriteScreen} />             
//     </DashboardStack.Navigator>
//    );
//  }


function Tabs() {
    return (
        <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName
            if (route.name === 'HomeTab') {
              iconName = (tabcolor) => { if(tabcolor == '#C49A6C'){ return( <HomeIconActive fill="#C49A6C15" /> ); } else { return( <HomeIcon /> ) } };
              routeName = 'Home';
              // ? 'home'
              // : 'home';
            } else if (route.name === 'BookingsTab') {
              iconName = (tabcolor) => { if(tabcolor == '#C49A6C'){ return( <CalendarIconActive fill="#C49A6C15" /> ); } else { return( <CalendarIcon /> ) } };
              routeName = 'Bookings';
              // ? 'view-dashboard'
              // : 'view-dashboard';
            }
            else if (route.name === 'DashboardTab') {
              iconName = (tabcolor) => { if(tabcolor == '#C49A6C'){ return( <NotificationIconActive fill="#C49A6C15" /> ); } else { return( <NotificationIcon /> ) } };
              routeName = 'Notification';
              // ? 'view-dashboard'
              // : 'view-dashboard';
            } else if (route.name == 'ProfileTab') {
              iconName = (tabcolor) => { if(tabcolor == '#C49A6C'){ return( <ProfileIconActive fill="#C49A6C15" /> ); } else { return( <ProfileIcon /> ) } };
              routeName = 'Profile';
            }
              return (
                  <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    {iconName(color)}
                    <CustomText style={{ color: color, fontSize: 14, textAlign: 'center' }}>{routeName}</CustomText>
                  </View>
                );
            },
            tabBarShowLabel: false,
            tabBarStyle: styles.navbar,
            tabBarActiveTintColor: '#C49A6C',
            tabBarInactiveTintColor: '#22201F',
            headerShown: false,
            tabBarHideOnKeyboard: true
          })}
      >    
        
        <Tab.Screen name="HomeTab" component={HomeStackScreen} />
        <Tab.Screen name="BookingsTab" component={Dashboard} />
        <Tab.Screen name="DashboardTab" component={Dashboard} />
        <Tab.Screen name="ProfileTab" component={ProfileStackScreen} />
        
      </Tab.Navigator>
    
    )
}

const styles = StyleSheet.create({
  navbar: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // width: '100%',
    // padding: 8, 
    height: 80,
    // zIndex: 1,
    borderTopWidth: 0,
    elevation: 0,
    // backgroundColor: 'black'
}
})

export default Tabs;