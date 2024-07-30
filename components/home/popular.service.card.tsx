import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Service } from '@/types/global';
import { styles } from '@/styles/home/popularservicecard';

interface PopularServiceCardProps {
  service: Service;
}

const PopularServiceCard: React.FC<PopularServiceCardProps> = ({ service }) => {
  const router = useRouter();
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handlePress = () => {
    router.push(`/servicedetail/${service.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.imageContainer}>
        {imageLoading && <ActivityIndicator size="small" color="#0000ff" />}
        <Image
          source={imageError ? require('@/assets/images/userMarlon.jpg') : { uri: service.imageUrl }}
          style={styles.image}
          onLoadStart={() => setImageLoading(true)}
          onLoadEnd={() => setImageLoading(false)}
          onError={() => {
            setImageError(true);
            setImageLoading(false);
          }}
        />
      </View>
      <View style={styles.information}>
        <Text style={styles.title}>{service.name}</Text>
        <Text style={styles.description}>{service.shortDescription}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularServiceCard;