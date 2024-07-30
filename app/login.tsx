import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import { useRouter } from 'expo-router';

export default function Login() {
  const { authorize } = useAuth0();
  const router = useRouter();

  const onLogin = async () => {
    try {
      await authorize({
        scope: 'openid profile email',
        audience: 'https://YOUR_AUTH0_DOMAIN/api/v2/',
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <Button title="Login" onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});