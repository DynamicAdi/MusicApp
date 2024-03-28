import { View, Text, TouchableOpacity, Image, useColorScheme, FlatList } from "react-native";
import React from "react";
import main from "@/styles/SerMain.style";
import Title from "@/components/Title";
import { Overlay } from "@/components/Gradient";
import useSavan from "@/hook/savan";
import { THEME } from "@/constants";
import RecentSearch from "./recent";
import Results from "./Results";


const Main = ({query, setQuery, refetch}: {
  query: string  
  setQuery: any,
    refetch: any
}) => {
  const handle = (term:string) => {
    setQuery(term);
    refetch();
    
  }
  return (
<>
    <View style={main.container}>
    <View style={{
        paddingHorizontal: 6
    }}>

    <Title title="Recent Search" />
    <RecentSearch query={query} setQuery={setQuery} refetch={refetch}/>
    
    <Title title="Catogery" />
    </View>
    {/* 1st Container */}
      <View style={main.child}>
        <TouchableOpacity style={main.boxes} onPress={() => {
          handle('Hip Hop')
        }}>
        <Image
            style={main.Image}
        source={{uri: "https://source.unsplash.com/hiphop-graffiti-Qcl98B8Bk3I"}}
        />
        <View style={main.content}>
        <Overlay>
            <Text style={main.text}>Hip Hop</Text>
        </Overlay>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => handle('Lofi')}
          style={[
            main.boxes,
            {
                backgroundColor: "blue",
                width: "60%",
            },
        ]}
        >
             <Image
            style={main.Image}
        source={require("@/assets/images/lofi.jpg")}
        />
                <View style={main.content}>
        <Overlay>
            <Text style={main.text}>Lofi</Text>
        </Overlay>
        </View>
        </TouchableOpacity>
      </View>

      <View style={main.child}>
        <View
          style={[
              main.child,
              {
                  justifyContent: "flex-start",
                  marginTop: 0,
                  gap: 8,
                  width: "55%",
                },
          ]}
          >
          <TouchableOpacity
            style={[
              main.boxes,
              {
                  width: "100%",
                height: 100,
              },
            ]}
          >
            <Image style={main.Image} source={{
            uri: "https://source.unsplash.com/white-plastic-cup-on-white-sand-beach-during-daytime-6UhgG8kpg6U"
        }}/>
        <View style={main.content}>
        <Overlay>
            <Text style={main.text}>Relax</Text>
        </Overlay>
        </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
                main.boxes,
                {
                    width: "100%",
                height: 90,
            },
        ]}
          >
            <Image style={main.Image} source={{
            uri: "https://source.unsplash.com/greyscale-photo-of-man-playing-spinet-piano-close-up-photo-F8E2tks5N04"
        }}/>
        <View style={main.content}>
        <Overlay>
            <Text style={main.text}>Soft</Text>
        </Overlay>
        </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            main.boxes,
            {
              width: "40%",
              height: 200,
            },
        ]}
        >

            <Image style={main.Image} source={{
            uri: "https://source.unsplash.com/person-playing-cielo-black-and-white-photography-vSws0g1KjxI"
        }}/>
        <View style={main.content}>
        <Overlay>
            <Text style={main.text}>Classic</Text>
        </Overlay>
        </View>
        </TouchableOpacity>
      </View>

      <View style={main.child}>
        <TouchableOpacity style={[main.boxes, {
            width: "96%",
        }]}>
                   <Image style={main.Image} source={{
            uri: "https://source.unsplash.com/woman-singing-on-stage-hTv8aaPziOQ"
        }}/>
        <View style={main.content}>
        <Overlay>
            <Text style={main.text}>Dance</Text>
        </Overlay>
        </View>
        </TouchableOpacity>
      </View>
    </View> 
            
            
</>
  );
};

export default Main;
