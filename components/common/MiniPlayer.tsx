// import { View, Text, Image, Touchable, TouchableOpacity, Animated } from 'react-native'
// import React, { useContext, useRef, useState } from 'react'
// import mini from "@/styles/common/miniplayer.style";
// import { Ionicons } from '@expo/vector-icons';
// import { States } from '@/hook/states';
// import { Lyrics } from '../lyrics';
// import { Overlay } from '../Gradient';
// import { useGlobalSearchParams, useRouter } from 'expo-router';
// import useSavan from '@/hook/savan';
// // import { useSongContext } from '@/context/songContext';


// const MiniPlayer = ({id}:{id:string}) => {
//   const router = useRouter();
//   const params = useGlobalSearchParams();
//   const {isPlaying, setIsPlaying, isLyricsVisible, setIsLyricsVisible} = States();
//   const transform = useRef(new Animated.Value(0)).current;
//   const opacity = useRef(new Animated.Value(0)).current;
//   const songData = [{duration: 99, label: "name", image: [{}, {}],}]
//   // const {songData} = useSongContext()
//   alert(songData)
//   const time = songData?.duration;
// const minutes = Math.floor(time / 60);
// const seconds = time - minutes * 60;
// const duration = `${minutes}:${seconds}`

//   const visibleShow = () => {
//     Animated.timing(transform, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//     Animated.timing(opacity, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//     setTimeout(() => {
//       Animated.timing(transform, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }).reset();
//       Animated.timing(opacity, {
//         toValue: 1,
//         duration: 800,
//         useNativeDriver: true,
//       }).reset();
//       setIsLyricsVisible(!isLyricsVisible);
//     }, 900);
//   }
//   return (
//     <View style={mini.container}>
//       <View style={mini.imgParent}>
//         <Image 
//         source={{uri: `${songData?.image[2].url}`}}
//         style={mini.img}
//         />
//       </View>

//     <View style={mini.content}>
//     <Animated.View style={[mini.left, {
//       transform: [{
//          rotateY: transform.interpolate({
//             inputRange: [0, 1],
//             outputRange: ['0deg', '180deg']
//          }) 
//         }],
//         opacity: opacity.interpolate({
//           inputRange: [0, 1],
//           outputRange: [1, 0]
//         })
//     }]}>
//   {isLyricsVisible ? (<Overlay radius={15} >
//                     <View style={[mini.lyrics]}>
//                       <Text style={mini.lyricsText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, eius! Tempore voluptas facilis ratione libero dignissimos pariatur deleniti eligendi iusto recusandae! Inventore maiores nesciunt modi libero tenetur expedita eveniet commodi!</Text>
//                     {/* {songData.hasLyrics ? (<Text style={mini.lyricsText}>
//                       <Lyrics songId={`${songData.id}`} />
//                       </Text>) : 
//                       (<Text style={mini.lyricsText}>No Lyrics Found{":("}</Text>)} */}
//                     </View>
//                   </Overlay>) : (
//       <View style={mini.context}>

//       <View style={mini.upper}>
//          <Ionicons name="musical-note-sharp" size={16} color="white" />
//           <Text style={mini.label}>{(songData as { label: string })?.label}</Text>
//       </View>
     
//       <View style={mini.middle}>
//           <Text style={mini.title} numberOfLines={1}>{songData?.name}</Text>
//           <Text style={mini.label} numberOfLines={1}>{songData?.artists.primary[0].name}</Text>
//       </View>
     
//       <View style={mini.lower}>
//          <TouchableOpacity><Ionicons name="play-skip-back" size={24} color="white" /></TouchableOpacity>
//          <View style={mini.bridge}>
//          <View style={mini.progress}>
//               <View style={mini.bar}></View>
//           </View>
//           <View style={mini.time}>
//              <Text style={mini.duration}>{duration}</Text>
//              <Text style={mini.duration}>-{duration}</Text>
//          </View>
//          </View>
//          <TouchableOpacity><Ionicons name="play-skip-forward" size={24} color="white" /></TouchableOpacity>
     
//       </View>
//          </View>
//   )}
  
//   </Animated.View>

//     <View style={mini.right}>
//         <TouchableOpacity onPress={() => {visibleShow()}}>
//     <Ionicons name="barcode-sharp" size={26} color="white" />
//         </TouchableOpacity>

//     <TouchableOpacity style={mini.btnBg} onPress={() => {setIsPlaying(!isPlaying)}}>
//   {isPlaying ? <Ionicons name="pause" size={24} color="white"/> : <Ionicons name="play" size={24} color="white" style={{marginLeft: 1}}/>}
//  {/*  */}
//     </TouchableOpacity>

//     <TouchableOpacity>
// <Ionicons name="heart" size={26} color="white"/>
//     </TouchableOpacity>
//     </View>

//     </View>
//     </View>
//   )
// }

// export default MiniPlayer