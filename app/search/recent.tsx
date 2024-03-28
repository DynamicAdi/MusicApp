import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import useSearch from '@/hook/history';
import main from '@/styles/SerMain.style';
import { THEME } from '@/constants';

const RecentSearch = ({query, setQuery, refetch}: {
  query: any,
  setQuery: any,
  refetch: any
}) => {
  
  const scheme = useColorScheme();
  const {searchHistory, deleteItem} = useSearch(query, setQuery);
    return (
        <View style={main.pills}>
          {searchHistory.map((item, index) => (
            <TouchableOpacity key={index} style={[main.pill, { backgroundColor: THEME[scheme ?? 'light'].Ui }]} onPress={() => {
              setQuery(item)
              refetch()
            }}
            onLongPress={() => (
              <View style={{backgroundColor: 'red', width: 20, height: 20}}>

              </View>
            )}
            >
              <Text numberOfLines={1} style={[main.pillText, { color: THEME[scheme ?? 'light'].text }]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
    );
}

export default RecentSearch