import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { Service } from '@/types/global';
import { styles } from '@/styles/explore/exploreservicelistcard';

interface ExploreServiceListCardProps {
    service : Service;
  }

const  ExploreServiceListCard: React.FC<ExploreServiceListCardProps> = ({service}) => {
    const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(`/servicedetail/${service.id}`)} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: service.imageUrl }} style={styles.image} />
        
      </View>
      <View style={styles.information}>
        <Text style={styles.title}>{service.name}</Text>
        <Text style={styles.description}>{service.shortDescription}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ExploreServiceListCard