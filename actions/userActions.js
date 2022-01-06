import axios from 'axios';
import { api_url } from '../constants/apiurl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_MODIFY_FAIL, USER_MODIFY_REQUEST, USER_MODIFY_SUCCESS } from '../constants/userConstants';

export const signin = (username, password, navigation) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: { username: username, password: password }
    });
    try {
        const { data } = await axios.post(`${api_url}/api/auth/login`, { username: username, password: password });
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        await AsyncStorage.setItem('@userInfo',  JSON.stringify(data))
        navigation.navigate('App')
        // localStorage.setItem('userInfo' , JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}

export const signout = (navigation) => async (dispatch) => {
    try{
        await AsyncStorage.clear();
        navigation.navigate('Auth')
        // reloadApp();
        // localStorage.removeItem('userInfo');
        // localStorage.removeItem('cartItems');
        // localStorage.removeItem('deliveryAddress');
        dispatch({
            type: USER_SIGNOUT
        });
    } catch(error){
    }
}

export const register = (submit) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: submit
    });
    try {
        const { data } = await axios.post(`${api_url}/api/user/profile/register`, { 
            userName: submit.username,
            password: submit.password,
            firstName: submit.firstname,
            lastName: submit.lastname,
            mobileNo: submit.mobileno,
            emailId: submit.email,
            address: {
                addressLine1: submit.addressLine1,
                addressLine2: submit.addressLine2,
                ZipCode: submit.zipcode, 
                state: submit.state, 
                country: submit.country,
                city: submit.city,
                locality: submit.locality
            },
            kycStatus: "Pending"
        });
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });
        await AsyncStorage.setItem('@userInfo',  JSON.stringify(data))

        // localStorage.setItem('userInfo' , JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}

export const detailsUser = () => async (dispatch, getState) => {
    let user = await AsyncStorage.getItem('@userInfo');
    let jsonUser = JSON.parse(user);
    dispatch({
        type: USER_DETAILS_REQUEST,
        payload: jsonUser.userId
    });

    // const { useSignin: { userInfo } } = getState();
    // console.log(userSignin);
    try {
        
        const { data } = await axios.get(`${api_url}/api/user/profile/fetch`, {
            headers: { Authorization: `Bearer ${jsonUser.token}` }
        });
        
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }

}

export const modify = (submit) => async (dispatch) => {
    dispatch({
        type: USER_MODIFY_REQUEST,
        payload: submit
    });
    try {
        const { data } = await axios.post(`${api_url}/api/user/profile/modify`, { 
            userName: submit.username,
            firstName: submit.firstname,
            lastName: submit.lastname,
            emailId: submit.email
        });
        dispatch({
            type: USER_MODIFY_SUCCESS,
            payload: data
        });
        // localStorage.setItem('userInfo' , JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_MODIFY_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}

export const uploadProfilePic = (formData, navigation) => async (dispatch, getState) => {
    // dispatch({
    //     type: USER_DETAILS_REQUEST,
    //     payload: userId
    // });

   
    try {
        
        // const { data } = await axios.post(`${api_url}/api/user/profile/saveImage`, formData,  {
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "multipart/form-data",
        //       }
        // });
        
        navigation.navigate('Profile');
        // dispatch({
        //     type: USER_DETAILS_SUCCESS,
        //     payload: data
        // })
    } catch (error) {
        // dispatch({
        //     type: USER_DETAILS_FAIL,
        //     payload: error.response && error.response.data.message
        //     ? error.response.data.message
        //     : error.message
        // })
    }

}