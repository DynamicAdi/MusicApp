import { View, Text, FlatList, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import styles from '@/styles/Home/Home.style'
import { COLORS, THEME } from '@/constants'

const Head = () => {
  const colorScheme = useColorScheme()
  return (
    <View style={styles.main}>
    <Text style={[styles.subHead, {
      color: `${THEME[colorScheme ?? 'light'].tint}`,
    }]}>It's Time To <Text style={styles.subText}>Relax </Text>Together</Text>
      

    </View>
  )
}

export default Head