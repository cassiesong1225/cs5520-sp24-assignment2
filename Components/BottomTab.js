import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// Import your screen components
import AllActivities from '../Screens/AllActivities';
import SpecialActivities from '../Screens/SpecialActivities';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'All Activities') {
            iconName = focused ? 'list-alt' : 'list'; // Icons can be changed according to your preference
          } else if (route.name === 'Special Activities') {
            iconName = focused ? 'star' : 'star-o'; // Icons can be changed according to your preference
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="All Activities" component={AllActivities} />
      <Tab.Screen name="Special Activities" component={SpecialActivities} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
