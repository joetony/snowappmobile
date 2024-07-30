import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ExploreServiceListCard from './explore.service.list.card';
import { Service } from '@/types/global';
import { Colors } from '../../constants/Colors';
import { styles } from '@/styles/explore/exploreservicelist';

interface ExploreServiceListProps {
  serviceList: Service[];
}

export default function ExploreServiceList({ serviceList }: ExploreServiceListProps) {
  return (
    <FlatList
      style={styles.flatList}
      data={serviceList}
      renderItem={({ item }) => <ExploreServiceListCard key={item.id} service={item} />}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'outfit-bold',
              color: Colors.GRAY,
              textAlign: 'center',
            }}
          >
            No Services Found
          </Text>
        </View>
      }
    />
  );
}
