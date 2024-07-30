import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { styles } from '@/styles/categorylistcard/categorylistcard';
import { Service } from '@/types/global';

interface ServiceListCardProps {
    service: Service;
  }

export default function CategoryListCard({ service }: ServiceListCardProps) {

  const router = useRouter();

  return (
    <TouchableOpacity style={styles.headContainer} onPress={() => router.push(`/servicedetail/${service.id}`)}>
      <Image 
        source={{uri : service.imageUrl}}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoContainerTitle}>{service.name}</Text>
        <Text style={styles.itemContainerDescription}>{service.shortDescription}</Text>
      </View>
    </TouchableOpacity>
  )
}