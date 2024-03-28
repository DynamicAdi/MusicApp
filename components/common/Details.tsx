import { View, Text, ImageBackground, SafeAreaView, Touchable, TouchableOpacity, FlatList, ActivityIndicator, useColorScheme } from 'react-native'
import React from 'react'
import styles from '@/styles/common/details.style'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import SongCard from './SongCard'
import { THEME } from '@/constants'

const DetailsScreen = ({data, error, Loading, refetch, limit, setLimit}: {
  data: any,
  error: boolean,
  Loading: boolean,
  refetch?: any,
  limit?: number | null,
  setLimit?: any
}) => 
{

  const scheme = useColorScheme()

  const handleMore = () => {
    setLimit(limit && limit + 10);
    refetch();
  }
  let url;
  try {
    const baseKey = Object.values(data.image[2])
    url = baseKey[1]
  }
  catch (e) {
    url = "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTk2NTkwNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
  }
  return (
    <>
   {Loading && !data ? <View style={{height: '100%', width: "100%", justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator color={THEME[scheme ?? 'light'].text} size={60}/></View> : error ? (<View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}><Text style={{color: THEME[scheme ?? 'light'].text, fontSize: 20, textAlign: 'center', textAlignVertical: 'center'}}>Something went wrong, Try again</Text></View>) : (
  <SafeAreaView>
    <View style={styles.container}>
      <ImageBackground style={styles.bgImg} source={{uri: `${url}`}}>
        <View style={styles.shadow}>
        <View style={styles.content}>
        <TouchableOpacity onPress={() => {router.back()}}>
            <Ionicons name="arrow-back-circle-outline" size={40} color="white" />
        </TouchableOpacity>
        <View style={styles.context}>
        <View style={{width: '55%'}}>
        <Text numberOfLines={1} style={styles.title} >
            {data.name}
            </Text>
        <Text numberOfLines={1} style={styles.subTitle}>
            {data.songCount} Songs | {data.playCount} played
        </Text>
        </View>

        <View style={styles.btn}>
        <TouchableOpacity style={styles.BtnBg}>
        <Ionicons name="play-circle" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.BtnBg}>
            <Ionicons name="shuffle" size={40} color="white" />
        </TouchableOpacity>
        </View>
        </View>
        </View>
        </View>
      </ImageBackground>
      <FlatList 
    data={data.songs}
    keyExtractor={(item) => item.id}
    onEndReached={() => {limit && handleMore()}}
    onEndReachedThreshold={0.2}
    ListFooterComponent={Loading && data ? <ActivityIndicator size={26} color={THEME[scheme ?? 'light'].text}/> : null}
    renderItem={({item}) => (
      <SongCard 
      id={item.id}
      title={item.name}
      artist={item.artists.primary[0].name}
      imgUri={item.image[2].url}
      />
    )}
    />
    </View>
    </SafeAreaView>
    )}
    </>
  )
}

export default DetailsScreen