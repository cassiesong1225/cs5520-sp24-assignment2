import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StartScreen from './Screens/Start';
import AddAnActivity from './Screens/AddAnActivity';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllActivities from './Screens/AllActivities';
import BottomTabNavigator from './Components/BottomTab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="AllActivities" component={BottomTabNavigator} options={
            { headerShown: false }
          } />
          <Stack.Screen name="AddAnActivity" component={AddAnActivity} options={
            { headerBackTitleVisible: false, }
          } />
         </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
