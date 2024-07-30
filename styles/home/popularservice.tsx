import { StyleSheet } from 'react-native'
import { Colors } from './../../constants/Colors'

export const styles = StyleSheet.create({
    headContainer: {
      paddingLeft: 20,
      marginBottom:10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:20,
    },
    title: {
      fontFamily: 'outfit-bold',
      fontSize:20,
    },
    titleView: {
        color:Colors.PRIMARY, 
        fontFamily:'outfit-medium', 
        paddingTop:20,
        paddingRight:20
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    errorText: {
      fontSize: 16,
      color: Colors.GRAY,
      textAlign: 'center',
    },
    noContentText: {
      fontSize: 16,
      color: Colors.GRAY,
      textAlign: 'center',
      marginTop: 20,
    },
  })