import { StyleSheet } from "react-native";
import { Colors } from './../../constants/Colors'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    headContainer: {
        width: wp('80%'),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'outfit-bold',
        fontSize:20,
        paddingLeft:20,
        paddingTop:10,
        marginBottom:5
    },
    titleView: {
        color:Colors.PRIMARY, 
        fontFamily:'outfit-medium', 
        paddingTop:20,
        paddingRight:20
    },
    flatList:{
        paddingLeft:20,
    },
    image:{
        width:wp('80%'),
        height:hp('25%'),
        borderRadius:15,
        marginRight:15
    },
    itemContainer: {
        alignItems: 'center',
        marginRight: 16,
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'outfit-medium',
        marginTop: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
  })