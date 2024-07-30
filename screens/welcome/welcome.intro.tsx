import { View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { router } from "expo-router";
import { styles } from "@/styles/welcome/welcome";
import { onboardingSwiperDataType } from "@/types/global";
import { onboardingSwiperData } from "@/constants/constants";


export default function WelcomeIntroScreen() {

  const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
      <View style={styles.container}>
        <Image
          source={item.image}
          style={{ alignSelf: "center" }}
        />
        <View style={styles.information}>
          <Text style={[styles.title, { fontFamily: "outfit-bold" }]}>
            {item.title}
          </Text>
          <Text
            style={[
              styles.description,
              { fontFamily: "outfit-bold" },
            ]}
          >
            {item.description}
          </Text>
        </View>
      </View>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={onboardingSwiperData}
      onDone={() => {
        router.push("/home");
      }}
      onSkip={() => {
        router.push("/home");
      }}
      renderNextButton={() => (
        <View style={styles.welcomeButtonStyle}>
          <Text
            style={[styles.buttonText, { fontFamily: "outfit-bold" }]}
          >
            Next
          </Text>
        </View>
      )}
      renderDoneButton={() => (
        <View style={styles.welcomeButtonStyle}>
          <Text
            style={[styles.buttonText, { fontFamily: "outfit-bold" }]}
          >
            Getting Started
          </Text>
        </View>
      )}
      showSkipButton={false}
      dotStyle={styles.dotStyle}
      bottomButton={true}
      activeDotStyle={styles.activeDotStyle}
    />
  );
}