import React, { useState } from "react";
import { Stack } from "expo-router";
import SearchBar from "@/components/SearchBar";
import Pills from "@/components/Pills";
import { SafeAreaView, ScrollView, Text, Touchable, TouchableOpacityComponent, TouchableWithoutFeedback, View } from "react-native";
import Results from "./Results";
import Main from "./Main";
import useSavan from "@/hook/savan";


const Search = () => {
  const tabs = ["Savan", "Youtube", "myMusic"];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [query, setQuery] = useState("");
  const [isVisible, setVisible] = useState(false);

  const { data, error, Loading, refetch } = useSavan("search", query);

  return (
    <>
      <SafeAreaView style={{ paddingVertical: 15 }}>
        <ScrollView>
          <Stack.Screen
            options={{
              headerTitle: "Let's find something",
              headerTitleStyle: { fontSize: 30 },
              headerShadowVisible: false,
              headerShown: true,
              headerTitleAlign: "center",
            }}
          />
          <View
            style={{
              paddingHorizontal: 10,
              paddingLeft: 0,
              paddingVertical: 20,
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 30,
                marginLeft: 10,
              }}
            >
              <Pills
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </View>

                
            <SearchBar
                  activeTab={activeTab}
                  query={query}
                  setQuery={setQuery}
                  refetch={refetch}
                />
          </View>
          {query==="" ? <Main 
          refetch={refetch}
          setQuery={setQuery}
          query={query}
          /> :  ( //ToDo: Convert into catogery specific. 
            <>
            {activeTab==="Savan" ? (
            // <TouchableOpacityComponent onPress={() => setVisible(!isVisible)}>
            <Results
            query={query}
            data={data}
            error={error}
            Loading={Loading}
            />
              // </TouchableOpacityComponent>
            )
             : <Text>Not Implemented Yet</Text>}
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Search;
