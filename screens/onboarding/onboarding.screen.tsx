import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "@/styles/onboarding/onboard";
import { router } from "expo-router";

export default function OnBoardingScreen() {

  return (
    <View>
      <View style={styles.firstContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/onboarding/onboardingImage2.png")}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={[styles.titleText, { fontFamily: "outfit-bold" }]}>
            Snow Service Pro
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => router.push('/welcome.intro')}
        >
          <Text style={[styles.buttonText, { fontFamily: "outfit-bold" }]}>
            Getting Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}