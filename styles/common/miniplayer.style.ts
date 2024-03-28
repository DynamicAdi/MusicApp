import { COLORS, SIZES } from "@/constants";
import { Dimensions, StyleSheet } from "react-native";
import { global } from "../global.style";
const {width, height} = Dimensions.get("window");
const mini = StyleSheet.create({
    container: {
        ...global.player,
        // width: width * 2 / 3,
        width: 260,
        height: 160,
        borderRadius: 10,
        backgroundColor: 'red',
    },
    imgParent: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        backgroundColor: 'blue'
    },
    img: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        objectFit: 'cover'
    },
    content: {
        position: "absolute",
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: "100%",
        height: "100%",
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    left: {
        width: "75%",
        paddingHorizontal: 6,
        
    },
    lyrics: {
        width: '100%',
        height: "98%",
        paddingHorizontal: 10,
        // overflow: '',
        paddingBottom: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lyricsText: {
        fontFamily: 'Inter-semi',
        textAlign: "center",
        fontSize: 16,
        color: "white",
        letterSpacing: -0.8
    },
    context: {
        height: "100%",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 5,
    },

    upper: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    label: {
        color: '#c7c7c7',
        fontSize: SIZES.small,
        fontFamily: 'pop-reg',
        fontWeight: "300",
    },
    middle: {

    },
    title: {
        color: 'white',
        fontSize: SIZES.extraLarge,
        fontFamily: 'pop-semi',
        lineHeight: 23
    },

    lower: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "95%",
        gap: 3
    },
    bridge: {
        width: "75%",
        marginTop: 4,
    },
    progress: {
        width: "100%",
        height: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 10,
        position: 'relative',
        overflow: 'hidden'
    },
    bar: {
        position: 'absolute',
        width: "70%",
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    time: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
    },
    duration: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'pop-reg',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        gap: 10
    },
    btnBg: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 50,
        padding: 13,
        // paddingHorizontal: 13,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Right Side
    right: {
        width: "25%",
        height: "100%",
        // backgroundColor: 'green',
        padding: 8,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
});

export default mini;