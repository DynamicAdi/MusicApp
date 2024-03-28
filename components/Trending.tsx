import { View, Text, TouchableOpacity, Image, FlatList, useColorScheme } from 'react-native'
import React from 'react'
import Title from './Title'
import { COLORS, THEME } from '@/constants'

import styles from '@/styles/Home/Trending.style'
import { AntDesign } from '@expo/vector-icons'
import Gradient from './Gradient'

const Trending = () => {
  const data=[
    {
    id: 1,
    title: "",
    author: "",
    views: "",
    time: "",
  },
  {
    id: 2,
    title: "",
    author: "",
    views: "",
    time: "",
  },
  {
    id: 3,
    title: "",
    author: "",
    views: "",
    time: "",
  },
  {
    id: 4,
    title: "",
    author: "",
    views: "",
    time: "",
  },
]
const ui = useColorScheme()
  return (
    <View>
      <Title title='Trending' iconName="trending-up" color={COLORS.secondary}/>

    <View style={styles.parent}>

    <FlatList
    data={data}
    horizontal
    contentContainerStyle={{columnGap: 12}}
    showsHorizontalScrollIndicator={false}
    renderItem={(items) => (
      <View style={[styles.cardContainer, {
        backgroundColor: `${THEME[ui ?? 'light'].Ui}`
      }]}>
            <Image
                style={styles.cardImage}
                source={require('@/assets/images/1.jpg')}
                />
            <Text style={[styles.cardTitle, {
              color: `${THEME[ui ?? 'light'].text}`
            }]}>Card Title</Text>
            <Text style={[styles.cardArtist, {
              color: `${THEME[ui ?? 'light'].grey}`
            }]}>Card Artist</Text>
          <View style={styles.context}>
            <Text style={styles.view}>1000,000 views</Text><Text style={[styles.divider, {
              color: `${THEME[ui ?? 'light'].text}`
            }]}>•</Text>
            <Text style={styles.duration}>00:00min</Text>
          </View>

        <View style={styles.check}>
            <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}><AntDesign name='play' size={24} style={[styles.icon, {
                  color: `${THEME[ui ?? 'light'].text}`
                }]}/></Text>
            </TouchableOpacity>
        </View>
        </View>
    )}
    >


    </FlatList>

</View>
    </View>
  )
}

export default Trending