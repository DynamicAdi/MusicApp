import { View, Text, Image, TouchableOpacity, useColorScheme } from "react-native";
import React from "react";
import artist from "@/styles/Home/Artist.style";
import { THEME } from "@/constants";
import { useRouter } from "expo-router";


const Artist = ({id, imgUri, title}: {
  id: string,
  imgUri: string,
  title: string
}) => {
const scheme = useColorScheme()
const router = useRouter()
    return (
    <View style={artist.container}>
      <TouchableOpacity style={artist.content} onPress={() => {router.navigate(`../details/artists/${id}`)}}>
      <View style={artist.image}>
      <Image 
      style={artist.img}
      source={{uri: `${imgUri}`}}
      />
      </View>
      <Text style={[artist.text, {color: THEME[scheme ?? 'light'].text}]} numberOfLines={1}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Artist;
