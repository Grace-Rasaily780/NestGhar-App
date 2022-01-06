import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { api_url } from '../constants/apiurl';
import { PROPERTY_LIST_FAIL, PROPERTY_LIST_REQUEST, PROPERTY_LIST_SUCCESS } from '../constants/propertiesConstants';


export const fetchPropertyList = () => async (dispatch) => {
    dispatch({
        type: PROPERTY_LIST_REQUEST
    });

    try {
        const user = await AsyncStorage.getItem('@userInfo');
        let jsonUser = JSON.parse(user);
        // console.log(jsonUser.token)
        const { data } = await axios.get(`${api_url}/api/property/fetchAll?page=1&size=5` , { 'headers': { 'Authorization': `Bearer ${jsonUser.token}` } });
        // console.log(data.propertyListings)
        dispatch({
            type: PROPERTY_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PROPERTY_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}