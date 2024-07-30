import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import { Service } from '@/types/global';
import { Colors } from '@/constants/Colors';
import CategoryListCard from '@/components/category.list.card.tsx/category.list.card';
import { getImageUrl } from '@/utils/funtions';

export default function ServiceListByCategory() {
  const navigation = useNavigation();
  const { category, id } = useLocalSearchParams<{ category: string, id: string }>();
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const decodedCategory = category ? decodeURIComponent(category) : 'Unknown Category';
  const decodedId = id ? decodeURIComponent(id) : 'Unknown Category Id';

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: decodedCategory,
      headerStyle: {
        backgroundColor: Colors.PRIMARY,
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
    });
  }, [navigation, decodedCategory]);

  useEffect(() => {
    if (decodedId !== 'Unknown Category Id') {
      fetchServices(decodedId);
    }
  }, [decodedId]);


  const fetchServices = async (categoryId: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get<Service[]>(`http://192.168.1.118:88/api/Service`, {
        params: { categoryId }
      });
      const filteredServices = response.data.filter(service => service.categoryId === categoryId);
      
      // Obtener URLs de imagenes
      const servicesWithImages = await Promise.all(
        filteredServices.map(async (service) => {
          const imageUrl = await getImageUrl(service.imageId);
          return { ...service, imageUrl }; // Incluye la URL de la imagen en el servicio
        })
      );
      
      setServices(servicesWithImages);
    } catch (err) {
      setError('Error fetching services. Please try again.');
      console.error('API Error:', err); // Debugging line
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

  return (
    <View style={styles.container}>
      {services.length > 0 ? (
        <FlatList
          data={services}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CategoryListCard
              service={item}
            />
          )}
        />
      ) : (
        <Text style={styles.noContentText}>No Services Found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 20,
    fontFamily: 'outfit-bold',
    color: Colors.GRAY,
    textAlign: 'center',
  },
  noContentText: {
    fontSize: 20,
    fontFamily: 'outfit-bold',
    color: Colors.GRAY,
    textAlign: 'center',
    marginTop: '50%',
  },
});

