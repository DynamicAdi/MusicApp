import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import React, { useRef, useState } from "react";
import { FontAwesome6 } from '@expo/vector-icons';
import { Stack, router } from "expo-router";
import styles from "@/styles/common/player.style";

import { Overlay } from "../Gradient";
import useSavan from "@/hook/savan";
import { Lyrics } from "../lyrics";
import { THEME } from "@/constants";
import { States } from "@/hook/states";



const ControlPlayer = ({data, error, Loading, refetch}: {
  data: any,
  error: boolean,
  Loading: boolean,
  refetch: () => void
}) => {
  // const [lyrics, setLyrics] = useState(false)
  const {isPlaying, setIsPlaying, isLyricsVisible, setIsLyricsVisible} = States();

const opacicty = useRef(new Animated.Value(0)).current;
const rotation = useRef(new Animated.Value(0)).current;

Animated.timing(opacicty, {
  toValue: 1,
  duration: 1000,
  useNativeDriver: true,
})
.start();


const flip = () => {
  Animated.timing(opacicty, {
    toValue: 1,
    duration: 0,
    useNativeDriver: true,
  }).reset();
    setIsLyricsVisible(!isLyricsVisible);
    Animated.timing(opacicty, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
}

const time = data[0].duration;
const minutes = Math.floor(time / 60);
const seconds = time - minutes * 60;
const duration = `${minutes}:${seconds}`
const scheme = useColorScheme()
  return (
    <>
    <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
      <SafeAreaView>
      {Loading ? <ActivityIndicator color={THEME[scheme ?? 'light'].text}/> : error ? <Text
      style={{
        color: THEME[scheme ?? 'light'].text,
        fontSize: 21
      }}
      >Something went Wrong.</Text> : (

        <Animated.View
        style={[styles.player]}>
          <View style={styles.bgImgContainer}>
            <ImageBackground
              style={[styles.bgImg]}
              source={{
                uri: `${data[0].image[2].url}`
              }}
              blurRadius={4}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              />

              <View style={styles.content}>
                <View style={styles.upperMenu}>
                <TouchableOpacity onPress={() => {router.back()}}>
                  <FontAwesome6
                    name="arrow-left"
                    size={26}
                    color="white"
                    />
                    </TouchableOpacity>
                <Text style={styles.title}>Now Playing</Text>

                <TouchableOpacity onPress={() => {flip()}}>
                  <FontAwesome6 name="quote-left" size={30} color={"white"}/>
                </TouchableOpacity>
                </View>
                <Animated.View style={[styles.mainComponents, {
                  transform: [{
                    translateY: rotation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -100]
                    })
                  }],
                  opacity: opacicty,
                }]}
                >
                  {isLyricsVisible ? (
                  <>
                 <Overlay radius={40} >
                    <View style={[styles.lyrics]}>
                    {data[0].hasLyrics ? (<Text style={styles.lyricsText}>
                      <Lyrics songId={`${data[0].id}`} />
                      </Text>) : 
                      (<Text style={styles.lyricsText}>No Lyrics Found{":("}</Text>)}
                    </View>
                  </Overlay>
                  </>
  
                  ) : (
                    <Animated.View style={[styles.track]}>
                      <Animated.Image
                        source={{
                          uri: `${data[0].image[2].url}`,
                        }}
                        style={[styles.trackImage]}
                      />
                    </Animated.View>
                  )}
                </Animated.View>
              <View style={styles.functionalButtonsContainer}>
                <TouchableOpacity style={styles.backOfIcon}>
                  <FontAwesome6 name="shuffle" size={26} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.backOfIcon}>
                <FontAwesome6 name="repeat" size={26} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.backOfIcon}>
                <FontAwesome6 name="heart" size={26} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.backOfIcon}>
                <FontAwesome6 name="download" size={26} color="white" />
                </TouchableOpacity>
              </View>
            <View style={styles.fonts}>
              <Text style={styles.title} numberOfLines={1}>{(data[0] as { name: string }).name}</Text>
            <View style={{
              justifyContent: "center",
              width: '100%',
              flexDirection: 'row'
            }}>
              {/* <Text style={styles.subTitle} numberOfLines={1}>{(data[0] as { artists: any }).artists.primary[0].name}</Text> */}
              <Text style={styles.subTitle} numberOfLines={1}>{(data[0] as { label: string }).label}</Text>
            </View>

            </View>

          <View style={styles.controller}>
              <View style={styles.progress}></View>
            <View style={styles.duration}>
              <Text style={{color: 'white'}}>{duration}</Text>
              <Text style={{color: 'white'}}>-{`${duration}`}</Text>

            </View>
                </View>
          <View style={styles.musicController}>
              <TouchableOpacity>
                <FontAwesome6 name="backward-step" size={40} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.backOfIcon, styles.playPause]} onPress={() => {setIsPlaying(!isPlaying)}}>
              {
                isPlaying ?<FontAwesome6 name="pause" size={45} color='white' /> : <FontAwesome6 name="play" size={45} style={{color: 'white', marginLeft: 6}}/>
              }

              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome6 name="forward-step" size={40} color="white" />
              </TouchableOpacity>
          </View>
              </View>
            </ImageBackground>
          </View>
        </Animated.View>
      )} 
      </SafeAreaView>
    </>
  );
};

export default ControlPlayer;
