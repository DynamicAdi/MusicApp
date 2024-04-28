import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  Animated,
  ScrollView,
  PanResponder,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import mini from "@/styles/common/miniplayer.style";
import { Ionicons } from "@expo/vector-icons";
import { States } from "@/hook/states";
import { useGlobalSearchParams, useRouter } from "expo-router";
import {useSelector, useDispatch} from "react-redux";
import { Lyrics } from "@/hook/lyrics";
import Slider from "@react-native-community/slider";
import { setIsSeeking, setPlaying } from "@/context/Audio";

const MiniPlayer = () => {

  const dispatch = useDispatch()
  const songData = useSelector((state: any) => state.data.data);
  const { playing, position, lyrics, highlightLine, duration, handleSeek, isBuffer } = useSelector(
    (state: any) => state.audio
  );

  const router = useRouter();
  const params = useGlobalSearchParams();
  
  const { isLyricsVisible, setIsLyricsVisible } = States();
  const transform = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const pan = useRef(new Animated.ValueXY()).current;
  const screenWidth = Dimensions.get("window").width;
  const containerWidth = 270;
  const jumpDistance = 80;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      pan.setValue({ x: gestureState.dx, y: 0 });
    },
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dx > jumpDistance) {
        Animated.timing(pan, {
          toValue: { x: screenWidth - containerWidth, y: 0 },
          duration: 300,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(pan, {
          toValue: { x: 0, y: 0 },
          duration: 150,
          useNativeDriver: false,
        }).start();
      }
    },
  });
  
  
  function visibleShow() {
    Animated.timing(transform, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(transform, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).reset();
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).reset();
      setIsLyricsVisible(!isLyricsVisible);
    }, 900);
  }

  const {
    formattedLyrics,
    Loading: LyricsLoading,
    error: LyricsError,
  } = Lyrics(songData[0]?.id);

  return (
  // <TouchableOpacity
  // onPress={() => {router.navigate(//)}
  // >

    <Animated.View
      style={[mini.container, { transform: [{ translateX: pan.x }] }]}
      {...panResponder.panHandlers}
      >
    
      <View style={mini.imgParent}>
        <Image source={{ uri: `${songData[0]?.image[2].url}` }} style={mini.img} />
      </View>

      <View style={mini.content}>
        <Animated.View
          style={[
            mini.left,
            {
              transform: [
                {
                  rotateY: transform.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "180deg"],
                  }),
                },
              ],
              opacity: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            },
          ]}
        >
          {isLyricsVisible ? (
            <ScrollView showsVerticalScrollIndicator={false}>
                          <View style={[mini.lyrics]}>
                            {songData[0].hasLyrics ? (
                              LyricsLoading ? (
                                <ActivityIndicator color={"white"} />
                              ) : LyricsError ? (
                                <Text style={mini.lyricsText}>
                                  Something went Wrong...!
                                </Text>
                              ) : (
                                <>
                                  {lyrics
                                    .split("\n")
                                    .map((line: any, index: any) => (
                                      <Text
                                      key={index}
                                        style={[
                                          mini.lyricsText,
                                          {
                                            color:
                                              index === highlightLine
                                                ? "white"
                                                : "grey",
                                          },
                                        ]}
                                      >
                                        {line}
                                      </Text>
                                    ))}
                                </>
                              )
                            ) : (
                              <Text style={mini.lyricsText}>
                                No Lyrics Found{":("}
                              </Text>
                            )}
                          </View>
                        </ScrollView>
          ) : (
            <View style={mini.context}>
              <View style={mini.upper}>
                <Ionicons name="musical-note-sharp" size={16} color="white" />
                <Text style={mini.label} numberOfLines={1}>{songData[0]?.label}</Text>
              </View>

              <View style={mini.middle}>
                <Text style={mini.title} numberOfLines={1}>
                  {songData[0]?.name}
                </Text>
                <Text style={mini.label} numberOfLines={1}>
                  {songData[0]?.artists.primary[0].name}
                </Text>
              </View>

              <View style={mini.lower}>
                <TouchableOpacity>
                  <Ionicons name="play-skip-back" size={24} color="white" />
                </TouchableOpacity>
                <View style={mini.bridge}>
                <Slider
                        value={position}
                        minimumValue={0}
                        maximumValue={duration}
                        step={1000}
                        onSlidingStart={() => {
                          dispatch(setIsSeeking(true));
                        }}
                        onSlidingComplete={(value) => {
                         dispatch(handleSeek(value));
                        dispatch(setIsSeeking(false));
                      }}
                        thumbTintColor="#f4f4f4"
                        minimumTrackTintColor="#ffffff95"
                        maximumTrackTintColor="#ffffff80" 
                        // style={mini.progress}
                        />
                </View>
                <TouchableOpacity>
                  <Ionicons name="play-skip-forward" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Animated.View>

        <View style={mini.right}>
          <TouchableOpacity
            onPress={() => {
              visibleShow();
            }}
            style={{ transform: [{ rotate: "90deg" }] }}
          >
            <Ionicons name="barcode-sharp" size={26} color="white" />
          </TouchableOpacity>
            {isBuffer ? <ActivityIndicator color={'white'} size={28}/> :
          (

            <TouchableOpacity style={mini.btnBg} onPress={() => {dispatch(setPlaying(!playing))}}>
            {playing ? (
              <Ionicons name="pause" size={24} color="white" />
            ) : (
              <Ionicons
                name="play"
                size={24}
                color="white"
                style={{ marginLeft: 1 }}
                />
              )}
            {/*  */}
          </TouchableOpacity>
          )
            }

          <TouchableOpacity>
            <Ionicons name="heart" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
            // </TouchableOpacity>
  );
};

export default MiniPlayer;
