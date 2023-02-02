import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';

//components
import ClickButtons from './../components/common/ClickButtons';
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {

    const cartData = [
        {
            thumbnail: require('../../assets/images/cart1.png'),
            dpSource: require('../../assets/images/f7.png'),
            mainTitle: 'Annete Black',
            subTitle: 'Charleston West Virginia',
            firstIcon: 'heart',
            firstTitle: ''
        },
        {
            thumbnail: require('../../assets/images/cart2.png'),
            dpSource: require('../../assets/images/f3.png'),
            mainTitle: 'Jacob Jons',
            subTitle: 'Eplinos, Texas'
        },
    ]

    const leftColData = [
        {
            imageSource: require('../../assets/images/col1.png'),
            height: RFPercentage(28),
            title: 'The Mickey Jan',
            movieName: 'The Mickey Jam'
        },
        {
            imageSource: require('../../assets/images/col2.png'),
            height: RFPercentage(40),
            title: 'Black Hawk',
            movieName: 'The Mangnizer'
        },
        {
            imageSource: require('../../assets/images/col3.png'),
            height: RFPercentage(26),
            title: 'Mickey',
            movieName: 'In your Arms'
        },

    ]
    const rightColData = [
        {
            imageSource: require('../../assets/images/col4.png'),
            height: RFPercentage(40),
            title: 'The Hawk Girl',
            movieName: 'The Hawk Girl'
        },
        {
            imageSource: require('../../assets/images/col5.png'),
            height: RFPercentage(30),
            title: 'Speedy Up',
            movieName: 'Spider Man No way Home'
        },
        {
            imageSource: require('../../assets/images/col6.png'),
            height: RFPercentage(26),
            title: 'Mickey',
            movieName: 'The Orange Pulp'
        },
    ]

    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <View style={styles.navContainer} >
                {/* Image */}
                <TouchableOpacity onPress={() => props.navigation.navigate("ProfileScreen")} activeOpacity={0.8} >
                    <ImageBackground style={{ width: RFPercentage(9), height: RFPercentage(9) }} source={require('../../assets/images/profile.png')} />
                </TouchableOpacity>
                <View style={{ marginLeft: RFPercentage(1.5) }} >
                    <Text style={{ fontSize: RFPercentage(2.3), color: Colors.darkBlack }}>
                        Hello,
                    </Text>
                    <Text style={{ fontSize: RFPercentage(2.3), color: Colors.black, fontWeight: Platform.OS == 'android' ? 'bold' : '700' }}>
                        Robert C.
                    </Text>
                </View>

                {/* Button */}
                <TouchableOpacity activeOpacity={0.8} style={{ width: RFPercentage(17), height: RFPercentage(5), justifyContent: 'center', alignItems: 'center', position: 'absolute', right: RFPercentage(8.5), backgroundColor: Colors.primary, borderRadius: RFPercentage(3) }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2) }} >
                        + Add Post
                    </Text>
                </TouchableOpacity>

                {/* Comment Image */}
                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0 }} >
                    <Image style={{ width: RFPercentage(7), height: RFPercentage(7) }} source={require('../../assets/images/comment.png')} />
                </TouchableOpacity>
            </View>

            {/* My Feed */}
            <View style={{ marginBottom: RFPercentage(1.2), marginTop: RFPercentage(6), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'android' ? 'bold' : '700' }} >
                    My Feed
                </Text>
                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0, top: RFPercentage(1) }} >
                    <Entypo name="dots-three-horizontal" style={{ fontSize: RFPercentage(2.2) }} color={Colors.black} />
                </TouchableOpacity>
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

                                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                                        <Text style={{ marginTop: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2.3), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                                            {item.movieName}
                                        </Text>
                                        <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0, top: RFPercentage(1) }} >
                                            <Entypo name="dots-three-horizontal" style={{ fontSize: RFPercentage(2.2) }} color={Colors.black} />
                                        </TouchableOpacity>
                                    </View>
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
                                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                                        <Text style={{ marginTop: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2.3), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                                            {item.movieName}
                                        </Text>
                                        <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0, top: RFPercentage(1) }} >
                                            <Entypo name="dots-three-horizontal" style={{ fontSize: RFPercentage(2.2) }} color={Colors.black} />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* cart2 */}
                    {cartData.map((item, i) => (
                        <View key={i} style={{ marginTop: i == 0 ? RFPercentage(2) : RFPercentage(3), width: '92%', height: RFPercentage(54), borderRadius: RFPercentage(3), backgroundColor: '#F4F4F4', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >

                            {/* Thumbnail */}
                            <TouchableOpacity activeOpacity={0.6} style={{ marginTop: RFPercentage(1.5) }} >
                                <ImageBackground style={{ overflow: 'hidden', borderRadius: RFPercentage(1.2), width: RFPercentage(50), height: RFPercentage(32) }} source={item.thumbnail} />
                            </TouchableOpacity>

                            {/* Details */}
                            <View style={{ marginTop: RFPercentage(2), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '93%' }} >
                                {/* Image */}
                                <TouchableOpacity activeOpacity={0.8} >
                                    <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={item.dpSource} />
                                </TouchableOpacity>
                                {/* Titles */}
                                <View style={{ marginLeft: RFPercentage(1.5) }} >
                                    <Text style={{ fontSize: RFPercentage(2.1), color: Colors.black, fontWeight: Platform.OS == 'android' ? 'bold' : '700' }}>
                                        {item.mainTitle}
                                    </Text>
                                    <Text style={{ marginTop: RFPercentage(0.4), fontSize: RFPercentage(1.7), color: Colors.darkBlack }}>
                                        {item.subTitle}
                                    </Text>
                                </View>
                                {/* Menue */}
                                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0, top: RFPercentage(1) }} >
                                    <Entypo name="dots-three-horizontal" style={{ fontSize: RFPercentage(2.2) }} color={Colors.black} />
                                </TouchableOpacity>
                            </View>

                            {/* Like/comment Buttons */}
                            <ClickButtons />
                        </View>
                    ))}
                    <View style={{ marginBottom: RFPercentage(12) }} />
                </View>
            </ScrollView>

            {/* Bottom Tab */}
            <BottomTab props={props} />
        </Screen >
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
        marginTop: RFPercentage(5),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%'
    },
    cartContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginTop: RFPercentage(3)
    }
})

export default HomeScreen;