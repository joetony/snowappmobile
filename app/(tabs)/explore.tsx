import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import React, { useState, useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Service, Category } from "@/types/global";
import CategorySection from "@/components/home/category.section";
import ExploreServiceList from "@/components/explore/explore.service.list";
import { styles } from "@/styles/tabs/explorer";
import axios from "axios";
import { getImageUrl } from "@/utils/funtions";
import SearchBar from "@/components/common/searchBar";

export default function Explore() {
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>(
        "http://192.168.1.118:88/api/Category"
      );
      setCategories(response.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const getServiceByCategory = async (categoryName: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const category = categories.find((cat) => cat.name === categoryName);

      if (!category) {
        throw new Error("Category not found");
      }

      const response = await axios.get<Service[]>(
        "http://192.168.1.118:88/api/Service",
        {
          params: { categoryId: category.id },
        }
      );

      const filteredServices1 = response.data.filter(
        (service) => service.categoryId === category.id
      );

      const servicesWithImages = await Promise.all(
        filteredServices1.map(async (service) => {
          const imageUrl = await getImageUrl(service.imageId);
          return { ...service, imageUrl };
        })
      );

      setFilteredServices(servicesWithImages);
    } catch (err) {
      console.error("Error fetching services:", err);
      setError("Error fetching services. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles1.container}>
      <View style={styles1.fixedHeader}>
        <Text style={styles.title}>Explore More</Text>
        <SearchBar />
        <View style={styles.separator} />
        <CategorySection
          selectedArea={""}
          explore={true}
          onCategorySelect={(category) => getServiceByCategory(category)}
        />
        <View style={styles.separator} />
      </View>
      <ScrollView contentContainerStyle={styles1.scrollContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          <ExploreServiceList serviceList={filteredServices} />
        )}
      </ScrollView>
    </View>
  );
}

const styles1 = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fixedHeader: {
    backgroundColor: "#fff",
    padding: 15,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: "outfit-bold",
    color: "red",
  },
  SearchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginTop: 16,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.GRAY,
    marginVertical: 16,
  },
  scrollContainer: {
    paddingTop: 16,
    paddingBottom: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginVertical: 16,
  },
};
