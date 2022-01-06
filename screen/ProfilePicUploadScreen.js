import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Picker, TextInput, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import CustomText from '../components/CustomText';
import globalstyles from '../globalStyles';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { uploadProfilePic } from '../actions/userActions';
import UndoIcon from '../assets/icons/undo.svg';

function ProfilePicUploadScreen({ navigation }) {
    const dispatch = useDispatch();
    async function _pickImage (handleChange) {
        let result = await ImagePicker.launchImageLibraryAsync({
        //   allowsEditing: true,
        //   aspect: [4, 3]
        }) 
        // console.log(result)
        if (!result.cancelled) {
          handleChange(result.uri)
        }
      }
      const userDetails = useSelector(state => state.userDetails);
    //   const { user } = userDetails;
      const user = "one";
      async function uploadImageAsync(uri) {
      
        // Note:
        // Uncomment this if you want to experiment with local server
        //
        // if (Constants.isDevice) {
        //   apiUrl = `https://your-ngrok-subdomain.ngrok.io/upload`;
        // } else {
        //   apiUrl = `http://localhost:3000/upload`
        // }
        let uriArray = uri.split(".");
        let fileType = uriArray[uriArray.length - 1];
      
        let formData = new FormData();
        formData.append("image", {
          uri,
          name: `${user._id}.${fileType}`,
          type: `image/${fileType}`,
        });
  
        let options = {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          }
        };
  
        dispatch(uploadProfilePic(formData, navigation));
        // console.log(formData)
        // return axios.post(`${api_url}/api/user/profile_pic/${user._id}`, formData, options);
      }

    //   useEffect(() => {
        // AsyncStorage.getItem('@userInfo')
        //   .then(res => {
        //     let json = JSON.parse(res);
        //     if(!user){
        //         dispatch(detailsUser(json._id));
        //     }
        //     // console.log();
        //   })
       
    // }, []);
    return (
        <View style={[globalstyles.main_container]}>
            <View style={{ marginBottom: 14, padding: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                <View style={{ width: '30.3%' }}>
                    <UndoIcon width={24} height={24} onPress={() => { navigation.goBack(); }} />
                </View>

                <View style={{ width: '42.3%' }}><CustomText style={{ textAlign: 'center', fontSize: 18 }}>Edit Profile</CustomText></View>
                
                <View style={{ width: '33.3%' }}></View>
            </View>
            <View style={{ padding: 10, paddingTop: 40 }}>
                <Formik 
                    initialValues={{ image: '' }} 
                    // onSubmit={onSubmit.bind(this)}
                    >
                    {({ handleChange, handleSubmit, values }) => (
                        <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                    <TouchableWithoutFeedback onPress={() => { _pickImage(handleChange('image')) }}>
                        <View style={styles.reserve_btn}>
                            <MaterialCommunityIcons name="image-plus" size={24} style={{ marginRight: 10 }} color="#fff" />
                            <CustomText style={{ color: '#fff' }}>Choose Your Photo</CustomText>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                            {values.image && values.image.length > 0 ?
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40, marginBottom: 30 }}>
                                        <Image source={{ uri: values.image }} style={{height: 200, width: 200, borderRadius: 100 ,borderColor: '#c39d88', borderWidth: 2, padding: '2%' }} />

                                    </View>
                                    <TouchableWithoutFeedback onPress={() => { uploadImageAsync(values.image); }}>
                                        <View style={[styles.reserve_btn, { width: '40%' }]}>
                                            <CustomText style={{ color: '#fff' }}>Upload</CustomText>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                                
                                 : 
                                null
                            }
                            </View>
                        )}
                        </Formik>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    reserve_btn: {
        backgroundColor: '#B98B73',
        width: '60%',
        height: 44,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
    }
})

export default ProfilePicUploadScreen;
