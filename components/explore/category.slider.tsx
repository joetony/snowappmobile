import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { categoryListData } from '@/constants/constants';
import { styles } from '@/styles/explore/categoryslider';
import CategorySectionCard from '../home/category.section.card';


export default function CategorySlider() {

    const router = useRouter();
  return (
    <View>
      <FlatList
        data={categoryListData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => (
            <CategorySectionCard 
            category = {item} 
            key = {index}   
            onCategoryPress={() => router.push(`/categorylist/${encodeURIComponent(item.name)}?id=${item.id}`)}
          />
        )} />
    </View>
  )
}