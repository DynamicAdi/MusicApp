import { View, Text, TouchableOpacity, Image, useColorScheme } from 'react-native'
import React from 'react'
import res from '@/styles/common/common.style';
import { THEME } from '@/constants';
import { useRouter } from 'expo-router';

const PlaylistCard = ({imgUri, title, desc, id}: {
    imgUri: string,
    title: string,
    desc?: string,
    id: string
}) => {
    const scheme = useColorScheme();
    const router = useRouter()
  return (
    <View style={res.container}>
        <TouchableOpacity style={[res.album]} 
        onPress={() => {router.navigate(`../details/playlists/${id}`)}}  
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
                {desc===undefined ? "" : `${desc}`}
            </Text>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default PlaylistCard