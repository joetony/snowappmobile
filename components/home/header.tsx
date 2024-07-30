import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import { Colors } from '@/constants/Colors';

const Header: React.FC = () => {
  const { authorize, user, getCredentials } = useAuth0();

  const handleLogin = async () => {
    console.log('Iniciando proceso de login');
    try {
      const authResult = await authorize();
     
      authorize({
        scope: 'openid profile email',
        audience: 'https://dev-nbzq4pzmfmk2sgkw.us.auth0.com', // Reemplaza con tu dominio real
        redirectUrl: 'exp://192.168.1.118:8081'
      });
      console.log('Resultado de authorize:', authResult);

      if (authResult) {
        const credentials = await getCredentials();
        console.log('Credenciales obtenidas:', credentials);
        // Aquí puedes manejar las credenciales como sea necesario
      } else {
        console.log('No se recibieron resultados de authorize');
      }
    } catch (error) {
      console.error('Error en el login', error);
      Alert.alert('Error de inicio de sesión', 'No se pudo iniciar sesión. Por favor, intenta de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {user ? (
          <View style={styles.userContainer}>
            {user.picture && (
              <Image source={{ uri: user.picture }} style={styles.userImage} />
            )}
            <View>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.userName}>{user.name}</Text>
            </View>
          </View>
        ) : (
          <Button 
            title="Login" 
            onPress={handleLogin} 
            color={Colors.PRIMARY}
          />
        )}
      </View>
    </View>
  );
};

// ... (estilos y exportación permanecen igual)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.PRIMARY, // Ajusta el color según sea necesario
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:50
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  welcomeText: {
    color: '#fff',
  },
  userName: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Header;