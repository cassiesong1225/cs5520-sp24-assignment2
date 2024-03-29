import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import AllActivities from '../Screens/AllActivities';
import SpecialActivities from '../Screens/SpecialActivities';
import { colors } from '../StyleHelper';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({  color, size }) => {
          let iconName;

          if (route.name === 'All Activities') {
            iconName = 'dollar';
          } else if (route.name === 'Special Activities') {
            iconName = 'exclamation';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
        backgroundColor: colors.darkpurple, 
        },
      })}
    >
      <Tab.Screen name="All Activities" component={AllActivities} />
      <Tab.Screen name="Special Activities" component={SpecialActivities} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
