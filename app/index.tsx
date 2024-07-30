/*import { Redirect } from "expo-router";
import { useAuth0 } from 'react-native-auth0';
import React from 'react';

export default function Index() {
  const { isLoading, user } = useAuth0();

  // Mostrar un indicador de carga mientras se verifica la autenticación
  if (isLoading) {
    return null; // Puedes mostrar un indicador de carga aquí si lo deseas
  }

  // Redirigir basado en el estado de autenticación del usuario
  if (!user) {
    return <Redirect href='/welcome.intro' />;
  }

  return <Redirect href='/home' />;
}*/

import { Redirect } from "expo-router";
import { useAuth0 } from 'react-native-auth0';

export default function Index() {
  /*const { user } = useAuth0();

  if (!user) {
    return <Redirect href='/login' />;
  }*/

  return <Redirect href='/welcome.intro'/>;
  //return <Redirect href='/home'/>;
}
