import { View, Text, TouchableOpacity, TextInput, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';


import styles from '@/styles/Home/Search.style'
import { COLORS, THEME } from '@/constants';
import Gradient from './Gradient';
import main from '@/styles/SerMain.style';
import useSearch from '@/hook/history';

const SearchBar = ({activeTab, query, setQuery, refetch}: {
  activeTab: string,
  query: any,
  setQuery: any,
  refetch: any,
}) => {
  
    const {handleSearch} = useSearch(query, setQuery);
    const [Focused, setFocused] = useState(false);
    const [txt, setTxt] = useState("");
    const displaySearchButton = () => {
      if (activeTab === "Savan") {
        return (
<Gradient
      radius={12}
      color_1='#058c42'
      color_2='#c7f9cc'
      >
      <TouchableOpacity style={styles.searchButton} onPress={() => {
        setQuery(query);
        refetch()
        handleSearch()
        }}>
        <Text style={styles.searchBtnText}><AntDesign name="search1" size={24} color="white" /></Text>
      </TouchableOpacity>
      </Gradient>
      )
    }
    else if (activeTab === "Youtube") {
      return (
        <Gradient
        color_1='#ef233c'
        color_2='#e4b1ab'
      >
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchBtnText}><AntDesign name="search1" size={24} color="white" /></Text>
      </TouchableOpacity>
      </Gradient>
      )
    }
    else if (activeTab === "myMusic") {
      return (
        <Gradient
        color_1='#7161ef'
        color_2='#0d00a4'
      >
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchBtnText}><AntDesign name="search1" size={24} color="white" /></Text>
      </TouchableOpacity>
      </Gradient>
      )
    }

    if(activeTab !== "Savan" && activeTab !== "Youtube" && activeTab !== "myMusic") {
      return (
        <Gradient

      >
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchBtnText}><AntDesign name="search1" size={24} color="white" /></Text>
      </TouchableOpacity>
      </Gradient>
      )
    }
  }
  const scheme = useColorScheme()
  return (
  <>
    <View style={styles.parent}>
      <TextInput placeholder="Search for Song..." style={[styles.searchBar, Focused && styles.focusedInput, {
        backgroundColor: THEME[scheme ?? 'light'].Ui,
        color: THEME[scheme ?? 'light'].text,
      }]}
      onChangeText={(text) => {setQuery(text), refetch()}}
      value={query}
      onSubmitEditing={handleSearch}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={THEME[scheme ?? 'light'].grey}
      selectionColor={COLORS.primary}
      />
      {displaySearchButton()}
    </View>
  </>
  )
}

export default SearchBar