import React, { useState, useEffect } from 'react';

// import Icon1 from 'react-native-vector-icons/FontAwesome5';
// import Icon2 from 'react-native-vector-icons/Ionicons'
// import Icon3 from 'react-native-vector-icons/Foundation'
// import Icon4 from 'react-native-vector-icons/FontAwesome'

import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export function GymScreen ({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#EFFEFF" }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={[styles.titleStyle, { alignSelf: 'center' }]}>
                    Room Information
                </Text>
                <View style={[styles.textRow, {margin: 2}]}>
                    <View style={styles.textBox}>
                        <Text style={styles.textStyle1}>
                            Temperature
                        </Text>
                        <Text style={styles.textStyle1}>
                            37°C
                        </Text>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.textStyle1}>
                            Moisture
                        </Text>
                        <Text style={styles.textStyle1}>
                            50%
                        </Text>
                    </View>
                </View>
                <View style={[styles.textRow, {margin: 2}]}>
                    <View style={styles.textBox}>
                        <Text style={styles.textStyle1}>
                            All facilities
                        </Text>
                        <Text style={styles.textStyle1}>
                            A1, A2,...
                        </Text>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.textStyle1}>
                            Available facilities
                        </Text>
                        <Text style={styles.textStyle1}>
                            B1, C2,...
                        </Text>
                    </View>
                </View>
                <Text style={styles.textStyle1}>
                    Users:
                </Text>
                <View style={styles.textBox}>
                    <Text style={styles.titleStyle}>
                        About Gym
                    </Text>
                    <View style={styles.textRow}>
                        <Text style={styles.textStyle2}>
                            Company name:
                        </Text>
                        <Text style={[styles.textStyle2, { color: '#555555', textAlign: 'right', }]}>
                            Group 03 - HCMUT
                        </Text>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={styles.textStyle2}>
                            Address:
                        </Text>
                        <Text style={[styles.textStyle2, { color: '#555555', textAlign: 'right', }]}>
                            Ly Thuong Kiet, HCMC
                        </Text>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={styles.textStyle2}>
                            Hotline:
                        </Text>
                        <Text style={[styles.textStyle2, { color: '#555555', textAlign: 'right', }]}>
                            012 3456 789
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <Text style={styles.textHCMUT}>
                <Text>powered by</Text>
                <Text style={{ fontWeight: "bold" }}> HCMUT</Text>
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        // marginHorizontal: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    imageStyle: {
        alignSelf: 'center',
        height: 150,
        width: "65%",
        margin: 25,
    },
    textBox: {
        flex: 1,
        // height: '70%',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#AFBCC4',
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 2,
        margin: 5,
    },
    textHCMUT: {
        alignSelf: 'center',
        color: '#1976D2',
    },
    textRow: {
        flex: 2,
        flexDirection: 'row',
        margin: 10,
    },
    textStyle1: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
    },
    textStyle2: {
        flex: 1,
        fontSize: 17,
    },
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    },
});