import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import PodBookingScreen from './src/screens/PodBookingScreen';
import SupportScreen from './src/screens/SupportScreen';
import LearningScreen from './src/screens/LearningScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AppointmentsScreen from './src/screens/AppointmentsScreen';
import CounsellingRequestScreen from './src/screens/CounsellingRequestScreen';
import CrisisSupportScreen from './src/screens/CrisisSupportScreen';
import JournalingScreen from './src/screens/JournalingScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Support Stack Navigator
function SupportStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SupportMain" 
        component={SupportScreen} 
        options={{ title: 'Support' }}
      />
      <Stack.Screen 
        name="CounsellingRequest" 
        component={CounsellingRequestScreen}
        options={{ title: 'Request Counselling' }}
      />
      <Stack.Screen 
        name="CrisisSupport" 
        component={CrisisSupportScreen}
        options={{ title: 'Crisis Support' }}
      />
    </Stack.Navigator>
  );
}

// Pod Stack Navigator
function PodStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="PodBooking" 
        component={PodBookingScreen}
        options={{ title: 'Book a Pod' }}
      />
      <Stack.Screen 
        name="Appointments" 
        component={AppointmentsScreen}
        options={{ title: 'My Appointments' }}
      />
    </Stack.Navigator>
  );
}

// Learning Stack Navigator
function LearningStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="LearningMain" 
        component={LearningScreen}
        options={{ title: 'Learn & Train' }}
      />
      <Stack.Screen 
        name="Journaling" 
        component={JournalingScreen}
        options={{ title: 'Journal' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Pod') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Support') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (route.name === 'Learn') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4A90E2',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#4A90E2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Pod" component={PodStack} />
        <Tab.Screen name="Support" component={SupportStack} />
        <Tab.Screen name="Learn" component={LearningStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

