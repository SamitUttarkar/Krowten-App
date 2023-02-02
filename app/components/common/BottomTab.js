import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../../config/Colors';

function BottomTab({ props }) {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, width: "100%", height: RFPercentage(7), backgroundColor: Colors.white }}>
            <View style={{ width: "80%", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', }} >

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('HomeScreen')} >
                    <Image style={{ width: RFPercentage(3.4), height: RFPercentage(2.3) }} source={require('../../../assets/images/home.png')} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('SearchRecommendationScreen')} style={{ position: 'absolute', left: RFPercentage(11) }}>
                    <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2.5) }} source={require('../../../assets/images/search.png')} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('SpacesScreen')} style={{ position: 'absolute', left: RFPercentage(21) }}>
                    <Image style={{ width: RFPercentage(4.5), height: RFPercentage(2.8) }} source={require('../../../assets/images/group.png')} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('AddMemberScreen')} style={{ position: 'absolute', left: RFPercentage(32) }}>
                    <Image style={{ width: RFPercentage(3), height: RFPercentage(3.1) }} source={require('../../../assets/images/connect.png')} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('NotificationsScreen')} style={{ position: 'absolute', right: RFPercentage(1) }}>
                    <Image style={{ width: RFPercentage(2.3), height: RFPercentage(3.1) }} source={require('../../../assets/images/notification.png')} />
                </TouchableOpacity>

            </View>
        </View>
    );
}

export default BottomTab;