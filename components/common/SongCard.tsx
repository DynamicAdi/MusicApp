import {
  View,
  TouchableOpacity,
  Text,
  Image,
  useColorScheme,
  TouchableWithoutFeedback,
} from "react-native";
import res from "@/styles/common/common.style";
import { THEME } from "@/constants";
import { Entypo } from "@expo/vector-icons";
import { createContext, useState } from "react";
import { useRouter } from "expo-router";
import { States } from "@/hook/states";
// import MiniPlayer from "./MiniPlayer";
// import { useSongContext } from "@/context/songContext";
import useSavan from "@/hook/savan";


const SongCard = ({
  title,
  artist,
  imgUri,
  id,


}: {
  title: string;
  artist: string;
  imgUri: string;
  id: string;
  
}) => {
  const scheme = useColorScheme();
  const router = useRouter();
  const [isVisible, setVisible] = useState(false);
  const {setSongId} = States();

  return (
    <View style={res.container}>
              {/* <View style={[res.dotMenu, isVisible && {opacity: 1, zIndex: 1}]}>
    <View style={res.slider}>
     <TouchableOpacity><Text style={res.text}>Add to query</Text></TouchableOpacity>
     <TouchableOpacity><Text style={res.text}>Next Song</Text></TouchableOpacity>
    </View>
   </View> */}
      <TouchableOpacity
        style={[res.click, 
        ]}
        onPress={()=> {router.navigate(`../../player/${id}`), setSongId(id)}}
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
          <Text
            style={[res.artist, { color: THEME[scheme ?? "light"].grey }]}
            numberOfLines={1}
          >
           by {artist}
          </Text>
        </View>

        <View style={res.buttons}>
          <TouchableOpacity style={res.play}>
            <Entypo
              name="controller-play"
              size={30}
              style={{
                color: THEME[scheme ?? "light"].text,
              }}
            />
          </TouchableOpacity>
        
          <TouchableOpacity>
            <Entypo
              name="dots-three-vertical"
              size={20}
              style={{
                color: THEME[scheme ?? "light"].grey,
              }}
              />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

export default SongCard;
