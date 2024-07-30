import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
    
  },
  userImage: {
    width: 150, 
    height: 150,
    borderRadius: 99,
  },
  userName: {
    fontFamily:'outfit-bold',
    fontSize:20,
    color:'#fff'
  },
  userEmail: {
    fontFamily:'outfit',
    fontSize:16,
    color:'#fff'
  },
});