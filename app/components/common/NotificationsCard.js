import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../Screen';
//screens
import Colors from '../../config/Colors';

function NotificationsCard({ imageSource, Title, subTitle, time, onPressCard = false }) {

    const [color, setColor] = useState(false);

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center" }}>

            <View style={{ justifyContent: 'center', width: '90%', height: color ? RFPercentage(18) : RFPercentage(14), backgroundColor: color ? Colors.secondary : '#EEEEEE', borderRadius: RFPercentage(2), alignSelf: 'center' }}>

                <TouchableOpacity onPress={() => setColor(true)} style={{ marginLeft: RFPercentage(3), flexDirection: 'row', width: '90%', justifyContent: 'flex-start', alignItems: 'center' }}>
                    {/* DP Image */}
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image style={{ width: RFPercentage(8), height: RFPercentage(8) }} source={imageSource} />
                    </TouchableOpacity>
                    {/* Details */}
                    <View style={{ marginLeft: RFPercentage(1.2) }}>
                        <Text style={{ color: Colors.black, fontWeight: '600', fontSize: RFPercentage(1.9) }}>
                            {Title}
                        </Text>
                        <View style={{ marginTop: RFPercentage(0.8), flexDirection: 'row' }}>
                            <Text style={{ color: '#707070', fontSize: RFPercentage(1.6) }}>
                                {subTitle}
                            </Text>
                        </View>
                    </View>
                    <Text style={{ color: "#707070", position: 'absolute', right: 0, fontSize: RFPercentage(1.7) }}>
                        {time}
                    </Text>
                </TouchableOpacity>

                {color ?
                    <View style={{ alignSelf: 'center', width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: RFPercentage(2) }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setColor(false)}>
                            <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={require('../../../assets/images/zip.png')} />
                        </TouchableOpacity>
                        <View style={{ marginLeft: RFPercentage(1.5) }} >
                            <Text>
                                dark-theme.zip
                            </Text>
                            <Text style={{ color: "#707070" }}>
                                1.2mb
                            </Text>
                        </View>
                    </View>
                    :
                    null
                }

            </View>

        </Screen>
    );
}

export default NotificationsCard;