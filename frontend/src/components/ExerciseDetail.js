import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import client from '../api/client';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from './FakeData';
const { width, height } = Dimensions.get('window');

const ExerciseDetail = ({ route }) => {
    const [exercise, setExercise] = useState([])
    const name = route.params.item;

    const getSingle = async (name) => {
        try {
            return await client.get(`/MyExercise/${name}`).then((response) => {return response})
        } catch (error) {
            console.log('error while getting exercise', error)
        }
    }

    const getImage = (id) => {
        return images.at(id).image
    }

    const fetchPost = async (name) => {
        const result = await getSingle(name)
        setExercise(result.data)
    }

    useEffect(() => {
        fetchPost(name)
    }, [])
        
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{width: '100%'}}>
                <Text style={styles.nameStyle}> {exercise.name} </Text>
                <Image style={styles.imageStyle} source={getImage(exercise.id - 1)}/>
                <Text style={styles.descStyle}> {exercise.desc} </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ExerciseDetail

const styles = StyleSheet.create({
    
    nameStyle: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20,
        height: 'auto',
    }, 
    container: {
        alignSelf: 'center',
        width: '90%',
        height: '100%',
        backgroundColor: '#E8E8E8',
    },
    descStyle: {
        fontSize: 20,
        padding: 20,
        height: 'auto',
    },
    imageStyle: {
        alignSelf: 'center',
        width: Math.floor(width * 0.8),
        height: Math.floor(height * 0.4),
    },
})