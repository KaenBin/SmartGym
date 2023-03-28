import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './src/screens/utils';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { assets } from './react-native.config'

import { SignInScreen, SplashScreen, HomeScreen, HistoryScreen, ExercisesScreen, GymScreen } from './src/screens';

import MuscleGroups from './src/screens/Exercises/MuscleGroups'
import Chest from './src/screens/Exercises/Chest/Chest'
import Back from './src/screens/Exercises/Back/Back'
import Biceps from './src/screens/Exercises/Biceps/Biceps'
import Triceps from './src/screens/Exercises/Triceps/Triceps'
import Shoulders from './src/screens/Exercises/Shoulders/Shoulders'
import Legs from './src/screens/Exercises/Legs/Legs'
import Abs from './src/screens/Exercises/Abs/Abs'
import Cardio from './src/screens/Exercises/Cardio/Cardio'
import { AsyncStorage } from 'react-native';


const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

function Exercises() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExercisesScreen"
        component={ExercisesScreen}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitle: 'MY EXERCISES',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="MuscleGroups"
        component={MuscleGroups}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitle: 'Choose the muscle groups',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '100', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Chest"
        component={Chest}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '100', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Back"
        component={Back}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '100', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Biceps"
        component={Biceps}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '100', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Triceps"
        component={Triceps}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '100', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Shoulders"
        component={Shoulders}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '100', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Legs"
        component={Legs}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '100', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Abs"
        component={Abs}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '100', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Cardio"
        component={Cardio}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '100', fontSize: 20, }
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          if (action.token) {
            AsyncStorage.setItem('userToken', action.token);
          }
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          AsyncStorage.removeItem('userToken');
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={authContext}>
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator>
              {state.isLoading ? (
                // We haven't finished checking for the token yet
                <Stack.Screen name="Splash" component={SplashScreen} />
              ) : state.userToken == null ? (
                // No token found, user isn't signed in
                <Stack.Screen
                  name="SignIn"
                  component={SignInScreen}
                  options={{
                    title: 'Sign in',
                    headerShown: false,
                    // When logging out, a pop animation feels intuitive
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                  }}
                />
              ) : (
                // User is signed in
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                options={{ headerShown: false }}
                />
              )}
              <Stack.Screen
              name="HistoryScreen"
              component={HistoryScreen}
              options={{
                headerStyle: { backgroundColor: "#2F486D", },
                headerTintColor: 'white',
                headerTitle: 'TRAINING HISTORY',
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="Exercises"
              component={Exercises}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GymScreen"
              component={GymScreen}
              options={{
                headerStyle: { backgroundColor: "#2F486D", },
                headerTintColor: 'white',
                headerTitle: 'GYM INFORMATION',
                headerTitleAlign: 'center',
              }}
            />
            </Stack.Navigator>
            <StatusBar />
          </NavigationContainer>
        </ThemeProvider>
      </AuthContext.Provider>
    </SafeAreaProvider>
  )
}
