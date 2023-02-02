import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
import LoadingModal from './../components/common/LoadingMdal';

//config
import Colors from '../config/Colors';

function RegisterScreen(props) {

    const [indicator, showIndicator] = useState(false);

    const [activeButton, setActiveButton] = useState('1');

    const [tick, setTick] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Email Address",
            borderRightColor: Colors.lightGrey,
            borderTopColor: Colors.lightGrey,
            borderLeftColor: Colors.primary,
            borderBottomColor: Colors.lightGrey,
            leftImage: require('../../assets/images/mail.png'),
            value: "",
        },
        {
            placeholder: "Password",
            borderRightColor: Colors.lightGrey,
            borderTopColor: Colors.lightGrey,
            borderLeftColor: Colors.primary,
            borderBottomColor: Colors.lightGrey,
            leftImage: require('../../assets/images/lock.png'),
            secure: true,
            value: ""
        },

    ]);


    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        props.navigation.navigate("HomeDrawer")

        try {
            // API integration
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };

    return (


        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >

            <Screen style={styles.screen}>
                <LoadingModal show={indicator} />

                {/* Top Image */}
                <Image style={styles.topImage} source={require('../../assets/images/top.png')} />

                {/*Top Buttons */}
                <View style={styles.topButtonsContainer} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('1')} style={{ position: 'absolute', left: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: activeButton == '1' ? Colors.secondary : Colors.lightGrey, width: '50%', height: '100%' }} >
                        {activeButton == '1' ?
                            <View style={{ width: '100%', height: RFPercentage(0.6), position: 'absolute', top: 0, backgroundColor: Colors.primary }} />
                            :
                            null
                        }
                        <Text style={{ color: activeButton == '1' ? Colors.primary : Colors.darkGrey, fontSize: RFPercentage(2.1), fontWeight: Platform.OS == 'android' ? 'bold' : '700' }}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('2')} style={{ position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: activeButton == '2' ? Colors.secondary : Colors.lightGrey, width: '50%', height: '100%' }} >
                        {activeButton == '2' ?
                            <View style={{ width: '100%', height: RFPercentage(0.6), position: 'absolute', top: 0, backgroundColor: Colors.primary }} />
                            :
                            null
                        }
                        <Text style={{ color: activeButton == '2' ? Colors.primary : Colors.darkGrey, fontSize: RFPercentage(2.1), fontWeight: Platform.OS == 'android' ? 'bold' : '700' }}>
                            REGISTER
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Scroll starts */}
                <ScrollView style={{ flex: 1, width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        {activeButton == '1' ?
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                                {/* Heading */}
                                <View style={styles.heading} >
                                    <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '700' : 'bold', color: Colors.black }} >
                                        Welcome Back!
                                    </Text>
                                </View>

                                {/* Input fields */}
                                <View style={styles.inputFieldConatiner}>
                                    {inputField.map((item, i) => (
                                        <View key={i} style={{ marginTop: i === 0 ? RFPercentage(-2) : RFPercentage(0.6) }} >
                                            <InputField
                                                placeholder={item.placeholder}
                                                backgroundColor={Colors.lightGrey}
                                                leftImageSource={item.leftImage}
                                                borderWidth={RFPercentage(0.5)}
                                                borderColor={Colors.lightGrey}
                                                borderBottomColor={item.borderBottomColor}
                                                borderRightColor={item.borderRightColor}
                                                borderTopColor={item.borderTopColor}
                                                borderLeftColor={item.borderLeftColor}
                                                height={RFPercentage(8.3)}
                                                secure={item.secure}
                                                borderRadius={RFPercentage(1)}
                                                fontSize={RFPercentage(2)}
                                                handleFeild={(text) => handleChange(text, i)}
                                                value={item.value}
                                                width={"100%"}
                                            />
                                        </View>
                                    ))}
                                </View>

                                {/* Forget Remember */}
                                <View style={styles.forgetRememberContainer}>
                                    {/* Check Box */}
                                    <TouchableOpacity onPress={() => setTick(true)} activeOpacity={0.5} style={styles.checkBox}>
                                        {tick ?
                                            <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setTick(false)}>
                                                <Image style={{ width: RFPercentage(1.2), height: RFPercentage(1) }} source={require('../../assets/images/tick2.png')} />
                                            </TouchableOpacity>
                                            : null}
                                    </TouchableOpacity>
                                    <Text style={styles.rememberMe}>
                                        Remember Me
                                    </Text>
                                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 0, }}>
                                        <Text style={{ fontWeight: Platform.OS == 'android' ? 'bold' : '700', fontSize: RFPercentage(1.8), color: Colors.primary }}>
                                            Forget Password?
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Button */}
                                <View style={{ marginTop: RFPercentage(2), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                                    <MyAppButton
                                        title="Sign In"
                                        padding={RFPercentage(1.8)}
                                        onPress={() => handleLogin()}
                                        backgroundColor={Colors.primary}
                                        color={Colors.white}
                                        bold={false}
                                        borderRadius={RFPercentage(1)}
                                        width={"50%"}
                                    />
                                </View>

                                {/* Heading */}
                                <View style={styles.heading} >
                                    <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '700' : 'bold', color: Colors.black }} >
                                        Continue with Socials
                                    </Text>
                                </View>

                                <View style={styles.socialLinksContainer} >
                                    {/* google */}
                                    <TouchableOpacity activeOpacity={0.8} style={styles.google}>
                                        <FontAwesome name="google" style={{ fontSize: RFPercentage(3) }} color={Colors.white} />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8} style={styles.facebook}>
                                        <FontAwesome name="facebook-f" style={{ fontSize: RFPercentage(3) }} color={Colors.white} />
                                    </TouchableOpacity >
                                    <TouchableOpacity activeOpacity={0.8} style={styles.apple}>
                                        <FontAwesome name="apple" style={{ fontSize: RFPercentage(3) }} color={Colors.white} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginBottom: RFPercentage(5) }} />
                            </View>
                            :
                            null
                        }

                    </View>
                </ScrollView>
            </Screen>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.lightWhite
    },
    topImage: {
        width: RFPercentage(40),
        height: RFPercentage(40),
        marginTop: RFPercentage(2)
    },
    heading: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginTop: RFPercentage(3)
    },
    inputFieldConatiner: {
        marginTop: RFPercentage(3),
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },
    topButtonsContainer: {
        width: '100%',
        height: RFPercentage(8.2),
        backgroundColor: Colors.lightGrey,
        flexDirection: 'row'
    },
    forgetRememberContainer: {
        marginTop: RFPercentage(1.5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    checkBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: RFPercentage(2.5),
        height: RFPercentage(2.5),
        borderRadius: RFPercentage(0.5),
        borderColor: Colors.primary,
        borderWidth: RFPercentage(0.09),
        backgroundColor: Colors.white
    },
    rememberMe: {
        marginLeft: RFPercentage(1),
        fontSize: RFPercentage(1.8),
        color: '#242424'
    },
    dontHaveAnAccount: {
        position: "absolute",
        bottom: RFPercentage(4),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpText: {
        color: Colors.primary,
        fontSize: RFPercentage(2),
        fontWeight: '600',
        marginLeft: RFPercentage(2)
    },
    socialLinksContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: RFPercentage(2)
    },
    google: {
        position: 'absolute',
        left: 0,
        width: RFPercentage(16),
        height: RFPercentage(5.6),
        borderRadius: RFPercentage(1),
        backgroundColor: '#03a9f7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    facebook: {
        width: RFPercentage(16),
        height: RFPercentage(5.6),
        borderRadius: RFPercentage(1),
        backgroundColor: '#3b5999',
        justifyContent: 'center',
        alignItems: 'center'
    },
    apple: {
        position: 'absolute',
        right: 0,
        width: RFPercentage(16),
        height: RFPercentage(5.6),
        borderRadius: RFPercentage(1),
        backgroundColor: '#242424',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default RegisterScreen