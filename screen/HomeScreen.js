import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Picker, TextInput, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native';
import SvgIcon from 'react-native-vector-icons';
import globalstyles from '../globalStyles';
import Room from '../components/Room';
import CustomText from '../components/CustomText';
import Logo from '../assets/logo.svg';
import LocationIcon from '../assets/icons/location.svg';
import Search from '../assets/icons/search.svg';
import Location from '../components/Location';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPropertyList } from '../actions/propertiesAction';

function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState("Lalitpur");
    const [num, setNum] = useState(0);
    const [input, setInput] = useState('');
    const data = [
        {   
            id: 1,
            location: 'Lalitpur',
            img: 'https://media.istockphoto.com/photos/kathmandu-picture-id519624147?k=20&m=519624147&s=612x612&w=0&h=ots6Nm-Xg0wLAEB0PmR97kr_tESTUgmBzNDS3k89Bck='
        },
        {
            id: 2,
            location: 'Bhaktapur',
            img: 'https://media.istockphoto.com/photos/bahakapur-nepal-picture-id469532554?b=1&k=20&m=469532554&s=170667a&w=0&h=cNpG0jBWqTwL1kEbT8WzwMkftJT89KDETBpvaTpCZ2c='
        },
        {
            id: 3,
            location: 'Kathmandu',
            img: 'https://media.istockphoto.com/photos/patan-picture-id637268486?k=20&m=637268486&s=612x612&w=0&h=-I96cD0nJvgsRSYljbLqnrLR5bxxJX6APw-eut43heQ='
        }
    ]

    const items = [
        {
            propertyName: 'Room 1',
            address: { city: 'Lalitpur' },
            minPrice: '10,000',
            availableFor: 'men',
            imgUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
        },
        {
            propertyName: 'Room 2',
            address: { city: 'Kathmandu' },
            minPrice: '10,000',
            availableFor: 'unisex',
            imgUrl: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
        },
        {
            propertyName: 'Room 3',
            address: { city: 'Kathmandu' },
            minPrice: '10,000',
            availableFor: 'unisex',
            imgUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            propertyName: 'Room 4',
            address: { city: 'Lalitpur' },
            minPrice: '10,000',
            availableFor: 'unisex',
            imgUrl: 'https://media.istockphoto.com/photos/coastal-bedroom-interior-mockup-3d-render-picture-id1284744586?b=1&k=20&m=1284744586&s=170667a&w=0&h=q1Z0Jq5UBoRYeenScMxyV-VdSX_ds0ooTODrsvVMd1U='
        },
        {
            propertyName: 'Room 5',
            address: { city: 'Lalitpur' },
            minPrice: '10,000',
            availableFor: 'unisex',
            imgUrl: 'https://media.istockphoto.com/photos/modern-bedroom-picture-id1313528964?b=1&k=20&m=1313528964&s=170667a&w=0&h=YgdyhC38G93TZ5g8LBjKvHZM8GSg2houKBOrbrxETkw='
        },
        {
            propertyName: 'Room 6',
            address: { city: 'Bhaktapur' },
            minPrice: '10,000',
            availableFor: 'women',
            imgUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            propertyName: 'Room 7',
            address: { city: 'Bhaktapur' },
            minPrice: '10,000',
            availableFor: 'women',
            imgUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlZHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
    ]
      const margin = {
            marginRight: 20
    }

    const properties = useSelector((state) => state.properties);
    const { loading, propertyList } = properties;
    // console.log(Logo);
    // if(!loading) {
    //     if(propertyList) {
    //     console.log(propertyList.propertyListings)
    //     }
    // }
    useEffect(() => {
        dispatch(fetchPropertyList());
        
        // if(!loading) {
        //     console.log(propertyList.propertyListings)
        // }
    }, []);

    return (
        !loading && propertyList ? (
        <View style={[styles.home_container, globalstyles.main_container]}>
            <View style={{ shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5, paddingBottom: 10, marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
                    <Logo width={78} height={44}  />

                    <TouchableOpacity onPress={() => { navigation.navigate('SelectCity') }}>
                    <View 
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                        <View>
                        <LocationIcon height={24} width={24} fill="#fff" />
                        </View>
                        
                        <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                        <CustomText style={{ fontSize: 8, marginLeft: 10 }}>Select City</CustomText>
                        <CustomText style={{ color: '#EA9C26', fontSize: 10, marginLeft: 9 }}>Lalitpur</CustomText>
                        </View>
                    
                    </View>
                    </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{ navigation.navigate('Search') }}>
                <View pointerEvents='none'>
                    <Search height={16} width={16.38} style={{ position: 'absolute', top: '28%', left: '3.5%' }} />
                    <TextInput editable={false} style={styles.input} placeholder="Search Area and City" />
                </View>
            </TouchableOpacity>
            </View>
            
            
           

            {/* <TouchableOpacity onPress={() => { navigation.navigate('Search') }}>
            <View>
                
                <TextInput 
                    placeholder="Search"
                    style={styles.input}
                    // defaultValue={input}
                    // onChangeText={text => { setInput(text) }}
                    
                />

            </View>
            </TouchableOpacity> */}

            
            
            <ScrollView style={{ paddingLeft: 8, marginBottom: 150,}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>
                <View>
                    <CustomText style={{fontSize: 14 , color: '#22201F'}}>Popular Cities</CustomText>
                    <CustomText style={{fontSize: 12 , color: '#B5B5B5'}}>Nepal Top 10 Best Properties place</CustomText>
                </View>
                
                <TouchableWithoutFeedback onPress={() => { navigation.navigate('SelectCity'); }}>
                <View>
                     <CustomText style={{fontSize: 14 , color: '#EA9C26'}}>View All</CustomText>
                </View>
                </TouchableWithoutFeedback>
            </View>

            <ScrollView horizontal={true} style={styles.container} contentContainerStyle={{ justifyContent: 'space-evenly', padding: 15, paddingLeft: 0, paddingRight: 0,}}>
                {
                    data.map((item, index) => (
                        <View key={index}>
                            <Location margin={margin} navi={navigation} location={item.location} img={item.img}  />
                        </View>
                    ))
                }
            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View>
                    <CustomText style={{fontSize: 14 , color: '#22201F'}}>Featured Properties</CustomText>
                    <CustomText style={{fontSize: 12 , color: '#B5B5B5'}}>Explore Top Quality Places</CustomText>
                </View>
                
                <TouchableWithoutFeedback onPress={() => { navigation.navigate('Property List'); }}>
                <View>
                     <CustomText style={{fontSize: 14 , color: '#EA9C26'}}>View All</CustomText>
                </View>
                </TouchableWithoutFeedback>
            </View>

            <ScrollView horizontal={true} style={styles.container} contentContainerStyle={{ justifyContent: 'space-evenly', padding: 15, paddingLeft: 0, paddingRight: 0,}}>
                {
                    // propertyList.propertyListings.map((item, index) => console.log(item))
                    propertyList.propertyListings.map((item, index) => (
                        <View key={index}>
                            <Room room={item} margin={margin} navi={navigation} featured={true} />
                        </View>
                    ))
                }
            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View>
                    <CustomText style={{fontSize: 14 , color: '#22201F'}}>Socialite Properties</CustomText>
                    <CustomText style={{fontSize: 12 , color: '#B5B5B5'}}>Nest Ghar offer long stay Luxuires Flats</CustomText>
                </View>
                
                <TouchableWithoutFeedback onPress={() => { navigation.navigate('Property List'); }}>
                <View>
                    <CustomText style={{fontSize: 14 , color: '#EA9C26'}}>View All</CustomText>
                </View>
                </TouchableWithoutFeedback>
            </View>

                <ScrollView horizontal={true} style={styles.container} contentContainerStyle={{ justifyContent: 'space-evenly', padding: 15, paddingLeft: 0, paddingRight: 0,}}>
                    {
                        items.map((item, index) => (
                            <View key={index}>
                                <Room room={item} margin={margin} navi={navigation}  />
                            </View>
                        ))
                    }
            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View>
                    <CustomText style={{fontSize: 14 , color: '#22201F'}}>Ephemeral Properies</CustomText>
                    <CustomText style={{fontSize: 12 , color: '#B5B5B5'}}>Explore Top Quality Places</CustomText>
                </View>
                
                <TouchableWithoutFeedback onPress={() => { navigation.navigate('Property List'); }}>
                <View>
                     <CustomText style={{fontSize: 14 , color: '#EA9C26'}}>View All</CustomText>
                </View>
                </TouchableWithoutFeedback>
            </View>

                <ScrollView horizontal={true} style={styles.container} contentContainerStyle={{ justifyContent: 'space-evenly', padding: 15, paddingLeft: 0, paddingRight: 0,}}>
                    
                    {
                        items.map((item, index) => (
                            <View key={index}>
                                <Room room={item} margin={margin} navi={navigation}  />
                            </View>
                        ))
                    }
            </ScrollView>
            </ScrollView>
            

            
                
        </View> ) : (
            null
        )
    )
}

const styles = StyleSheet.create({
    home_container: {
        flexDirection: 'column',
    },
    location_select_container: {
        height: 20, 
        width: 70,
        backgroundColor: '#fcfcfc',
        borderWidth: 0,
        color: '#EA9C26',
        fontSize: 2
        // fontFamily: 'mulish-regular'
    },
    input: {
        borderWidth: 0,
        padding: 8,
        paddingLeft: 40,
        borderRadius: 25,
        color: '#B5B5B5',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        backgroundColor: '#B5B5B515',
        // opacity: 0.15
        width: '100%'
        // fontFamily: 'mulish-regular'
    },
    logo: {
        height: 30,
        width: 38
    },
    location_select: {
        backgroundColor: '#fcfcfc',
        borderWidth: 0,
        // fontFamily: 'mulish-regular'
    },
    // container: {
    //     flex: 1,
    //     marginTop: StatusBar.statusBarHeight,
    //   },
    //   scrollView: {
    //     backgroundColor: 'pink',
    //     marginHorizontal: 20,
    //   },
    //   text: {
    //     fontSize: 42,
    //   },
    container: {
        // backgroundColor: "rgba(0,0,0,1)",
        flexDirection: "row",
        width: '100%',
        // height: 170,
        // marginTop: 20,
        // marginBottom: 20,
        // transform: [{ translateX: -10 }]
      },
      
})
export default HomeScreen;
