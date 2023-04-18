import React, {useState, useEffect} from 'react';
import Icon2 from 'react-native-vector-icons/Ionicons';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

export function ExercisesScreen ({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1C2B41'}}>
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.addContainer}
          onPress={() => navigation.push('MuscleGroups')}
        >
          <Icon2 name="add-circle" style={styles.addIcon}/>
          <Text style={styles.addText}>
            Add more Exercises
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addContainer: {
    height: '30%',
    width: 300,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 30,
    margin: 20,
  },  
  addIcon: {
    color: 'white',
    fontSize: 50,
    marginLeft: 5,
  },
  addText: {
    color: 'black',
    fontSize: 25,
  },
  container: {
    alignItems: 'center',
  },
});