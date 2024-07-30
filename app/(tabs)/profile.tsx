import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import UserIntro from '@/components/profile/user.intro'
import MenuList from '@/components/profile/menu.list'
import { Colors } from '@/constants/Colors'


export default function profile() {
  return (
    <View style={{
      padding:30, backgroundColor: Colors.PRIMARY,  height:'100%', }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:25,
        color:'#fff'
        }}>Profile</Text>
        {/* User Information */}
        <UserIntro/>
        {/* Menu List */}
        <MenuList/>
    </View>
  )
}