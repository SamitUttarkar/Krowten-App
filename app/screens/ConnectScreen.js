import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';
import MyAppButton from '../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function ConnectScreen(props) {

    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <View style={styles.navContainer} >
                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', left: 0 }}>
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.2) }} color={Colors.darkBlack} />
                </TouchableOpacity>
                <Text style={{ color: Colors.darkBlack, fontSize: RFPercentage(2.8), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                    Connect
                </Text>
            </View>
            {/* Tag Line */}
            <View style={{ marginTop: RFPercentage(3.5), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                <Text style={{ fontSize: RFPercentage(2.2), color: Colors.darkBlack }}>
                    Connect with people around the world!
                </Text>
            </View>

            {/* Body Connect Image */}
            <TouchableOpacity activeOpacity={0.8} >
                <Image style={styles.bodyImage} source={require('../../assets/images/path.png')} />
            </TouchableOpacity>

            {/*Edit profile Button */}
            <View style={{ width: "100%", alignItems: "center", position: 'absolute', bottom: RFPercentage(8) }}>
                <MyAppButton
                    title="What's on your mind?"
                    padding={RFPercentage(1.4)}
                    // onPress={() => handleNavigation()}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1)}
                    width={"90%"}
                />
            </View>

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
        marginTop: RFPercentage(2.5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    bodyImage: {
        marginTop: RFPercentage(18),
        width: RFPercentage(36.2),
        height: RFPercentage(38.9)
    }
})

export default ConnectScreen;