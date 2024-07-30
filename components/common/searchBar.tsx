import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { Colors } from '@/constants/Colors';
import { Service } from '@/types/global';

interface SearchBarProps {
  onSearchFocus?: () => void;
  onSearchBlur?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchFocus, onSearchBlur }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Service[]>([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (searchQuery.length > 2) {
      searchServices();
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  const searchServices = async () => {
    try {
      const response = await axios.get<Service[]>(`http://192.168.1.118:88/api/Service/search`, {
        params: { query: searchQuery }
      });
      setSearchResults(response.data);
      setShowResults(true);
    } catch (error) {
      console.error('Error searching services:', error);
    }
  };

  const handleServiceSelect = (serviceId: string) => {
    setShowResults(false);
    setSearchQuery('');
    router.push(`/servicedetail/${serviceId}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput 
          placeholder='Search...' 
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFocus={onSearchFocus}
          onBlur={onSearchBlur}
        />
      </View>
      {showResults && (
        <FlatList<Service>
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.resultItem}
              onPress={() => handleServiceSelect(item.id)}
            >
              <Text style={styles.resultItemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          style={styles.resultsList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth:1,
    borderColor: Colors.PRIMARY,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop:20
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'outfit',
    fontSize: 16,
  },
  resultsList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
    maxHeight: 200,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  resultItem: {
    padding: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  resultItemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default SearchBar;