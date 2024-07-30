import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  firstContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.PRIMARY,
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: hp("40%"),
  },
  titleWrapper: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  titleText: {
    fontSize: hp("4%"),
    textAlign: "center",
    color: "#fff",
  },
  buttonWrapper: {
    backgroundColor: "#FF9800",
    width: wp("92%"),
    paddingVertical: 18,
    borderRadius: 4,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20
  },
});