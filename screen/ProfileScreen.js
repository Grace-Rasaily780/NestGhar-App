import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Item from '../components/Item';
import globalstyles from '../globalStyles';
import CustomText from '../components/CustomText';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, signout } from '../actions/userActions';
import UserEditIcon from '../assets/icons/user-edit.svg';
import EmptyWalletIcon from '../assets/icons/empty-wallet.svg';
import ClipboardTextIcon from '../assets/icons/clipboard-text.svg';
import HeartGreenIcon from '../assets/icons/heart_green.svg';
import FootStepIcon from '../assets/icons/foot-step.svg';
import MoneyTimeIcon from '../assets/icons/money-time.svg';
import HeadphoneIcon from '../assets/icons/headphone.svg';
import PictureIcon from '../assets/icons/picture.svg';
import QRcodeIcon from '../assets/icons/qrcode.svg';
import WarningIcon from '../assets/icons/warning.svg';
import ArchiveBookIcon from '../assets/icons/archive-book.svg';
import NoteRemoveIcon from '../assets/icons/note-remove.svg';
import SignOutIcon from '../assets/icons/sign-out.svg';

function ProfileScreen({ navigation }) {
    const dispatch = useDispatch();
    const img = require('../assets/profile_pic.jpeg');
    const userDetails = useSelector((state) =>  state.userDetails);
    const { loading, user } = userDetails;
    useEffect(() => {
        dispatch(detailsUser());
    }, []);
    return (
            <View style={[globalstyles.main_container], { 
                backgroundColor: '#fff', elevation: 5
            }}>
                {
                    !loading ? (
                        <ScrollView style={{  marginBottom: 0,  }}>
                            <View style={styles.profile_picture_container}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Pic Upload'); }}>
                                    <Image source={img} style={{ height: 95, width: 95, borderRadius: 100 , padding: '2%'  }} />
                                </TouchableOpacity>

                            </View>
                            
                            <View style={{ marginTop: '25%', paddingBottom: '8%', shadowColor: '#000' }}>
                            <CustomText style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{user.firstName} {user.lastName}</CustomText>
                            <CustomText style={{ textAlign: 'center', fontSize: 13, fontWeight: 'bold', color: '#B5B5B5' }}>{user.emailId}</CustomText>
                            </View>
                            <View style={styles.profile_info_container}>
                            
                            <View style={[{ marginTop: '5%'}, styles.items_container]}>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Edit Profile') }}>
                                    <Item 
                                        icon={<UserEditIcon width={22} height={22} />}
                                        name="Edit Profile"
                                    />
                                    </TouchableOpacity>

                                    <Item 
                                        icon={<EmptyWalletIcon width={22} height={22} />}
                                        name="Wallet"
                                    />

                                    <Item 
                                        icon={<ClipboardTextIcon width={22} height={22} />}
                                        name="KYC Details"
                                    />

                                    <Item 
                                        icon={<FootStepIcon width={22} height={22} />}
                                        name="My Vists"
                                    />

                                    <TouchableOpacity onPress={() => { navigation.navigate('Favorite') }}>
                                    <Item 
                                        icon={<HeartGreenIcon width={22} height={22} />}
                                        name="Favourites"
                                    />
                                    </TouchableOpacity>
                            </View>

                            <View style={[styles.items_container]}>
                                    <Item 
                                        icon={<MoneyTimeIcon width={22} height={22} />}
                                        name="Transactions"
                                    />

                                    <Item 
                                        icon={<HeadphoneIcon width={22} height={22} />}
                                        name="NestGhar Customer Care"
                                    />

                                    <Item 
                                        icon={<PictureIcon width={22} height={22} />}
                                        name="My Saved Places"
                                    />

                                    <Item 
                                        icon={<QRcodeIcon width={22} height={22} />}
                                        name="QR Code"
                                    />
                            </View>

                            <View style={[styles.items_container]}>
                                    <Item 
                                        icon={<WarningIcon width={22} height={22} />}
                                        name="About Us"
                                    />

                                    <Item 
                                        icon={<ArchiveBookIcon width={22} height={22} />}
                                        name="Residence Policy"
                                    />

                                    <Item 
                                        icon={<NoteRemoveIcon width={22} height={22} />}
                                        name="Cancelation & refund Policy"
                                    />
                            </View>

                            <TouchableOpacity onPress={() => { dispatch(signout(navigation)); }}>
                                <View style={[styles.item, { paddingLeft: '6%', paddingBottom: '6%', marginBottom: 40}]}>
                                    <View>
                                        <SignOutIcon />
                                    </View>


                                
                                <View style={{ marginLeft: 15 }}>
                                    <CustomText style={{ fontSize: 15, color: '#22201F' }}>Log Out</CustomText>
                                </View>
                                
                            </View>
                            </TouchableOpacity>
                            </View>

                            
                    
                        </ScrollView>
                    ) : (
                        null
                    )
                }
            </View>
    )
}

const styles = StyleSheet.create({
    profile_picture_container: {
        height: 95,
        width: 95,
        // position: 'absolute',
        left: '38%',
        paddingTop: '20%',
        backgroundColor: '#B5B5B508',
    },
    profile_info_container: {
        // top: 110
        backgroundColor: '#FAF8F7',

    },
    items_container: {
        paddingLeft: '1%',
        paddingRight: '1%',
        paddingTop: '6%',
        paddingBottom: '4%',
        marginLeft: '4%',
        marginRight: '4%',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        // minHeight: 800
    },
    item: {
        paddingLeft: '1%',
        paddingRight: '1%',
        paddingTop: '6%',
        paddingBottom: '4%',
        marginLeft: '4%',
        marginRight: '4%',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        flexDirection: 'row', 
        alignItems: 'center'
    }
});

export default ProfileScreen;
