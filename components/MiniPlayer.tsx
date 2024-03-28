// import { View, Text, Image, useColorScheme, TouchableOpacity, StyleSheet } from 'react-native'
// import React, { useState } from 'react'
// import styles from '@/styles/miniplayer.style'
// import { THEME } from '@/constants'
// import { AntDesign } from '@expo/vector-icons'
// import ControlPlayer from './common/ControlPlayer'
// import { useRouter } from 'expo-router'

// const Miniplayer = () => {
//     const [fullScreen, setFullScreen] = useState(false);
//     const router = useRouter();
//   return (
//     <>
//     {/* {fullScreen ? <ControlPlayer /> : <Text>MiniPlayer</Text> */}
//         <TouchableOpacity style={[styles.container, {
//             backgroundColor: THEME[useColorScheme() ?? 'light'].dak_ui}]}
//     onPress={() => router.navigate('../player/[id]')}
//     >
//         <View style={styles.miniplayer}>
//             <Image style={styles.miniplayerImage}  source={require('@/assets/images/1.jpg')} />
//         </View>
    
//     <View style={styles.content}>
//         <Text style={[styles.miniplayerTitleText, {
//             color: THEME[useColorScheme() ?? 'light'].text
//         }]} numberOfLines={1}>Tere Hawalee kr diya - Lofi remix</Text>
//         <Text style={[styles.miniplayerArtist, {
//             color: THEME[useColorScheme() ?? 'light'].grey
//         }]} numberOfLines={1}>Lofi Remix World</Text>
//     </View>
//     <View style={styles.play}>
//     <AntDesign name="pausecircleo" style={[styles.icon, {
//         color: THEME[useColorScheme() ?? 'light'].text,
//         display: "none"
//     }]} />
//     <AntDesign name="play" style={[styles.icon, {
//         color: THEME[useColorScheme() ?? 'light'].text,
//         // display: "none"
//     }]} />
//     <AntDesign name="stepforward" style={[styles.icon, {
//         color: THEME[useColorScheme() ?? 'light'].text
//     }]} />
//     </View>
//     </TouchableOpacity>
//     </>
//   )
// }

// export default Miniplayer