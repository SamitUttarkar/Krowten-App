import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../../config/Colors';

function CheckBoxWithTitle({ title }) {

    const [tick, setTick] = useState(false);

    return (
        <View style={{ width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row', marginTop: RFPercentage(3) }} >
            <TouchableOpacity onPress={() => setTick(true)} activeOpacity={0.5} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(2.5), height: RFPercentage(2.5), borderRadius: RFPercentage(0.5), borderColor: tick ? Colors.primary : "#707070", borderWidth: RFPercentage(0.09), backgroundColor: '#EEEEEE' }}>
                {tick ?
                    <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setTick(false)}>
                        <Image style={{ width: RFPercentage(1.2), height: RFPercentage(1) }} source={require('../../../assets/images/tick2.png')} />
                    </TouchableOpacity>
                    : null}
            </TouchableOpacity>
            <Text style={{ color: tick ? Colors.primary : Colors.black, fontSize: RFPercentage(2.2), marginLeft: RFPercentage(1) }}>
                {title}
            </Text>
        </View >
    );
}



export default CheckBoxWithTitle