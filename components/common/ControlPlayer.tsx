import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Animated,
  ActivityIndicator,
  useColorScheme,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import styles from "@/styles/common/player.style";
import Slider from "@react-native-community/slider";
import { Lyrics } from "../lyrics";
import { THEME } from "@/constants";
import { States } from "@/hook/states";
import usePlay from "@/hook/PlayEvents";

const ControlPlayer = ({
  data,
  error,
  Loading,
  refetch,
}: {
  data: any;
  error: boolean;
  Loading: boolean;
  refetch: () => void;
}) => {
  const { isLyricsVisible, setIsLyricsVisible } = States();
  const [shuffel, setShuffel] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [heart, setHeart] = useState<boolean>(false);
  const [download, setDownload] = useState<boolean>(false);

  const {
    playing,
    togglePlay,
    loop,
    position,
    duration,
    setIsSeeking,
    Buffer,
    handleSeek,
    remaining,
    setLyrics,
    lyricsIndex 
  } = usePlay(data[0].downloadUrl[4].url);
  const {
    formattedLyrics,
    Loading: LyricsLoading,
    error: LyricsError,
  } = Lyrics(data[0].id);
  const lyrics = formattedLyrics;
  const settingLyrics = () => {
    setLyrics(lyrics);
  };
  const opacicty = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.Value(0)).current;

  Animated.timing(opacicty, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

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
  };

  const time = data[0].duration;
  const minutes = Math.floor(Math.abs(time / 60));
  const seconds = Math.floor(Math.abs(time % 60));
  const timing = `${minutes}:${seconds}`;
  const [miles, setMiles]: any = useState(seconds);
  const [min, setMin] = useState(minutes);

  function formatTime(milliseconds: number) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        setMiles(miles - 1);
      }, 1000);
      if (miles < 0) {
        setMiles(59);
        setMin(min - 1);
      }
      return () => clearInterval(interval);
    }
  }, [miles, playing]);

  const scheme = useColorScheme();

  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <SafeAreaView>
        {Loading ? (
          <ActivityIndicator color={THEME[scheme ?? "light"].text} />
        ) : error ? (
          <Text
            style={{
              color: THEME[scheme ?? "light"].text,
              fontSize: 21,
            }}
          >
            Something went Wrong.
          </Text>
        ) : (
          <Animated.View style={[styles.player]}>
            <View style={styles.bgImgContainer}>
              <ImageBackground
                style={[styles.bgImg]}
                source={{
                  uri: `${data[0].image[2].url}`,
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
                    <TouchableOpacity
                      onPress={() => {
                        router.back();
                      }}
                    >
                      <FontAwesome6 name="arrow-left" size={26} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Now Playing</Text>

                    <TouchableOpacity
                      onPress={() => {
                        flip();
                      }}
                    >
                      <FontAwesome6
                        name="quote-left"
                        size={30}
                        color={"white"}
                      />
                    </TouchableOpacity>
                  </View>
                  <Animated.View
                    style={[
                      styles.mainComponents,
                      {
                        transform: [
                          {
                            translateY: rotation.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0, -100],
                            }),
                          },
                        ],
                        opacity: opacicty,
                      },
                    ]}
                  >
                    {isLyricsVisible ? (
                      <>
                        {/* <Overlay radius={40}> */}
                        <ScrollView showsVerticalScrollIndicator={false}>
                          <View style={[styles.lyrics]}>
                            {data[0].hasLyrics ? (
                              LyricsLoading ? (
                                <ActivityIndicator color={"white"} />
                              ) : LyricsError ? (
                                <Text style={styles.lyricsText}>
                                  Something went Wrong...!
                                </Text>
                              ) : (
                                <Text>
                                  {lyrics.split("\n").map((lyric, index) => (
                                    <View key={index}>
                                      <Text
                                        style={[
                                          styles.lyricsText,
                                          {
                                            color:
                                              lyricsIndex === index
                                                ? "white"
                                                : "grey",
                                          },
                                        ]}
                                      >
                                        {lyric}
                                      </Text>
                                    </View>
                                  ))}
                                </Text>
                              )
                            ) : (
                              <Text style={styles.lyricsText}>
                                No Lyrics Found{":("}
                              </Text>
                            )}
                          </View>
                        </ScrollView>
                        {/* </Overlay> */}
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
                    <TouchableOpacity
                      style={[
                        styles.backOfIcon,
                        shuffel && {
                          backgroundColor: "rgba(143, 32, 247, 0.20)",
                        },
                      ]}
                      onPress={() => setShuffel(!shuffel)}
                    >
                      <FontAwesome6
                        name="shuffle"
                        size={26}
                        color={shuffel ? "rgb(180, 30, 250)" : "white"}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.backOfIcon,
                        repeat && {
                          backgroundColor: "rgba(255, 215, 0, 0.20)",
                        },
                      ]}
                      onPress={() => {
                        setRepeat(!repeat), loop();
                      }}
                    >
                      <FontAwesome6
                        name="repeat"
                        size={26}
                        color={repeat ? "rgb(255, 215, 0)" : "white"}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.backOfIcon,
                        heart && { backgroundColor: "rgba(255, 60, 60, 0.20)" },
                      ]}
                      onPress={() => {
                        setHeart(!heart);
                      }}
                    >
                      <FontAwesome6
                        name="heart"
                        size={26}
                        color={heart ? "rgb(255, 60, 60)" : "white"}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.backOfIcon,
                        download && {
                          backgroundColor: "rgba(76, 252, 112, 0.20)",
                        },
                      ]}
                      onPress={() => {
                        setDownload(!download);
                      }}
                    >
                      {download ? (
                        <FontAwesome6
                          name="check"
                          size={26}
                          color={"rgb(51, 255, 93)"}
                          style={{ paddingHorizontal: 2 }}
                        />
                      ) : (
                        <FontAwesome6 name="download" size={26} color="white" />
                      )}
                    </TouchableOpacity>
                  </View>
                  <View style={styles.fonts}>
                    <Text style={styles.title} numberOfLines={1}>
                      {(data[0] as { name: string }).name}
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        width: "100%",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={styles.subTitle} numberOfLines={1}>
                        {(data[0] as { label: string }).label}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.controller}>
                    <View
                      style={[
                        styles.progress,
                        { paddingHorizontal: 0, borderRadius: 20 },
                      ]}
                    >
                      <Slider
                        value={position}
                        minimumValue={0}
                        maximumValue={duration}
                        step={1000}
                        onSlidingStart={() => setIsSeeking(true)}
                        onSlidingComplete={(value) => {
                          handleSeek(value);
                          setIsSeeking(false);
                        }}
                        thumbTintColor="#f4f4f4"
                        // thumbImage={require("@/assets/images/dot.png")}
                        minimumTrackTintColor="#ffffff80"
                        maximumTrackTintColor="#00000050"
                        style={[
                          styles.progress,
                          {
                            backgroundColor: "transparent",
                            transform: [{ scale: 2.49 }],
                            width: "50%",
                          },
                        ]}
                      />
                    </View>
                    <View style={styles.duration}>
                      <Text style={{ color: "white" }}>{timing}</Text>
                      <Text style={{ color: "white" }}>
                        {/* -{`${min}:${miles}`} */}-{formatTime(remaining)}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.musicController}>
                    <TouchableOpacity>
                      <FontAwesome6
                        name="backward-step"
                        size={40}
                        color="white"
                      />
                    </TouchableOpacity>
                    {Buffer ? (
                      <ActivityIndicator size={40} color="white" />
                    ) : (
                      <TouchableOpacity
                        style={[styles.backOfIcon, styles.playPause]}
                        onPress={() => {
                          togglePlay();
                        }}
                      >
                        {playing ? (
                          <FontAwesome6 name="pause" size={45} color="white" />
                        ) : (
                          <FontAwesome6
                            name="play"
                            size={45}
                            style={{ color: "white", marginLeft: 6 }}
                          />
                        )}
                      </TouchableOpacity>
                    )}

                    <TouchableOpacity>
                      <FontAwesome6
                        name="forward-step"
                        size={40}
                        color="white"
                      />
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
