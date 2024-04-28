import {
    View,
    ScrollView,
    Text,
  } from "react-native";
  import React, { useState } from "react";
  
  import styles from "@/styles/Home/Home.style";
  import Head from "@/components/Head";
import Pills from "@/components/Pills";
import Savan from "@/components/savan/Savan";
import Artist from "@/components/Artist";
import MiniPlayer from "@/components/common/MiniPlayer";
// import MiniPlayer from "@/components/common/MiniPlayer";
  
const tabs = [
  "Savan",
  "Youtube",
  "myMusic",
]

  export default function index() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const displayTab = () => {
     switch (activeTab) {
      case "Savan":
        return <Savan />;
        case "Youtube":
          return <Text>yt</Text>;
          case "myMusic":
            return <Text>my</Text>;
           
      default:
        break;
     }
    }



    return (
      <>
      <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
      <View>
          <Head />
      </View>
      <View>
          <Pills 
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          />
          {displayTab()}
      </View>
      </ScrollView>
      {/* <View style={styles.miniplayer}> */}
        {/* <MiniPlayer /> */}
      {/* </View> */}
        </View>
      </>
    );
  }