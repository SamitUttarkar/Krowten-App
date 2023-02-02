import React from 'react';
import { ImageBackground, Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

//components
import MyAppButton from './../components/common/MyAppButton';
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function ProfileScreen(props) {

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Nav */}
            <ImageBackground style={styles.navContauner} source={require('../../assets/images/navbar.png')}>
                <View style={styles.navSubContainer}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.7}>
                        <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(2.8) }} color={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', right: 0 }}>
                        <Feather name="settings" style={{ fontSize: RFPercentage(2.8) }} color={Colors.white} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.9}>
                    <Image style={{ marginTop: RFPercentage(3.5), width: RFPercentage(20), height: RFPercentage(20) }} source={require('../../assets/images/profile.png')} />
                </TouchableOpacity>
            </ImageBackground>

            <Text style={styles.profileNameText}>
                Mamie Long
            </Text>
            <Text style={styles.userEmailText}>
                abc@gmail.com
            </Text>

            <View style={styles.introTextContainer}>
                <Text style={{ fontSize: RFPercentage(2.1), color: '#707070' }}>
                    Hi, My name is Mamie and I love photography
                </Text>
                <Text style={{ fontSize: RFPercentage(2.1), marginTop: RFPercentage(0.3), color: '#707070' }}>
                    it's my greatest passion in life.
                </Text>
            </View>

            {/*Edit profile Button */}
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(2) }}>
                <MyAppButton
                    title="Edit Profile"
                    padding={RFPercentage(1.4)}
                    // onPress={() => handleNavigation()}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    bold={false}
                    fontSize={RFPercentage(2.2)}
                    borderRadius={RFPercentage(10)}
                    width={"90%"}
                />
            </View>

            <ScrollView style={{ flex: 1, width: '100%', marginTop: RFPercentage(1) }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Line */}
                    <View style={{ marginTop: RFPercentage(1), backgroundColor: Colors.newInputFieldBorder, width: '100%', height: RFPercentage(0.1), marginBottom: RFPercentage(2) }} />

                    {/* Uplaods and followers text*/}
                    <View style={{ width: '96%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        {/* saperator */}
                        <View style={{ position: 'absolute', left: RFPercentage(5), justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: Colors.black, fontSize: RFPercentage(2.4), fontWeight: 'bold' }} >
                                186
                            </Text>
                            <Text style={{ color: '#989191', fontSize: RFPercentage(1.8), marginTop: RFPercentage(1) }}>
                                Uploads
                            </Text>

                        </View>

                        <View style={{ right: RFPercentage(4), backgroundColor: Colors.newInputFieldBorder, width: RFPercentage(0.2), height: RFPercentage(6) }} />

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: Colors.black, fontSize: RFPercentage(2.4), fontWeight: 'bold' }} >
                                3.5M
                            </Text>
                            <Text style={{ color: '#989191', fontSize: RFPercentage(1.8), marginTop: RFPercentage(1) }}>
                                Followers
                            </Text>
                        </View>

                        <View style={{ left: RFPercentage(4), backgroundColor: Colors.newInputFieldBorder, width: RFPercentage(0.2), height: RFPercentage(6) }} />

                        <View style={{ position: 'absolute', right: RFPercentage(5), justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: Colors.black, fontSize: RFPercentage(2.4), fontWeight: 'bold' }} >
                                08
                            </Text>
                            <Text style={{ color: '#989191', fontSize: RFPercentage(1.8), marginTop: RFPercentage(1) }}>
                                Following
                            </Text>
                        </View>
                    </View>

                    {/* Line */}
                    <View style={{ marginTop: RFPercentage(2), backgroundColor: Colors.newInputFieldBorder, width: '100%', height: RFPercentage(0.1) }} />

                    <View style={styles.playListViewTextContainer}>
                        <Text style={{ fontSize: RFPercentage(2.2), color: Colors.black, fontWeight: '700' }}>
                            My Works
                        </Text>
                        <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0 }}>
                            <Text style={{ fontSize: RFPercentage(2), color: '#707070' }}>
                                View All
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: '94%', marginTop: RFPercentage(2), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity activeOpacity={0.8}>
                        <ImageBackground style={{ overflow: 'hidden', width: RFPercentage(32), height: RFPercentage(20), borderRadius: RFPercentage(2) }} source={require('../../assets/images/p1.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }} >

                        <ImageBackground style={{ overflow: 'hidden', width: RFPercentage(20), height: RFPercentage(20), borderRadius: RFPercentage(2) }} source={require('../../assets/images/p2.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '94%', marginTop: RFPercentage(1), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity activeOpacity={0.8}>
                        <ImageBackground style={{ overflow: 'hidden', width: RFPercentage(20), height: RFPercentage(20), borderRadius: RFPercentage(2) }} source={require('../../assets/images/p3.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }} >
                        <ImageBackground style={{ overflow: 'hidden', width: RFPercentage(32), height: RFPercentage(20), borderRadius: RFPercentage(2) }} source={require('../../assets/images/p4.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: RFPercentage(10) }} />
            </ScrollView>

            {/* Bottom tab */}
            < BottomTab props={props} />

        </Screen>
    );
}

const styles = StyleSheet.create({
    navContauner: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: RFPercentage(32)
    },
    navSubContainer: {
        alignSelf: 'center',
        marginTop: RFPercentage(6),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    profileNameText: {
        fontSize: RFPercentage(2.2),
        marginTop: RFPercentage(2.5),
        color: Colors.black,
        fontWeight: '700'
    },
    userEmailText: {
        fontSize: RFPercentage(2),
        marginTop: RFPercentage(0.5),
        color: '#707070'
    },
    introTextContainer: {
        marginTop: RFPercentage(1.5),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playListViewTextContainer: {
        marginTop: RFPercentage(2.5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center'
    },
    firstHorizentalCartContainer: {
        marginLeft: RFPercentage(1),
        marginTop: RFPercentage(2),
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    historyViewAllContainer: {
        marginTop: RFPercentage(2.5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center'
    },
    subViewAllText: {
        marginTop: RFPercentage(2.5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center'
    },
    subscriptionsContainer: {
        marginLeft: RFPercentage(1),
        marginTop: RFPercentage(2),
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

export default ProfileScreen;