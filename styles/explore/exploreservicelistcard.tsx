import { StyleSheet } from 'react-native'
import { Colors } from './../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      padding: 15,
      backgroundColor: '#fff',
      borderRadius: 8,
      margin: 20,
      width: 400,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    imageContainer: {
      width: '100%',
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
      resizeMode: 'cover',
    },
    information: {
      marginTop: 10,
    },
    title: {
      fontSize: 16,
      fontFamily: 'outfit-bold',
      marginBottom: 5,
    },
    description: {
      fontSize: 12,
      color: Colors.GRAY,
    },
  });