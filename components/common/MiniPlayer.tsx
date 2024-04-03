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
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import mini from "@/styles/common/miniplayer.style";
import { Ionicons } from "@expo/vector-icons";
import { States } from "@/hook/states";
import { useGlobalSearchParams, useRouter } from "expo-router";
import useSavan from "@/hook/savan";
import usePlay from "@/hook/PlayEvents";

const MiniPlayer = ({ id }: { id: string }) => {
  const router = useRouter();
  const params = useGlobalSearchParams();
  
  const { isLyricsVisible, setIsLyricsVisible } = States();
  const transform = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const pan = useRef(new Animated.ValueXY()).current;
  const screenWidth = Dimensions.get("window").width;
  const containerWidth = 260;
  const jumpDistance = 105;

  // const { data, Loading, error } = useSavan(songId);
  // alert(data)
  const panResponse = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_: any, gestureState: any) => {
        const { dx } = gestureState;
        const maxX = screenWidth - containerWidth;
        const newX = pan.x._value + dx; // pan.x._value is the current x value of the pan
        if (newX >= 0 && newX <= maxX) {
          pan.setValue({ x: newX, y: 0 });
        }
      },
      onPanResponderRelease: (_: any, gestureState: any) => {
        const distance = gestureState.dx > 0 ? 1 : -1;
        Animated.spring(pan, {
          toValue: { x: distance * jumpDistance, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  useEffect(() => {
    const maxX = screenWidth - containerWidth;
    const listner = pan.x.addListener(({ value }: any) => {
      const newX = value.x;
      if (value < 0) {
        pan.setOffset({ x: 0, y: 0 });
        pan.setValue({ x: 0, y: 0 });
      } else if (value > maxX) {
        pan.setOffset({ x: maxX, y: 0 });
        pan.setValue({ x: maxX, y: 0 });
      }
    });
    return () => {
      pan.x.removeListener(listner);
    };
  }, [pan]);

  const panStyle = {
    transform: pan.getTranslateTransform(),
  };

  const visibleShow = () => {
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
  };
  return (
    <Animated.View
      style={[mini.container, panStyle]}
      {...panResponse.panHandlers}
    >
      <View style={mini.imgParent}>
        <Image source={{ uri: `Image url here` }} style={mini.img} />
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
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 1, zIndex: 99 }}
            >
              <View style={[mini.lyrics]}>
                <Text style={mini.lyricsText}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Beatae, eius! Tempore voluptas facilis ratione libero
                  dignissimos pariatur deleniti eligendi iusto recusandae!
                  Inventore maiores nesciunt modi libero tenetur expedita
                  eveniet commodi!{" "}
                </Text>
                {/* {songData.hasLyrics ? (<Text style={mini.lyricsText}>
                      <Lyrics songId={`${songData.id}`} />
                      </Text>) : 
                    (<Text style={mini.lyricsText}>No Lyrics Found{":("}</Text>)} */}
              </View>
            </ScrollView>
          ) : (
            <View style={mini.context}>
              <View style={mini.upper}>
                <Ionicons name="musical-note-sharp" size={16} color="white" />
                <Text style={mini.label}>Label here</Text>
              </View>

              <View style={mini.middle}>
                <Text style={mini.title} numberOfLines={1}>
                  Name here
                </Text>
                <Text style={mini.label} numberOfLines={1}>
                  Artist NAme here
                </Text>
              </View>

              <View style={mini.lower}>
                <TouchableOpacity>
                  <Ionicons name="play-skip-back" size={24} color="white" />
                </TouchableOpacity>
                <View style={mini.bridge}>
                  <View style={mini.progress}>
                    <View style={mini.bar}></View>
                  </View>
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

          <TouchableOpacity style={mini.btnBg} onPress={() => {}}>
            {"condition" ? (
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

          <TouchableOpacity>
            <Ionicons name="heart" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default MiniPlayer;
