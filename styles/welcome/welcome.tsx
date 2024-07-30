import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    height: "100%",
  },
  information: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    marginTop:-30,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  dotStyle: {
    backgroundColor: "#C6C7CC",
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDotStyle: {
    backgroundColor: "#FF9800",
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: hp("3.5%"),
    textAlign: "center",
    color: "#fff",
    marginTop: 30,
    marginBottom:30
  },
  description: {
    fontSize: hp("2.5%"),
    color: "#fff",
    textAlign: "center",
  },
  welcomeButtonStyle:{
    backgroundColor: "#FF9800",
    width: responsiveWidth(88),
    height: responsiveHeight(5.5),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom:50
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20
  },
});