import { View, Text, TouchableOpacity, Image, FlatList, useColorScheme } from "react-native";
import React from "react";
import styles from "@/styles/Home/Recent.style";
import { AntDesign } from "@expo/vector-icons";
import Gradient, { Overlay } from "./Gradient";
import Title from "./Title";
import { COLORS, THEME } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";

const Recent = () => {
  // Dummy data
  const data = [
    {
      id: 1,
      thumbnail: "1.webp",
      name: "Song Name",
      artist: "Artist",
      time: "00:00min",
    },
    {
        id: 2,
        thumbnail: "1.webp",
        name: "Song Name",
        artist: "Artist",
        time: "00:00min"
    },
    {
        id: 3,
        thumbnail: "1.webp",
        name: "Song Name",
        artist: "Artist",
        time: "00:00min"
    },
    {
        id: 4,
        thumbnail: "1.webp",
        name: "Song Name",
        artist: "Artist",
        time: "00:00min"
    },
    {
        id: 6,
        thumbnail: "1.webp",
        name: "Song Name",
        artist: "Artist",
        time: "00:00min"
    },
    {
        id: 5,
        thumbnail: "1.webp",
        name: "Song Name",
        artist: "Artist",
        time: "00:00min"
    },
  ];
  return (
    <View>
      <Title
        title="Last Played"
        iconName="clock"
        color={THEME[useColorScheme() ?? 'light'].tint}
      />

      <FlatList
        style={styles.container}
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{columnGap: 10}}
        data={data}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.img}>
              <Image
                source={require("@/assets/images/1.webp")}
                style={styles.SongImage}
              />
            </View>

        <View style={styles.content}>
            <Overlay>
              <View style={styles.context}>
                <Text style={styles.SongName} numberOfLines={1}>
                  Song Name...........
                </Text>
                <Text style={styles.Artist} numberOfLines={1}>
                  Artist
                </Text>
                <Text style={styles.time}>00:00min</Text>
                <TouchableOpacity style={styles.PlayButton}>
                  <AntDesign name="play" style={styles.innner} />
                </TouchableOpacity>
              </View>
            </Overlay>
        </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default Recent;
