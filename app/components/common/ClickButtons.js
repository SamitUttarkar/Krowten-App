import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//config
import Colors from '../../config/Colors';

function ClickButtons(props) {

    const [color, setColor] = useState('0');

    return (
        <View style={{ marginTop: RFPercentage(2), width: '85%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
            <TouchableOpacity onPress={() => setColor('1')} activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', position: 'absolute', left: 0 }} >
                <FontAwesome name="heart" style={{ fontSize: RFPercentage(2) }} color={color == '1' ? Colors.pink : Colors.black} />
                <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(2), color: color == '1' ? Colors.pink : Colors.black }} >
                    Liked
                </Text>
            </TouchableOpacity>
            <View style={{ right: RFPercentage(3), width: RFPercentage(0.1), height: RFPercentage(7), backgroundColor: Colors.darkBlack }} />

            <TouchableOpacity onPress={() => setColor('2')} activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                <MaterialCommunityIcons name="comment" style={{ fontSize: RFPercentage(2) }} color={color == '2' ? Colors.pink : Colors.black} />
                <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(2), color: color == '2' ? Colors.pink : Colors.black }} >
                    Comment
                </Text>
            </TouchableOpacity>
            <View style={{ left: RFPercentage(3), width: RFPercentage(0.1), height: RFPercentage(7), backgroundColor: Colors.darkBlack }} />

            <TouchableOpacity onPress={() => setColor('3')} activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', position: 'absolute', right: 0 }} >
                <Ionicons name="share-social-outline" style={{ fontSize: RFPercentage(2) }} color={color == '3' ? Colors.pink : Colors.black} />
                <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(2), color: color == '3' ? Colors.pink : Colors.black }} >
                    Share
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default ClickButtons;