import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Auth0Provider} from 'react-native-auth0';
import config from './../auth0-configuration';
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color= {Colors.PRIMARY}/>
      </View>
    );
  }

  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="welcome.intro" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="categorylist/[category]" />
        <Stack.Screen name="servicedetail/[serviced]" />
      </Stack>
    </Auth0Provider>   
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
