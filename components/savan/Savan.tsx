import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  useColorScheme,
} from "react-native";
import React from "react";
import homePage from "@/hook/HomePage";
import { THEME } from "@/constants";
import Trending from "../Trending";

const Savan = () => {
  const scheme = useColorScheme();
  const { data, error, Loading, refetch }: {
    data: any,
    error: boolean,
    Loading: boolean,
    refetch: () => void,
  } = homePage();
  return (
    <View>
      {Loading ? (
        <View style={{ justifyContent: "center", alignItems: "center", width: '100%', height: '100%'}}>
        <ActivityIndicator
        color={THEME[scheme ?? "light"].text}
        size={60}
        />
      </View>
      ) : error ? (
        <View style={{ justifyContent: "center", alignItems: "center", width: '100%', height: '100%'}}>
          <Text
            style={{
              fontSize: 40,
              textAlign: "center",
              color: THEME[scheme ?? "light"].text,
            }}
          >Something went wrong, try again a bit later😥</Text>
        </View>
      ) : (
        <>
        {/* <Text style={{ color: "white" }}>Aslam walekum</Text> */}
        <Trending />
        </>

      )}
    </View>
  );
};

export default Savan;
