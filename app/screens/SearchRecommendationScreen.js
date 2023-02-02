import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function SearchRecommendationScreen(props) {

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Search Here",
            placeholderAtCenter: false,
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const leftColData = [
        {
            imageSource: require('../../assets/images/col11.png'),
            height: RFPercentage(28),
            title: 'The Iron Man'
        },
        {
            imageSource: require('../../assets/images/col2.png'),
            height: RFPercentage(40),
            title: 'Black Hawk'
        },
        {
            imageSource: require('../../assets/images/col31.png'),
            height: RFPercentage(26),
            title: 'Mickey'
        },

    ]
    const rightColData = [
        {
            imageSource: require('../../assets/images/col41.png'),
            height: RFPercentage(40),
            title: 'The Iron Man'
        },
        {
            imageSource: require('../../assets/images/col5.png'),
            height: RFPercentage(30),
            title: 'Speedy Up'
        },
        {
            imageSource: require('../../assets/images/col6.png'),
            height: RFPercentage(26),
            title: 'Mickey'
        },

    ]


    return (
        <Screen style={styles.screen}>

            {/* Input Field */}
            <View style={styles.inputFieldContainer}>
                {inputField.map((item, i) => (
                    <View key={i} style={{ marginLeft: RFPercentage(0.8) }} >
                        <InputField
                            placeholder={item.placeholder}
                            backgroundColor={Colors.white}
                            borderWidth={RFPercentage(0.1)}
                            placeholderAtCenter={item.placeholderAtCenter}
                            borderColor={Colors.white}
                            leftIconName={"search"}
                            height={RFPercentage(6.9)}
                            borderRadius={RFPercentage(1)}
                            fontSize={RFPercentage(2)}
                            handleFeild={(text) => handleChange(text, i)}
                            value={item.value}
                            width={"100%"}
                        />
                    </View>
                ))}
            </View>

            {/* Tag Line */}
            <View style={styles.tagLineContainer} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2) }} >
                    What are People talking about
                </Text>
            </View>

            {/* Scroll starts */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Cart */}
                    <View style={styles.cartContainer} >
                        {/* Left Row */}
                        <View style={{ marginRight: RFPercentage(2), width: '50%', justifyContent: 'center', alignItems: 'center' }} >
                            {leftColData.map((item, i) => (
                                <TouchableOpacity activeOpacity={0.8} key={i} style={{ width: '100%' }}>
                                    <ImageBackground style={{ marginTop: !i == 0 ? RFPercentage(2) : RFPercentage(0), borderRadius: RFPercentage(1), overflow: 'hidden', width: '100%', height: item.height }} source={item.imageSource} >
                                        <View style={styles.emptyLayer} />
                                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2), position: 'absolute', bottom: RFPercentage(2), left: RFPercentage(2) }} >
                                            {item.title}
                                        </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            ))}
                        </View>
                        {/* Right Row */}
                        <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }} >
                            {rightColData.map((item, i) => (
                                <TouchableOpacity activeOpacity={0.8} key={i} style={{ width: '100%' }}>
                                    <ImageBackground key={i} style={{ marginTop: !i == 0 ? RFPercentage(2) : RFPercentage(0), borderRadius: RFPercentage(1), overflow: 'hidden', width: '100%', height: item.height }} source={item.imageSource} >
                                        <View style={styles.emptyLayer} />
                                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2), position: 'absolute', bottom: RFPercentage(2), left: RFPercentage(2) }} >
                                            {item.title}
                                        </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View style={{ marginBottom: RFPercentage(10) }} />
                </View>
            </ScrollView>

            {/* Bottom Tab */}
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
    inputFieldContainer: {
        marginTop: RFPercentage(4),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tagLineContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginTop: RFPercentage(2)
    },
    cartContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginTop: RFPercentage(3)
    },
    emptyLayer: {
        borderRadius: RFPercentage(1),
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.2)"
    },
})

export default SearchRecommendationScreen;