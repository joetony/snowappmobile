import About from '@/components/service.detail/about';
import ActionButton from '@/components/service.detail/action.button';
import Intro from '@/components/service.detail/intro';
import { Colors } from '@/constants/Colors';
import { Service } from '@/types/global';
import { getImageUrl } from '@/utils/funtions';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';

export default function ServiceDetail() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { serviced } = useLocalSearchParams<{ serviced: string }>();

  useEffect(() => {
    fetchRecentServices();
  }, []);

  const fetchRecentServices = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<Service[]>('http://192.168.1.118:88/api/Service', {
        params: { limit: 10, sortBy: 'createdDate', order: 'desc' }
      });

      // Obtener URLs de imágenes
      const servicesWithImages = await Promise.all(
        response.data.map(async (service) => {
          const imageUrl = await getImageUrl(service.imageId);
          return { ...service, imageUrl }; // Incluye la URL de la imagen en el servicio
        })
      );

      setServices(servicesWithImages);
    } catch (err) {
      setError('Error fetching services. Please try again.');
      console.error('API Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const service = services.find(service => service.id === serviced);

  return (
    <View>
      {service ? (
        <View>
          {/* Intro */}
          <Intro service={service} />
          {/* Action Buttons */}
          <ActionButton />
          {/* About Section */}
          <About />
          {/* Review Section */}
        </View>
      ) : (
        <Text>Service not found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: Colors.GRAY,
    textAlign: 'center',
  },
  noContentText: {
    fontSize: 16,
    color: Colors.GRAY,
    textAlign: 'center',
    marginTop: 20,
  },
})
