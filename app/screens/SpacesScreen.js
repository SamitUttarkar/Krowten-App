import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function SpacesScreen(props) {

    const [activeButton, setActiveButton] = useState('1');

    const cartsData = [
        {
            cart1: require('../../assets/images/c1.png'),
            cart2: require('../../assets/images/c2.png'),
            title: 'Space Name (ABC)'
        },
        {
            cart1: require('../../assets/images/c3.png'),
            cart2: require('../../assets/images/c4.png'),
            title: 'Space Name (ABC)'
        },
        {
            cart1: require('../../assets/images/c5.png'),
            cart2: require('../../assets/images/c6.png'),
            title: 'Space Name (ABC)'
        },

    ]

    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <View style={styles.navContainer} >
                <TouchableOpacity onPress={() => props.navigation.navigate('HomeScreen')} activeOpacity={0.6} style={{ position: 'absolute', left: 0 }}>
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.2) }} color={Colors.darkBlack} />
                </TouchableOpacity>
                <Text style={{ color: Colors.darkBlack, fontSize: RFPercentage(2.8), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                    Spaces
                </Text>
            </View>

            {/*Top Buttons */}
            <View style={styles.topButtonsContainer} >
                <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('1')} style={{ position: 'absolute', left: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: activeButton == '1' ? Colors.secondary : Colors.lightGrey, width: '50%', height: '100%' }} >
                    {activeButton == '1' ?
                        <View style={{ width: '100%', height: RFPercentage(0.6), position: 'absolute', top: 0, backgroundColor: Colors.primary }} />
                        :
                        null
                    }
                    <Text style={{ color: activeButton == '1' ? Colors.primary : Colors.darkGrey, fontSize: RFPercentage(2.1), fontWeight: Platform.OS == 'android' ? 'bold' : '700' }}>
                        PRIVATE
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('2')} style={{ position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: activeButton == '2' ? Colors.secondary : Colors.lightGrey, width: '50%', height: '100%' }} >
                    {activeButton == '2' ?
                        <View style={{ width: '100%', height: RFPercentage(0.6), position: 'absolute', top: 0, backgroundColor: Colors.primary }} />
                        :
                        null
                    }
                    <Text style={{ color: activeButton == '2' ? Colors.primary : Colors.darkGrey, fontSize: RFPercentage(2.1), fontWeight: Platform.OS == 'android' ? 'bold' : '700' }}>
                        PUBLIC
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Scroll starts */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/*Cart Container */}
                    {cartsData.map((item, i) => (
                        <View key={i} style={{ marginTop: i == 0 ? RFPercentage(5) : RFPercentage(2), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }}>
                            {/* Left Cart */}
                            <TouchableOpacity activeOpacity={0.8} style={{ marginRight: RFPercentage(1.5) }} >
                                <ImageBackground style={{ width: RFPercentage(26), height: RFPercentage(26) }} source={item.cart1} >
                                    <View style={styles.emptyLayer} />
                                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2), position: 'absolute', bottom: RFPercentage(2), left: RFPercentage(2) }} >
                                        Space Name (ABC)
                                    </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            {/* Right Cart */}
                            <TouchableOpacity activeOpacity={0.8} style={{}} >
                                <ImageBackground style={{ width: RFPercentage(26), height: RFPercentage(26) }} source={item.cart2} >
                                    <View style={styles.emptyLayer} />
                                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2), position: 'absolute', bottom: RFPercentage(2), left: RFPercentage(2) }} >
                                        Space Name (ABC)
                                    </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    ))}

                    {/* Create space button */}
                    <TouchableOpacity activeOpacity={0.8} style={{ marginTop: RFPercentage(3.5), width: RFPercentage(24), height: RFPercentage(5.5), justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary, borderRadius: RFPercentage(3) }} >
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2) }} >
                            + Create Space
                        </Text>
                    </TouchableOpacity>

                    <View style={{ marginBottom: RFPercentage(12) }} />
                </View>
            </ScrollView>

            {/* Bottom tab */}
            <BottomTab props={props} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.lightWhite
    },
    topButtonsContainer: {
        width: '100%',
        height: RFPercentage(8.2),
        backgroundColor: Colors.lightGrey,
        flexDirection: 'row',
        marginTop: RFPercentage(3)
    },
    emptyLayer: {
        borderRadius: RFPercentage(1),
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.1)"
    },
    navContainer: {
        marginTop: RFPercentage(2.5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})

export default SpacesScreen;