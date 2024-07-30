import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Touchable,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import { styles } from "@/styles/home/category.section";
import { Category } from "@/types/global";
import CategorySectionCard from "./category.section.card";
import { Colors } from "@/constants/Colors";
import { getImageUrl } from "@/utils/funtions";

interface CategorySectionProps {
  selectedArea: string | null;
  explore: boolean;
  onCategorySelect: (categoryName: string) => void;
}

export default function CategorySection({
  selectedArea,
  explore = false,
  onCategorySelect,
}: CategorySectionProps) {
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchCategories();
  }, [selectedArea]);

  const fetchCategories = async () => {
    setIsLoading(true);
    setError("");
    try {
      let url = "http://192.168.1.118:88/api/Category";
      const response = await axios.get<Category[]>(url);

      const categoriesWithImages = await Promise.all(
        response.data.map(async (category) => {
          const imageResponse = await getImageUrl(category.imageId);
          return { ...category, imageUrl: imageResponse };
        })
      );

      if (selectedArea) {
        const filtered = categoriesWithImages.filter(
          (category) => category.areaId === selectedArea
        );
        setFilteredCategories(filtered);
      } else {
        setFilteredCategories(categoriesWithImages);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Error loading categories");
    } finally {
      setIsLoading(false);
    }
  };

  const onCategoryPressHandler = (item: Category) => {
    if (!explore) {
      router.push(
        `/categorylist/${encodeURIComponent(item.name)}?id=${item.id}`
      );
    } else {
      onCategorySelect(item.name);
    }
  };

  const handleViewAllPress = () => {
    router.push("/explore");
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchCategories();
    setRefreshing(false);
  };

  if (isLoading) {
    return (
      <View style={styles1.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles1.noContentContainer}>
        <Text style={styles1.noContentText}>{error}</Text>
      </View>
    );
  }

  if (filteredCategories.length === 0) {
    return (
      <View style={styles1.noContentContainer}>
        <Text style={styles1.noContentText}>No categories found</Text>
      </View>
    );
  }

  return (
    <View>
      {!explore && (
        <View>
          <View style={styles.headContainer}>
            <Text style={styles.title}>Categories</Text>
            <TouchableOpacity onPress={handleViewAllPress}>
              <Text style={styles.titleView}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gridContainer}>
            {filteredCategories
              .slice(0, 4)
              .map((item: Category, index: number) => (
                <View key={index} style={styles.itemContainer}>
                  <CategorySectionCard
                    category={item}
                    onCategoryPress={(category) => onCategoryPressHandler(item)}
                  />
                </View>
              ))}
          </View>
        </View>
      )}
      {explore && (
        <FlatList
          data={filteredCategories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
          scrollEventThrottle={16}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: Category }) => (
            <CategorySectionCard
              category={item}
              onCategoryPress={(category) => onCategoryPressHandler(item)}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
}

const styles1 = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  noContentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  noContentText: {
    fontSize: 20,
    fontFamily: "outfit-bold",
    color: Colors.GRAY,
    textAlign: "center",
  },
});
