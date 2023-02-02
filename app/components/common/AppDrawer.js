import React, { useState } from "react";
import { Platform, Text, TouchableOpacity, View, Image, ScrollView, ImageBackground } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../../config/Colors";

function AppDrawer({ navigation }) {
    const items = [
        {
            id: 0,
            label: "Bookmarks",
            // path: "ProfileScreen"
        },
        {
            id: 1,
            label: "History",
            // path: "MyChannelScreen"
        },
        {
            id: 3,
            label: "History",
            // path: "NotificationsScreen"
        },
        {
            id: 4,
            label: "Settings",
            // path: "AdvertisementScreen"
        },
        {
            id: 5,
            label: "Messages",
            // path: "HomeScreen"
        },
        {
            id: 6,
            label: "Notification",
            path: "NotificationsScreen"
        },

    ]

    return (
        <View style={{ flex: 1, width: '100%', position: 'absolute' }}  >

            <ImageBackground style={{ width: '100%', height: RFPercentage(28), justifyContent: 'center', alignItems: 'center' }} source={require('../../../assets/images/top2.png')} >
                <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: RFPercentage(2) }}>
                    <TouchableOpacity activeOpacity={0.8} >
                        <Image style={{ width: RFPercentage(15), height: RFPercentage(15) }} source={require('../../../assets/images/profile.png')} />
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', marginTop: RFPercentage(1.5), color: Colors.white, fontWeight: 'bold' }} >
                        Robert C
                    </Text>
                    <Text style={{ alignSelf: 'center', marginTop: RFPercentage(0.5), color: '#F8DCDC' }} >
                        abc@mail.com
                    </Text>
                </View>
            </ImageBackground>

            <ScrollView style={{ flex: 1, width: '100%' }} >

                {items.map((item, index) => (
                    <View key={index} style={{ marginTop: index === 0 ? RFPercentage(4) : RFPercentage(5), justifyContent: 'center', alignItems: "center", flexDirection: 'row' }} >
                        <Image style={{ width: item.width, height: item.height }} source={item.icon} />
                        <View style={{ alignItems: "center", width: "70%" }} >
                            <TouchableOpacity activeOpacity={0.7} onPress={() => {
                                navigation.navigate(item.path)
                            }} style={{ alignSelf: "flex-start", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                                <Text style={{ marginLeft: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2.2) }} >{item.label}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                {/* Logout */}
                <View style={{ marginLeft: RFPercentage(0.6), marginTop: RFPercentage(3.3), justifyContent: 'center', alignItems: "center", flexDirection: 'row' }} >
                    <View style={{ alignItems: "center", width: "70%" }} >
                        <TouchableOpacity onPress={() => { navigation.navigate('RegisterScreen') }} activeOpacity={0.7} style={{ alignSelf: "flex-start", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ marginLeft: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2.2) }} >
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </View> */}
            </ScrollView>

        </View >
    );
}


export default AppDrawer;