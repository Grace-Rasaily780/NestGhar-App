import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback, Alert, Keyboard, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import { Button, TextInput } from 'react-native-paper';

function UploadDocumentsScreen({ navigation }) {
    

     function onSubmit(values) {
        //List of form values
        // console.log(values);
        Alert.alert(JSON.stringify(values));
        Keyboard.dismiss();
      }

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


    const [addressProof, onChangeAddressProof] = useState({
        title: 'Address Proof',
        image: ''
    });
    const [passportPhoto, onChangePassportPhoto] = useState({
        title: 'Passport Size Photo',
        image: ''
    });
    const [accountNumber, onChangeAccountNumber] = useState("9810000000");
    const [holderName, onChangeHolderName] = useState("First Last");
    const [ifscCode, onChangeIfscCode] = useState("9810000000");
   
    return (
        <View style={styles.main_container}>
            <View style={styles.reserve_container}>
                <View style={styles.overlay}>
                    <Ionicons name="arrow-back-sharp" size={21} color="#fff" onPress={() => { navigation.goBack(); }} />
                </View>
                <Text style={{ transform: [{ translateX: 36 }, { translateY: -11 }], fontSize: 21, color: '#fcfcfc', fontWeight: '500' }}>Upload Documents</Text>
            </View>

            <View style={{ zIndex: 1 }}>
                <View style={styles.reserve_confirm_container}>
                <ScrollView>
                <View style={{ minHeight: 825 }}>
                    <Text style={{ fontSize: 17, paddingLeft: 10, paddingTop: 6, textAlign: 'left' }}>Please upload valid proofs</Text>
                    <Text style={{ color: '#8a8a8a', textAlign: 'left', paddingLeft: 10, }}>Only .jpg and .png files. Max size 2 MB</Text>
                    
                    <View>
                        <Text style={{ color: '#8a8a8a', textAlign: 'left', paddingLeft: 10, marginTop: 30 }}>Address Proof</Text>
                        <Formik 
                            initialValues={addressProof} 
                            onSubmit={onSubmit.bind(this)}>
                            {({ handleChange, handleSubmit, values }) => (
                                <View style={{ padding: '2%', marginTop: 6 }}>
                                    {values.image && values.image.length > 0 ?
                                    <Image source={{ uri: values.image }} style={{ width: 95, height: 95 }} /> : 
                                    <TouchableWithoutFeedback onPress={() => {_pickImage(handleChange('image'))}}>
                                        <View style={{ backgroundColor: '#f5f5f5', padding: '10%', width: 95, height: 95 }}>
                                            <AntDesign name="plus" size={24} color="black" />
                                        </View>
                                    </TouchableWithoutFeedback>
                                    }
                                
                                {/* <Button onPress={handleSubmit} style={styles.button}>Submit</Button> */}
                                </View>
                            )}
                        </Formik>
                        <View
                            style={{
                                borderBottomColor: '#8F8E8E',
                                borderBottomWidth: 1,
                                marginTop: 14,
                                marginBottom: 14,
                                width: '100%'
                            }}
                            />
                    </View>




                    <View>
                        <Text style={{ color: '#8a8a8a', textAlign: 'left', paddingLeft: 10, marginTop: 10 }}>Passport Size Photograph</Text>
                        <Formik 
                            initialValues={passportPhoto} 
                            onSubmit={onSubmit.bind(this)}>
                            {({ handleChange, handleSubmit, values }) => (
                                <View style={{ padding: '2%', marginTop: 6 }}>
                                    {values.image && values.image.length > 0 ?
                                    <Image source={{ uri: values.image }} style={{ width: 95, height: 95 }} /> : 
                                    <TouchableWithoutFeedback onPress={() => {_pickImage(handleChange('image'))}}>
                                        <View style={{ backgroundColor: '#f5f5f5', padding: '10%', width: 95, height: 95 }}>
                                            <AntDesign name="plus" size={24} color="black" />
                                        </View>
                                    </TouchableWithoutFeedback>
                                    }
                                
                                {/* <Button onPress={handleSubmit} style={styles.button}>Submit</Button> */}
                                </View>
                            )}
                        </Formik>
                        {/* <View
                            style={{
                                borderBottomColor: '#8F8E8E',
                                borderBottomWidth: 1,
                                marginTop: 14,
                                marginBottom: 14,
                                width: '100%'
                            }}
                            /> */}
                    </View>

                    
                    

                    
                    
                    
                    <TouchableWithoutFeedback onPress={() => { onSubmit({ addressProof, passportPhoto })}}>
                    <View style={styles.confirm_button}>
                        <Text style={{ color: '#fcfcfc', fontSize: 15 }}>Okay</Text>
                    </View>
                    </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        
    },
    reserve_container: {
        backgroundColor: '#51130190',
        marginTop: 42,
        padding: 20,
        paddingTop: 25,
        // height: '10%'
    },
    overlay: {
        position: 'absolute',
        // display: none,
        // width: '100%',
        // height: '100%',
        top: 2,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 2,
        padding: 17,
    },
    reserve_confirm_container: {
        backgroundColor: '#fcfcfc',
        width: '100%',
        // height: 5000,
        transform: [
            {
                translateY: -18
            }
        ],
        
        // top: -40,
        
        // marginTop: 20,
        borderRadius: 20,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 21,
        paddingRight: 21
    },
    confirm_button: {
        padding: '2%',
        backgroundColor: '#B98B73',
        width: 100,
        height: 40,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 19,
        // position: 'absolute',
        // top: '11.8%',
        // left: '35%'
        transform: [
            {
                translateY: 30
            },
            {
                translateX: 125
            }
        ]
    },
    input_container: {
        padding: '3%',
        paddingLeft: '4%',
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomColor: '#5b5e56',
        borderBottomWidth: 1,
        marginTop: 20,
        height: 63
        // marginLeft: '3%'
    },
    content: {
        paddingTop: 40,
        padding: 16,
      },
      button: {
        marginTop: 16,
      }
})

export default UploadDocumentsScreen;
