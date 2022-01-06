import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import Collapsible from 'react-native-collapsible';
import { useDispatch } from 'react-redux';
import { saveJoiningDate } from '../actions/reserveAction';
import CustomText from './CustomText';

function SelectDate() {
    const dispatch = useDispatch();
    const [date, setDate] = useState(moment(Date.now()).format("YYYY-MM-DD"));
    // const [select, setSelect] = useState('');
    const [isCollapsed, setIsCollapsed] = useState(false);
   
    
    function timeformat(time){
        let d = moment(time);
        return d.format("MMM Do YYYY");
    }

    const order = (info) => {
        dispatch(saveJoiningDate(timeformat(info)));
    }
    
    return (
        <View style={[styles.select_date_container, { marginBottom: 40 }]}>
            <View style={{flexDirection: 'row',}}>
                <View style={styles.select_date_info}>
                    <CustomText style={{ fontSize: 18, color: '#22201F', marginBottom: 13 }}>Select Date</CustomText>
                    <CustomText style={{ fontSize: 14, color: '#22201F', marginBottom: 19 }}>Select Date to check the room Availability</CustomText>
                </View>
            </View>

                <Collapsible collapsed={isCollapsed}>
                <View>
                    <Calendar 
                        markingType={'custom'}
                        markedDates={{
                          [date]: {
                            customStyles: {
                              container: {
                                backgroundColor: '#C49A6C',
                                borderRadius: 5
                              },
                              text: {
                                color: '#FAFAFA',
                              }
                            }
                          },
                        }}
                        onDayPress={(day) => { setDate(day.dateString); order(day.dateString) }}
                        theme={{
                            todayTextColor: '#000',
                          }}
                        disableArrowLeft={true}
                        enableSwipeMonths={true}
                    />
                </View>
                </Collapsible>
        </View>
    )
}

const styles = StyleSheet.create({
    select_date_container: {
        marginBottom: 10,
        // alignItems: 'center',
        // alignContent: 'center'
    },
    select_date_info: {
        marginLeft: 10,

    },
})
export default SelectDate;
