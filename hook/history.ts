// import React, { useState, useEffect } from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import main from '@/styles/SerMain.style';
import { THEME } from '@/constants';

const useSearch = (query:any, setQuery:any) => {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    loadSearchHistory();
  }, []);

  const loadSearchHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('searchHistory');
      if (history !== null) {
        setSearchHistory(JSON.parse(history));
      }
    } catch (error) {
      console.error('Error loading search history:', error);
    }
  };

  const addToSearchHistory = async (newQuery:any) => {
    try {
      const updatedHistory:any = [newQuery, ...searchHistory];
      const limitedHistory = updatedHistory.slice(0, 10);     
      setSearchHistory(limitedHistory);
      await AsyncStorage.setItem('searchHistory', JSON.stringify(limitedHistory));
    } catch (error) {
      console.error('Error saving search history:', error);
    }
  };

  const handleSearch = () => {
    // Update state with new query
    setQuery(query.trim());
    // Add query to search history
    if (query.trim() !== '') {
      addToSearchHistory(query.trim());
    }
  };
  const deleteItem = () => {
    AsyncStorage.removeItem('searchHistory');
  }

  return {handleSearch, searchHistory, deleteItem};
};

export default useSearch;