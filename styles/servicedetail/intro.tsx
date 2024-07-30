import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export const styles = StyleSheet.create({
    header: {
        position:'absolute',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding:20
      },
    image: {
        width: '100%',
        height: 340
    },
    infoContainer: {
        padding:20,
        marginTop:-20,
        backgroundColor:'#fff',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
    },
    title: {
        fontSize:26,
        fontFamily:'outfit-bold',
    },
  });