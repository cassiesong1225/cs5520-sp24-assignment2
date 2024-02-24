import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StartScreen from './Screens/Start';
import AddAnActivity from './Screens/AddAnActivity';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './Components/BottomTab';
import { ActivitiesListProvider } from './Components/ActivitiesListContext';
import { colors } from './StyleHelper';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ActivitiesListProvider>
    <NavigationContainer>
        <Stack.Navigator
        >
          <Stack.Screen name="Start" component={StartScreen}
            options={{ headerShown: false }} />
          <Stack.Screen name="AllActivities" component={BottomTabNavigator}
            options={{ headerShown: false }}
           />
          <Stack.Screen name="AddAnActivity" component={AddAnActivity}
                        options={
                          {
                            headerBackTitleVisible: false,
                            headerStyle: { backgroundColor: colors.darkpurple },
                            headerTintColor: 'white',
                          }
                        } />
                    </Stack.Navigator>
                    

                  </NavigationContainer>
                  </ActivitiesListProvider>
              );
            }


