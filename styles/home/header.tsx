import { Platform, StyleSheet } from "react-native";
import { Colors } from './../../constants/Colors'

 export const styles = StyleSheet.create({
    container: {
      height:200,
      padding: 20,
      paddingTop: 40,
      backgroundColor: Colors.PRIMARY
    },
    subContainer:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10
    },
    userName:{
      fontSize:19,
      fontFamily: 'outfit-medium',
      color:'#fff'
    },
  })