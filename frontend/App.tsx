import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'react-native-elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen'
import HistoryScreen from './src/screens/HistoryScreen'
import { assets } from './react-native.config'

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function Home() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="HomeScreen" component={HomeScreen} />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
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
          </Stack.Navigator>
          <StatusBar />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
