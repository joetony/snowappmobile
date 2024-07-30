import { Colors } from '@/constants/Colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    headContainer: {
        padding:10,
        margin:10,
        borderRadius:15,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        gap:20,
        alignItems: 'center',
    },
    image: {
        width:120,
        height:120,
        borderRadius:15,
    },
    infoContainer: {
        flex:1,
        gap:7,
    },
    infoContainerTitle:{
        fontFamily: 'outfit-bold',
        fontSize:20
    },
    itemContainerDescription: {
        fontFamily: 'outfit',
        color: Colors.GRAY,
        fontSize:15
            //flex:1
    },
})