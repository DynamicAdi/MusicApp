import { View, Text, TouchableOpacity, Image, useColorScheme } from 'react-native'
import React from 'react'
import res from '@/styles/common/common.style';

import { THEME } from '@/constants'
import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const AlbumCard = ({imgUri, title, year, songCount, desc, id}: {
    imgUri: string,
    title: string,
    year?: string,
    songCount?: string,
    desc?: string,
    id: string
}) => {
    const scheme = useColorScheme();
    const router = useRouter();
    let ary = songCount?.split(", ");
    const numOfSong = ary?.length;
  return (
    <View style={[res.container]}>
        <TouchableOpacity
        style={[res.album, 
      ]} 
      onPress={() => {router.navigate(`../details/albums/${id}`)}}
      >
        <View style={res.imgParent}>
          <Image style={res.imgMain} source={{ uri: `${imgUri}` }} />
        </View>

        <View style={res.content}>
          <Text
            style={[res.title, { color: THEME[scheme ?? "light"].text }]}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text style={[res.artist, { color: THEME[scheme ?? "light"].grey }]} numberOfLines={1}>
            {songCount===undefined ? "" : `${numOfSong} Songs |`} {year===undefined ? "" : `${year} Flim`} {desc===undefined ? "" : `${desc}`}
          </Text>
        </View>

        <TouchableOpacity style={res.albSide}>
        <Entypo
            name="dots-three-vertical"
            size={20}
            style={{
              color: THEME[scheme ?? "light"].grey,
            }}
          />
        </TouchableOpacity>
        </TouchableOpacity>
    </View>
  )
}

export default AlbumCard