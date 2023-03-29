import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const MuscleGroups = ({ navigation }) => {
    return (
        <SafeAreaView style={{backgroundColor: 'white', marginBottom: 20,}}>
            <ScrollView contentContainerStyle={styles.container}>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                    //   onPress={addExercisesHandler}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Back/BarbellShrug.jpg')} />
                        <Text style={styles.textStyle}>
                            Barbell Shrug
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                    //   onPress={addExercisesHandler}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Back/BentOverRow.jpg')} />
                        <Text style={styles.textStyle}>
                            Bent Over Row
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                    //   onPress={addExercisesHandler}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Back/ChinUps.jpg')} />
                        <Text style={styles.textStyle}>
                            Chin Ups
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                    //   onPress={addExercisesHandler}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Back/DumbbellRow.jpg')} />
                        <Text style={styles.textStyle}>
                            Dumbbell Row
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                    //   onPress={addExercisesHandler}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Back/LatPullDown.jpg')} />
                        <Text style={styles.textStyle}>
                            Lat Pull Down
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                    //   onPress={addExercisesHandler}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Back/MachineRow.jpg')} />
                        <Text style={styles.textStyle}>
                            Machine Row 
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                    //   onPress={addExercisesHandler}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Back/PendlayRow.jpg')} />
                        <Text style={styles.textStyle}>
                            Pendlay Row
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                    //   onPress={addExercisesHandler}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Back/PullUps.jpg')} />
                        <Text style={styles.textStyle}>
                            Pull Ups
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                    //   onPress={addExercisesHandler}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Back/SeatedCableRow.jpg')} />
                        <Text style={styles.textStyle}>
                            Seated Cable Row
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                    //   onPress={addExercisesHandler}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Back/TBarRow.jpg')} />
                        <Text style={styles.textStyle}>
                            T Bar Row
                        </Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MuscleGroups;

const styles = StyleSheet.create({
    groupContainer: {
        flex: 1,
        height: 220,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 10,
    },
    textStyle: {
        color: 'black',
        fontSize: 23,
        textAlign: 'center',
    },
    container: {
        marginHorizontal: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    imageStyle: {
        height: '70%',
        width: '90%',
        alignSelf: 'center',
    },
    viewStyle: {
        flex: 2,
        flexDirection: 'row',
    }
});