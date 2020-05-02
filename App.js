import React from 'react';
import Home from './screens/home';
import Help from './screens/help';
import About from './screens/about';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <Home/>
  );
}

function AboutScreen() {
  return (
    <About/>
  );
}

function HelpScreen(){
  return (
    <Help/>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-list-box' 
                : 'ios-list';
            } else if (route.name === 'About') {
              iconName = focused 
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if(route.name === 'Help') {
              iconName = focused
                ? 'ios-help-circle'
                : 'ios-help-circle-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'deepskyblue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Help" component={HelpScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
