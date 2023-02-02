import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../../config/Colors';

function Contacts({ imageSource, title, time }) {

    const [tick, setTick] = useState(false);

    return (
        <View style={{ marginTop: RFPercentage(1), width: '100%', backgroundColor: tick ? Colors.secondary : null, height: RFPercentage(9), justifyContent: 'center', alignItems: 'center' }} >
            <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }}>

                {/* DP Image */}
                <TouchableOpacity activeOpacity={0.5}>
                    <Image style={{ width: RFPercentage(6.9), height: RFPercentage(6.9) }} source={imageSource} />
                </TouchableOpacity>

                {/* Details */}
                <View style={{ marginLeft: RFPercentage(1.2) }}>
                    <Text style={{ color: Colors.black, fontWeight: '600', fontSize: RFPercentage(1.9) }}>
                        {title}
                    </Text>
                    <View style={{ marginTop: RFPercentage(0.1), flexDirection: 'row' }}>
                        <Text style={{ color: '#707070', fontSize: RFPercentage(1.6) }}>
                            {time}
                        </Text>
                    </View>
                </View>

                {/* Check Box */}
                <TouchableOpacity onPress={() => setTick(true)} activeOpacity={0.5} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(2.5), height: RFPercentage(2.5), borderRadius: RFPercentage(0.5), borderColor: tick ? Colors.primary : "#707070", borderWidth: RFPercentage(0.09), backgroundColor: Colors.lightWhite, position: 'absolute', right: 0 }}>
                    {tick ?
                        <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setTick(false)}>
                            <Image style={{ width: RFPercentage(1.2), height: RFPercentage(1) }} source={require('../../../assets/images/tick2.png')} />
                        </TouchableOpacity>
                        : null}
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Contacts;