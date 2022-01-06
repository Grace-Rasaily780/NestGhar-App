import React, { useState } from 'react';
import { StyleSheet, View, Text, Picker, TextInput, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
import CustomText from '../components/CustomText';
import globalstyles from '../globalStyles';
import Logo from '../assets/logo.svg';
import LoginIllustra from '../assets/icons/login_illustra.svg';
import ProfileIcon from '../assets/icons/account_login.svg';
import LockIcon from '../assets/icons/lock.svg';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';

function LoginScreen({ navigation }) {
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        dispatch(signin(username, password, navigation))   
    }
    return (
        <ScrollView>
        <View style={[globalstyles.main_container, { backgroundColor: '#FAF8F7' }]}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', height: '100%', paddingTop: 18, paddingBottom: 18 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flexDirection: 'column', width: '90%', alignItems: 'center'}}>
                    <Logo />
                    
                    <View style={{ marginTop: 21, marginBottom: 22 }}>
                        <LoginIllustra />
                    </View>

                    <View style={styles.login_container}>
                        <CustomText style={{ fontSize: 19, marginBottom: 4 }}>Login</CustomText>
                        <CustomText style={{ fontSize: 12, color: '#B5B5B5' }}>Please Sign in to continue</CustomText>

                        <View
                            style={{
                                borderBottomColor: '#B5B5B5',
                                borderBottomWidth: 1,
                                marginTop: 19,
                                marginBottom: 19,
                                width: '114%',
                                transform: [{ translateX: -22 }],
                                opacity: 0.25
                            }}
                        />

                        
                        <View>
                            <ProfileIcon style={{ position: 'absolute', top: 15, left: 15 }} />
                            <TextInput 
                                placeholder="Username"
                                style={[styles.input, { marginBottom: 25, paddingLeft: 52 }]}
                                value={username}
                                // defaultValue={query}
                                onChangeText={input => { setUsername(input); }}
                            />
                        </View>
                        
                        <View>
                            <LockIcon style={{ position: 'absolute', top: 15, left: 15 }} />
                            <TextInput 
                                placeholder="Password"
                                style={[styles.input, { marginBottom: 18, paddingLeft: 52 }]}
                                secureTextEntry={true}
                                value={password}
                                // defaultValue={query}
                                // onChangeText={input => { setQuery(input); update() }}
                                onChangeText={input => { setPassword(input); }}
                            />
                        </View>

                       

                        <TouchableOpacity onPress={() => { navigation.navigate('Register'); } }>
                            <CustomText style={{ textAlign: 'right', color: '#C49A6C', fontSize: 14, fontWeight: 'bold', marginBottom: 18 }}>Forget Password?</CustomText>
                        </TouchableOpacity>

                        <View>
                            <TouchableOpacity onPress={() => { submit() }}>
                            <View style={[styles.login_btn, { marginBottom: 8 }]}>
                                <CustomText style={{ textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Login</CustomText>
                            </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ padding: '2%' }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('Register'); } }>
                                <CustomText style={{ textAlign: 'center', color: '#22201F', fontSize: 14, fontWeight: '500' }}>Dont have an account? <CustomText style={{ color: '#C49A6C', fontWeight: '500' }}>Create Account</CustomText></CustomText>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* {
                        error ? (
                            <View>
                                <Text>{error}</Text>
                            </View>
                        ) : (
                            null
                        )
                    }
                    
                    <Logo />
                    <View>
                        <CustomText style={{ textAlign: 'center', fontSize: 28, color: '#c39d88', fontWeight: '600' }}>Login</CustomText>
                    </View>
                    
                    <View>
                        <TextInput 
                            placeholder="Email"
                            style={styles.input}
                            keyboardType="email-address"
                            // defaultValue={query}
                            // onChangeText={input => { setQuery(input); update() }}
                        />
                    </View>

                    <View>
                        <TextInput 
                            placeholder="Password"
                            style={styles.input}
                            secureTextEntry={true}
                            // defaultValue={query}
                            // onChangeText={input => { setQuery(input); update() }}
                        />
                    </View>

                    <View>
                        <View style={{ width: '100%', padding: '5%', backgroundColor: '#c39d88', borderRadius: 20  }}>
                            <CustomText style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>Login</CustomText>
                        </View>
                    </View>

                    <View style={{ padding: '2%' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Register'); } }>
                            <CustomText style={{ textAlign: 'center', color: '#007bff' }}>Don't Have an Account? Register</CustomText>
                        </TouchableOpacity>
                    </View> */}
                </View>
                </TouchableWithoutFeedback>

            </View>
            </KeyboardAvoidingView>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        borderColor: '#B5B5B550',
        borderWidth: 1,
        padding: 12,
        paddingLeft: 20,
        fontSize: 14,
        borderRadius: 10,
        color: '#B5B5B5',
        width: '100%'
    }, login_container: {
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 22,
        paddingRight: 22,
        borderRadius: 15,
        backgroundColor: '#fff',
        width: '109%'
    }, login_btn: {
        width: '100%', 
        paddingTop: 18,
        paddingBottom: 18, 
        backgroundColor: '#C49A6C', 
        borderRadius: 10
    }
})

export default LoginScreen;
