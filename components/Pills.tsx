import { View, Text, FlatList, useColorScheme, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, THEME } from '@/constants'
import styles from '@/styles/Home/Home.style'

const Pills = ({tabs, activeTab, setActiveTab}: {
  tabs: any,
  activeTab: any,
  setActiveTab: any,
 
}) => {

  const bg = [
    COLORS.green_bg,
    COLORS.red_bg,
    COLORS.purple_bg,
    COLORS.secondary
  ]
  const txt = [
    COLORS.green_text,
    COLORS.red_text,
    COLORS.primary,
    COLORS.White
  ]
  const [colors, setColors] = useState(bg[0]);
  const [text, setText] = useState(txt[0]);
  
    const colorScheme = useColorScheme();
  return (
    <View style={{
        marginTop: -15,
        marginBottom: 8
    }}>
      <FlatList
        horizontal
        contentContainerStyle={{columnGap: 10}}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        data={tabs}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => {
            setActiveTab(item)
            setColors(bg[tabs.indexOf(item)])
            setText(txt[tabs.indexOf(item)])
          }} style={[styles.serverSelection, {
            backgroundColor: activeTab === item ? colors : `transparent`,

          }]}>
            <Text style={[styles.text, {
              color: activeTab === item ? text : `${THEME[colorScheme ?? 'light'].grey}`,
            }]}>{item}</Text>
          </TouchableOpacity>
        )}>
      </FlatList>
    </View>
  )
}

export default Pills