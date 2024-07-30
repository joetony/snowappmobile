import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    title: {
      fontFamily: 'outfit-bold',
      fontSize: 30,
    },
    SearchBar: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 10,
      marginVertical: 10,
      marginTop: 15,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: Colors.PRIMARY,
    },
    separator: {
      display: 'flex',
      alignContent: 'center',
      width: '100%',
      height: 1,
      backgroundColor: Colors.PRIMARY,
      marginVertical: 20,
    },
  });