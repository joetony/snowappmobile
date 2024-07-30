import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import axios from "axios";
import { Service } from "@/types/global";
import { Colors } from "@/constants/Colors";
import { getImageUrl } from "@/utils/funtions";
import PopularServiceCard from "./popular.service.card";
import { styles } from "@/styles/home/popularservice";
import { useRouter } from "expo-router";

export default function PopularService() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchRecentServices();
  }, []);

  const fetchRecentServices = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<Service[]>(
        "http://192.168.1.118:88/api/Service",
        {
          params: { limit: 10, sortBy: "createdDate", order: "desc" },
        }
      );

      // Obtener URLs de imágenes
      const servicesWithImages = await Promise.all(
        response.data.map(async (service) => {
          const imageUrl = await getImageUrl(service.imageId);
          return { ...service, imageUrl }; // Incluye la URL de la imagen en el servicio
        })
      );

      setServices(servicesWithImages);
    } catch (err) {
      setError("Error fetching services. Please try again.");
      console.error("API Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewAllPress = () => {
    router.push("/explore");
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
    <View>
      <View style={styles.headContainer}>
        <Text style={styles.title}>Popular Services</Text>
        <TouchableOpacity onPress={handleViewAllPress}>
          <Text style={styles.titleView}>View All</Text>
        </TouchableOpacity>
      </View>
      {services.length > 0 ? (
        <FlatList
          data={services}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <PopularServiceCard service={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.noContentText}>No Services Found</Text>
      )}
    </View>
  );
}
