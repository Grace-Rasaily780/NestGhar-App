import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableWithoutFeedbackComponent } from 'react-native';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Collapsible from 'react-native-collapsible';
// import Accordion from 'react-native-collapsible/Accordion';
import SearchResult from '../components/SearchResult';
import globalstyles from '../globalStyles';

function SearchScreen({ navigation }) {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggle = () => {
        if(isCollapsed === true){
            setIsCollapsed(false);
        } else {
            setIsCollapsed(true);
        }
    }
    const data = [
        {
            name: 'Room 1',
            location: 'Lalitpur',
            monthlyrent: 'Rs. 10,000',
            gender: 'men',
            image: require('../assets/room.png')
        },
        {
            name: 'Room 2',
            location: 'Kathmandu',
            monthlyrent: 'Rs. 10,000',
            gender: 'unisex',
            image: require('../assets/room.png')
        },
        {
            name: 'Room 3',
            location: 'Kathmandu',
            monthlyrent: 'Rs. 10,000',
            gender: 'unisex',
            image: require('../assets/room.png')
        },
        {
            name: 'Room 4',
            location: 'Lalitpur',
            monthlyrent: 'Rs. 10,000',
            gender: 'unisex',
            image: require('../assets/room.png')
        },
        {
            name: 'Room 5',
            location: 'Lalitpur',
            monthlyrent: 'Rs. 10,000',
            gender: 'unisex',
            image: require('../assets/room.png')
        },
        {
            name: 'Room 6',
            location: 'Bhaktapur',
            monthlyrent: 'Rs. 10,000',
            gender: 'women',
            image: require('../assets/room.png')
        },
        {
            name: 'Room 7',
            location: 'Bhaktapur',
            monthlyrent: 'Rs. 10,000',
            gender: 'women',
            image: require('../assets/room.png')
        },
    ]
    const update = () => {
        const filtered = data.filter(room => {
            return room.name.toLowerCase().includes(query.toLowerCase()) ||  room.location.toLowerCase().includes(query.toLowerCase())
       })
       setResult(filtered);
    }

    const filterByGender = () => {
        const filtered = data.filter(room => {
            return room.gender.toLowerCase().includes(query.toLowerCase())
       })

       setResult(filtered);
    }
    return (
        <View style={globalstyles.main_container}>
            <View>
                <Ionicons name="arrow-back-sharp" size={24} style={{ padding: 8, color: "#424242" }}  onPress={() => { navigation.goBack(); }} />
            </View>
            
            <View style={{ flexDirection: 'row',  }}>
                
                <TextInput 
                    placeholder="Search"
                    style={styles.input}
                    defaultValue={query}
                    onChangeText={input => { setQuery(input); update() }}
                />

                <TouchableWithoutFeedback onPress={toggle}>
                <View style={styles.slide}>
                    <FontAwesome5 name="sliders-h" size={24} color="#c39d88" />
                </View>
                </TouchableWithoutFeedback>
            </View>
            
            <Collapsible collapsed={isCollapsed}>
                <View style={styles.filter_container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, color: '#c39d88', fontWeight: '500' }}>Filter By</Text>

                        <TouchableWithoutFeedback onPress={() => { setQuery(''); setResult([]) }}>
                            <Text style={{ fontSize: 18, color: '#c39d88', fontWeight: '500' }}>Clear</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    

                    <View style={{ paddingTop: '4%', paddingBottom: '4%' }}>
                        <Text style={{ fontSize: 19, color: '#c39d88' }}>Gender</Text>

                        <View style={{ flexDirection: 'row', marginTop: 10, height: 40 }}>
                            <TouchableWithoutFeedback onPress={() => { setQuery('men'); filterByGender(); toggle() }}>
                            <View style={styles.filter_button}> 
                                <Text style={{ color: '#c39d88' }}>Men</Text>
                            </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => { setQuery('women'); filterByGender(); toggle() }}>
                            <View style={styles.filter_button}> 
                                <Text style={{ color: '#c39d88' }}>Women</Text>
                            </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => { setQuery('unisex'); filterByGender(); toggle() }}>
                            <View style={styles.filter_button}> 
                                <Text style={{ color: '#c39d88' }}>Unisex</Text>
                            </View>
                            </TouchableWithoutFeedback>
                            
                        </View>
                        
                    </View>

                    <View
                    style={{
                        borderBottomColor: '#ababab',
                        borderBottomWidth: 1,
                        marginTop: 8,
                        marginBottom: 8,
                        width: 800
                    }}
                    />
                    <View style={{ paddingTop: '4%', paddingBottom: '4%' }}>
                        <Text style={{ fontSize: 19, color: '#c39d88' }}>Amenities</Text>
                        
                        <ScrollView horizontal={true} contentContainerStyle={{ height: 40, width: 600 }} style={{ flexDirection: 'row', marginTop: 10, height: 40 }}>
                        
                            <View style={styles.filter_button}> 
                                <Text style={{ color: '#c39d88' }}>Parking</Text>
                            </View>

                            <View style={styles.filter_button}> 
                                <Text style={{ color: '#c39d88' }}>TV</Text>
                            </View>

                            <View style={styles.filter_button}> 
                                <Text style={{ color: '#c39d88' }}>Lunch</Text>
                            </View>
                            
                            <View style={styles.filter_button}> 
                                <Text style={{ color: '#c39d88' }}>AC</Text>
                            </View>

                        </ScrollView>
                        
                    </View>

                    <View
                    style={{
                        borderBottomColor: '#ababab',
                        borderBottomWidth: 1,
                        marginTop: 8,
                        marginBottom: 8,
                        width: 800
                    }}
                    />
                    <View style={{ paddingTop: '4%', paddingBottom: '4%' }}>
                        <Text style={{ fontSize: 19, color: '#c39d88' }}>Gender</Text>

                        <View style={{ flexDirection: 'row', marginTop: 10, height: 40 }}>
                            <View style={styles.filter_button}> 
                                <Text style={{ color: '#c39d88' }}>Men</Text>
                            </View>

                            <View style={styles.filter_button}> 
                                <Text style={{ color: '#c39d88' }}>Women</Text>
                            </View>

                            <View style={styles.filter_button}> 
                                <Text style={{ color: '#c39d88' }}>Unisex</Text>
                            </View>
                            
                        </View>
                        
                    </View>

                    <View
                    style={{
                        borderBottomColor: '#ababab',
                        borderBottomWidth: 1,
                        marginTop: 8,
                        marginBottom: 8,
                        width: 800
                    }}
                    />
                </View>
            </Collapsible>

            <ScrollView style={{ paddingLeft: 8, marginTop: 15, marginBottom: 131}}>
            <View>
                {
                    result.map(room => (
                        <SearchResult 
                            name={room.name} 
                            location={room.location} 
                            monthlyrent={room.monthlyrent} 
                            image={room.image}
                            navigation={navigation}
                            key={room.name}
                            />
                    ))
                }

                {/* <SearchResult 
                    name={data[0].name} 
                    location={data[0].location} 
                    monthlyrent={data[0].monthlyrent} 
                    image={data[0].image}
                />

<SearchResult 
                    name={data[0].name} 
                    location={data[0].location} 
                    monthlyrent={data[0].monthlyrent} 
                    image={data[0].image}
                />

<SearchResult 
                    name={data[0].name} 
                    location={data[0].location} 
                    monthlyrent={data[0].monthlyrent} 
                    image={data[0].image}
                />

<SearchResult 
                    name={data[0].name} 
                    location={data[0].location} 
                    monthlyrent={data[0].monthlyrent} 
                    image={data[0].image}
                />

<SearchResult 
                    name={data[0].name} 
                    location={data[0].location} 
                    monthlyrent={data[0].monthlyrent} 
                    image={data[0].image}
                /> */}
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: '#c39d88',
        borderWidth: 2,
        padding: 8,
        paddingLeft: 20,
        fontSize: 16,
        borderRadius: 20,
        color: '#333',
        width: '90%'
    },
    slide: {
        // padding: '5%',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '3.5%'
    },
    filter_container: {
        padding: '5%'
    },
    filter_button: {
        borderWidth: 2,
        minWidth: '25%',
        maxWidth: '50%',
        borderColor: '#c39d88',
        padding: '1.8%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 30,
        marginRight: 10,
        height: 40
    }
})

export default SearchScreen;
