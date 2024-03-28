import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

const main = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  pills: {
    width: '100%',
    padding: 10,
    paddingHorizontal: 0,
    flexDirection: 'row',
    gap: 10,
    flexWrap: "wrap",
    overflow: 'hidden'
  },
  pill: {
    height: 30,
    borderRadius: 30,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 0,

  },
  pillText: {
    fontFamily: 'pop-med',
    fontSize: 15
  },
  child: {
    flexDirection: "row",
    flexWrap: "wrap",
   justifyContent: 'center',
    marginTop: 8,
    gap: 8,
    overflow: 'hidden'
  },
  boxes: {
    width: '35%',
    height: 130,
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ffffff50'
  },
  Image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10
  },
  content: {
    position: 'absolute',
    width: "100%",
    // height: '100%',
    bottom: 0,
    right: 0
  },
  text: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Inter-semi',
    paddingBottom: 8,
  }

});

export default main;