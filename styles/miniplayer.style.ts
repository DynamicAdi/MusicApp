import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fullScreen: {
    maxHeight: "100%",
    backgroundColor: 'red',
    // height: ,
    width: "98%",

  },
  container: {
    flex: 1,
    // position: 'absolute',
    top: 0,
    left: 0,
    width: "95%",
    height: 60,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'row',

  },
  content: {
    width: "58%",
    paddingVertical: 2,
    height: "100%",
    // backgroundColor: 'red',
    alignItems: "flex-start",
      },
      play: {
        width: "25%",
        borderRadius: 10,
        height: "100%",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
      },
    icon: {
        fontSize: 28,
        padding: 5,
    },
  miniplayer: {
    borderRadius: 40,
    width: 52,
    height: 52,
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  miniplayerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
    objectFit: "cover",
    
    
  },
  miniplayerArtist: {
    fontSize: 10,
    marginLeft: 2,
    color: COLORS.Black,
    fontFamily: "Inter-reg",
},
miniplayerTitleText: {
    fontSize: 14,
    fontFamily: "pop-reg",
  },
  miniplayerButton: {
    marginLeft: 10,
  },
});

export default styles;