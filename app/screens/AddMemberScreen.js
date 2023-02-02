import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import Contacts from '../components/common/Contacts';
import InputField from './../components/common/InputField';
import CheckBoxWithTitle from '../components/common/CheckBoxWithTitle';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function AddMemberScreen(props) {

    const [tick, setTick] = useState(false);

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

    const contactsCartData = [
        {
            imageSource: require('../../assets/images/f1.png'),
            title: 'Robert Fox',
            time: '5 min ago'
        },
        {
            imageSource: require('../../assets/images/f2.png'),
            title: 'Jacob Jones',
            time: '5 min ago'
        },
        {
            imageSource: require('../../assets/images/f3.png'),
            title: 'Annete Black',
            time: '5 min ago'
        },
        {
            imageSource: require('../../assets/images/f4.png'),
            title: 'Jhones',
            time: '5 min ago'
        },
    ]

    const toggleButtons = [
        {
            title: 'Marvel'
        },
        {
            title: 'Chelsea'
        },
        {
            title: 'Stocks'
        },
        {
            title: 'Chefs'
        },
    ]

    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <View style={styles.navContainer} >
                <TouchableOpacity onPress={() => props.navigation.navigate('HomeScreen')} activeOpacity={0.6}>
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.2) }} color={Colors.darkBlack} />
                </TouchableOpacity>
                {/* Button */}
                <TouchableOpacity activeOpacity={0.8} style={styles.addToButton} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2) }} >
                        + Add to
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Scroll starts */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={styles.headingContainer} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.4), fontWeight: Platform.OS == 'android' ? 'bold' : '700' }} >
                            Recent Contacts
                        </Text>
                    </View>

                    {/* Contacts */}
                    <View style={{ marginTop: RFPercentage(0.5), width: '100%' }} >
                        {contactsCartData.map((item, i) => (
                            <Contacts key={i} imageSource={item.imageSource} title={item.title} time={item.time} />
                        ))}
                    </View>

                    <View style={styles.headingContainer} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.4), fontWeight: Platform.OS == 'android' ? 'bold' : '700' }} >
                            Subjects
                        </Text>
                    </View>

                    {/* Grey Box */}
                    <View style={styles.greyContainer} >

                        {/* Buttons */}
                        <View style={styles.buttonsContainer} >
                            {toggleButtons.map((item, i) => (
                                <TouchableOpacity key={i} activeOpacity={0.6} style={{ marginLeft: !i == 0 ? RFPercentage(1) : RFPercentage(-1), backgroundColor: Colors.primary, borderRadius: RFPercentage(1), width: RFPercentage(11), height: RFPercentage(5), justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2) }} >
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Input Field */}
                        <View style={{ marginTop: RFPercentage(2.5), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                            {inputField.map((item, i) => (
                                <View key={i} style={{ marginLeft: RFPercentage(0.8) }} >
                                    <InputField
                                        placeholder={item.placeholder}
                                        backgroundColor={Colors.white}
                                        borderWidth={RFPercentage(0.1)}
                                        placeholderAtCenter={item.placeholderAtCenter}
                                        borderColor={Colors.white}
                                        height={RFPercentage(6)}
                                        borderRadius={RFPercentage(6)}
                                        fontSize={RFPercentage(2)}
                                        handleFeild={(text) => handleChange(text, i)}
                                        value={item.value}
                                        width={"100%"}
                                    />
                                </View>
                            ))}
                        </View>

                        {/* Check Box */}
                        {toggleButtons.map((item, i) => (
                            <CheckBoxWithTitle key={i} title={item.title} />
                        ))}
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
    navContainer: {
        marginTop: RFPercentage(3),
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    addToButton: {
        width: RFPercentage(17),
        height: RFPercentage(5),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: RFPercentage(0),
        backgroundColor: Colors.primary,
        borderRadius: RFPercentage(3)
    },
    headingContainer: {
        marginTop: RFPercentage(4),
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    greyContainer: {
        width: '90%',
        height: RFPercentage(45),
        borderRadius: RFPercentage(2),
        backgroundColor: '#EEEEEE',
        marginTop: RFPercentage(2)
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: RFPercentage(2)
    }
})

export default AddMemberScreen;