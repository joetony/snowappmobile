import { View, ScrollView, RefreshControl, Text, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState, useCallback } from 'react';
import Header from "@/components/home/header"
import { Colors } from './../../constants/Colors'
import SliderArea from '@/components/home/slider.area';
import CategorySection from '@/components/home/category.section';
import PopularService from '@/components/home/popular.service';
import axios from 'axios';

export default function Home() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    // Simulate fetching data (replace with your own data fetching logic)
    try {
      await axios.get('http://192.168.1.118:88/api/Area'); // Fetch areas
      // You can also call other fetch functions if needed
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header fijo */}
      <View style={styles.headerContainer}>
        <Header />
      </View>

      {/* Contenido desplazable */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[Colors.PRIMARY]}
          />
        }>
        <SliderArea setSelectedArea={setSelectedArea} />
        <View style={styles.separator} />
        <CategorySection 
          selectedArea={selectedArea} 
          explore={false} 
          onCategorySelect={function (categoryName: string): void {
            throw new Error('Function not implemented.')
          }} 
        />
        <View style={styles.separator} />
        <PopularService />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    // Ajusta estos valores según el tamaño de tu Header
    height: 200, // Altura del Header
    zIndex: 1, // Asegura que el Header esté por encima del contenido
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingTop: 10, // Añade un poco de espacio en la parte superior
  },
  separator: {
    // Tus estilos actuales para el separador
  },
});