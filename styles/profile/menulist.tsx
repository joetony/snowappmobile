import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export const styles = StyleSheet.create({
    mainContainer: {
        marginTop:50
      },
    subContainer: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        gap:2,
        flex:1,
        padding:10,
        borderWidth:1,
        borderColor: Colors.PRIMARY,
        borderRadius:15,
        margin:10,
        backgroundColor: 'white'
    },
    icon: {
        width: 50,
        height: 50
    },
    itemName: {
        fontFamily: 'outfit-medium',
        fontSize:16,
        paddingLeft:5,
        flex:1
    },
    companyMessage: {
        fontFamily: 'outfit',
        textAlign: 'center',
        fontSize:16,
        marginTop:50,
        color: Colors.GRAY
    },
  });