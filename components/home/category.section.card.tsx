import { Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Category } from '@/types/global';
import { styles } from '@/styles/home/category.section.card';

interface CategorySectionCardProps {
  category: Category;
  onCategoryPress: (categoryName: string) => void;
}

const CategorySectionCard: React.FC<CategorySectionCardProps> = ({ category, onCategoryPress }) => {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(category.name)}>
      <Image source={{ uri: category.imageUrl }} style={styles.image} />
      <Text style={styles.text}>{category.name}</Text>
    </TouchableOpacity>
  );
}

export default CategorySectionCard;


