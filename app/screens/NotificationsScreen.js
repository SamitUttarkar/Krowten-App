import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import NotificationsCard from '../components/common/NotificationsCard';
import BottomTab from './../components/common/BottomTab';

//config
import { Colors } from 'react-native/Libraries/NewAppScreen';

function NotificationsScreen(props) {


    const carData = [
        {
            imageSource: require('../../assets/images/f1.png'),
            title: 'Robert Fox',
            subTitle: 'Invited you to a space "Space ABC',
            time: '5 Min'
        },
        {
            imageSource: require('../../assets/images/f2.png'),
            title: 'Jacob Jones',
            subTitle: 'Sent you a file',
            onPress: true,
            time: '1 Hour'
        },
        {
            imageSource: require('../../assets/images/f3.png'),
            title: 'Annete Black',
            subTitle: 'Sent you a message',
            time: '5 Hour'
        },
        {
            imageSource: require('../../assets/images/f4.png'),
            title: 'Shane Martinize',
            subTitle: 'Sent you a message',
            time: '2 Day'
        },
    ]

    return (
        <Screen style={styles.screen}>

            {/* NavBar */}
            <View style={styles.navContainer}>
                <Text style={{ fontSize: RFPercentage(2.6), fontWeight: '700', color: Colors.black, position: 'absolute', left: 0 }}>
                    Notifications
                </Text>
                <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 0 }}>
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.9), fontWeight: Platform.OS == 'android' ? 'bold' : '700' }}>
                        Mark all as read
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Body */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Cart */}
                    {carData.map((item, i) => (
                        <View key={i} style={{ marginTop: i == 0 ? RFPercentage(5) : RFPercentage(2), width: '100%', }}>
                            <NotificationsCard onPressCard={item.onPress} imageSource={item.imageSource} Title={item.title} subTitle={item.subTitle} time={item.time} />
                        </View>
                    ))}

                    <View style={{ marginBottom: RFPercentage(15) }} />
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
    navContainer: {
        marginTop: RFPercentage(5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default NotificationsScreen;