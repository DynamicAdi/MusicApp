import { View, Text, ImageBackground, TouchableOpacity, FlatList, useColorScheme, ActivityIndicator, Image } from 'react-native'
import React from 'react'
import styles from '@/styles/common/details.style'
import { useRouter } from 'expo-router'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import SongCard from './common/SongCard'
import { THEME } from '@/constants'

const ArtistDetails = ({data, error, Loading, count, setCount, refetch}: {
  data: any,
  error: boolean,
  Loading: boolean,
  count: number,
  setCount: any,
  refetch: any
}) => {
  const router = useRouter()
  const scheme = useColorScheme()
  let url;
  const handleMore = () => {
    setCount(count + 10);
    refetch();
  }
  try {
    const baseKey = Object.values(data.image[2])
    url = baseKey[1]
  }
  catch (e) {
    url = "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTk2NTkwNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
  }

  return (
  <>
  {Loading && !data ? <View style={{height: '100%', width: "100%", justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator color={THEME[scheme ?? 'light'].text} size={60}/></View> : error ? (<Text style={{color: THEME[scheme ?? 'light'].text}}>Something went wrong, Please try again later</Text>) : (

    <SafeAreaView>
    <View style={styles.container}>
      <ImageBackground style={styles.bgImg} source={{uri: `${url}`}}>
        <View style={styles.shadow}>
        <View style={styles.content}>
        <View style={{width: '100%', justifyContent: 'space-between', flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => {router.back()}}>
            <Ionicons name="arrow-back-circle-outline" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {router.back()}}>
        <MaterialCommunityIcons name="dots-vertical" size={30} color="white" />
        </TouchableOpacity>
        </View>
        <View style={styles.context}>
        <View style={{width: '55%'}}>
        <Text numberOfLines={1} style={styles.title} >
            {data.name}
        </Text>
        <Text numberOfLines={1} style={styles.subTitle}>
            {data.fanCount} Fans
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
    data={data.topSongs}
    keyExtractor={(item) => item.id}
    onEndReached={handleMore}
    onEndReachedThreshold={0.3}
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

export default ArtistDetails