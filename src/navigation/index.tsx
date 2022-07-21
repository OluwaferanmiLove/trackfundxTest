import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Explore, MyProfile, Notifications, Profile, Repositories} from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../constants/colors';
import { hp, wp } from '../utils/responsive-dimension';
import { Octicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const HomeTab = createBottomTabNavigator();

function Home() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Repositories" component={Repositories} />
    </Stack.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <HomeTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grayText,
        headerShown: false,
      }}
    >
      <HomeTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Octicons name={'home'} size={wp(24)} color={color} />
          )
        }}
      />
      <HomeTab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ focused, color, size }) => (
            <Octicons name={focused ? 'bell-fill' : 'bell'} size={wp(24)} color={color} />
          )
        }}
      />
      <HomeTab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ focused, color, size }) => (
            <Octicons name={focused ? 'telescope-fill' : 'telescope'} size={wp(24)} color={color} />
          )
        }}
      />
      <HomeTab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused, color, size }) => (
            <Octicons name={focused ? 'person-fill' : 'person'} size={wp(24)} color={color} />
          )
        }}
      />
    </HomeTab.Navigator>
    </NavigationContainer>
  );
}
