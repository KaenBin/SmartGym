import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'react-native-elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen'
import HistoryScreen from './src/screens/HistoryScreen'
// import { assets } from './react-native.config'
import ExerciseScreen from './src/screens/ExercisesScreen'

import MuscleGroups from './src/screens/Exercises/MuscleGroups'
import Chest from './src/screens/Exercises/Chest/Chest'
import Back from './src/screens/Exercises/Back/Back'
import Biceps from './src/screens/Exercises/Biceps/Biceps'
import Triceps from './src/screens/Exercises/Triceps/Triceps'
import Shoulders from './src/screens/Exercises/Shoulders/Shoulders'
import Legs from './src/screens/Exercises/Legs/Legs'
import Abs from './src/screens/Exercises/Abs/Abs'
import Cardio from './src/screens/Exercises/Cardio/Cardio'

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

function Exercises() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ExerciseScreen" 
        component={ExerciseScreen} 
        options={{
          headerStyle: {backgroundColor: "#2F486D",},
          headerTintColor: 'white',
          headerTitle: 'MY EXERCISES',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="MuscleGroups"
        component={MuscleGroups}
        options={{
          headerStyle: {backgroundColor: "#2F486D",},
          headerTintColor: 'white',
          headerTitle: 'Choose the muscle groups',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '100', fontSize: 20,}
        }}
      />
      <Stack.Screen
        name="Chest"
        component={Chest}
        options={{
          headerStyle: {backgroundColor: "#2F486D",},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '100', fontSize: 20,}
        }}
      />
      <Stack.Screen
        name="Back"
        component={Back}
        options={{
          headerStyle: {backgroundColor: "#2F486D",},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '100', fontSize: 20,}
        }}
      />
      <Stack.Screen
        name="Biceps"
        component={Biceps}
        options={{
          headerStyle: {backgroundColor: "#2F486D",},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '100', fontSize: 20,}
        }}
      />
      <Stack.Screen
        name="Triceps"
        component={Triceps}
        options={{
          headerStyle: {backgroundColor: "#2F486D",},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '100', fontSize: 20,}
        }}
      />
      <Stack.Screen
        name="Shoulders"
        component={Shoulders}
        options={{
          headerStyle: {backgroundColor: "#2F486D",},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '100', fontSize: 20,}
        }}
      />
      <Stack.Screen
        name="Legs"
        component={Legs}
        options={{
          headerStyle: {backgroundColor: "#2F486D",},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '100', fontSize: 20,}
        }}
      />
      <Stack.Screen
        name="Abs"
        component={Abs}
        options={{
          headerStyle: {backgroundColor: "#2F486D",},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '100', fontSize: 20,}
        }}
      />
      <Stack.Screen
        name="Cardio"
        component={Cardio}
        options={{
          headerStyle: {backgroundColor: "#2F486D",},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '100', fontSize: 20,}
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ headerShown: false }}
              />
            <Stack.Screen 
              name="HistoryScreen" 
              component={HistoryScreen}
              options={{ 
                headerStyle: {backgroundColor: "#2F486D",},
                headerTintColor: 'white',
                headerTitle: 'TRAINING HISTORY',
                headerTitleAlign: 'center',
                // headerBackImageSource: {uri: './assets/icon.png'}
              }}
              />
            <Stack.Screen 
              name="Exercises" 
              component={Exercises}
              options={{ headerShown: false }}
              // options={{ 
              //   headerStyle: {backgroundColor: "#2F486D",},
              //   headerTintColor: 'white',
              //   headerTitle: 'MY EXERCISES',
              //   headerTitleAlign: 'center',
              //   // headerBackImageSource: {uri: './assets/icon.png'}
              // }}
              />
          </Stack.Navigator>
          <StatusBar />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
