import React from 'react'
import { Tabs, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors';
import { useAuth0 } from 'react-native-auth0';

export default function TabLayout() {

  const { clearSession } = useAuth0();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await clearSession();
      router.replace('/login');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor:Colors.PRIMARY
      }}>
      <Tabs.Screen name='home' 
      options={{
        tabBarLabel:'Home',
        tabBarIcon:({color})=> <Ionicons name="home" size={24} color={color}/>
        }}/>
      <Tabs.Screen name='explore' 
      options={{
        tabBarLabel:'Explore',
        tabBarIcon:({color})=> <Ionicons name="search" size={24} color={color}/>
        }}/>
      <Tabs.Screen name='profile'
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="people-circle" size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}