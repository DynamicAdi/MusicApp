import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";

import res from "@/styles/common/common.style";
import { THEME } from "@/constants";
import Title from "@/components/Title";
import SongCard from "@/components/common/SongCard";
import AlbumCard from "@/components/common/AlbumCard";
import PlaylistCard from "@/components/common/PlaylistCard";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import Artist from "@/components/Artist";



const Results = ({ query, data, error, Loading, }: { query: string, data: any, error: boolean, Loading: boolean }) => {
  const DisplayData = ({ type }: { type: string }) => {
  const router:any = useRouter();
    return (
      <>
        <View>
          {Object.entries(data)[0] ? (
            <>
              <Text>
                {data[type].results.map((item: any) => {
                  return (
                    <View style={res.main} key={item.id}>
                      {type === "topQuery" && (
                        <>
                          {item.type === "song" && (                         
                            <SongCard
                              id={item.id}
                              title={item.title}
                              artist={item.primaryArtists}
                              imgUri={item.image[2].url}
                              />
                          )}
                          {item.type === "album" && (
                            <AlbumCard
                              id={item.id}
                              imgUri={item.image[2].url}
                              title={item.title}
                              year={item.year}
                              songCount={item.songIds}
                              desc={item.description}
                            />
                          )}
                          {item.type === "playlist" && (
                            <PlaylistCard
                              id={item.id}
                              title={item.title}
                              imgUri={item.image[2].url}
                              desc={item.description}
                            />
                          )}
                          {item.type === "artist" && <Artist id={item.id} title={item.title} imgUri={item.image[2].url} />}
                        </>
                      )}

                      {type === "songs" && (
                            <SongCard
                              id={item.id}
                              title={item.title}
                              artist={item.primaryArtists}
                              imgUri={item.image[2].url}
                              />
                      )}
                      {type === "albums" && (
                        <AlbumCard
                          id={item.id}
                          imgUri={item.image[2].url}
                          title={item.title}
                          year={item.year}
                          songCount={item.songIds}
                        />
                      )}
                      {type === "playlists" && (
                        <PlaylistCard
                          id={item.id}
                          title={item.title}
                          imgUri={item.image[2].url}
                          desc={item.description}
                        />
                      )}
                      {type === "artists" && (
                        <Artist
                          id={item.id}
                          imgUri={item.image[2].url}
                          title={item.title}
                        />
                      )}
                    </View>
                  );
                })}
              </Text>
            </>
          ) : (
            <></>
          )}
        </View>
      </>
    );
  };

  const scheme = useColorScheme();
  return (
    <>
      {Loading ? (
        <ActivityIndicator />
      ) : error ? <Text>{error}</Text> : (
        <View style={res.main}>
        {data.topQuery && (
        <>
          <Title title="Top Results" />
          <DisplayData type="topQuery" />
        </>)}
        
      { data.songs && (<>
        <Title title="Songs" />
          <DisplayData type="songs" />  
      </>)}

        {data.albums && (<>
          <Title title="Albums" />
          <DisplayData type="albums" />
        </>)}
        {data.playlists && (
        <>
          <Title title="Playlist" />
          <DisplayData type="playlists" />
        </>
        )}
        {data.artists && (<>
          <Title title="Artists" />
          <DisplayData type="artists" />
        </>)
        }
        </View>
      )}
        {/* <View style={res.miniPlayer}>
        <MiniPlayer />
        </View> */}
    </>
  );
};

export default Results;
