import { COLORS, SIZES } from "@/constants";
import { Dimensions, StyleSheet } from "react-native";
import { global } from "../global.style";

const mini = StyleSheet.create({
    container: {
        ...global.player,
        width: 250,
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
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
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
        marginTop: 3,
        paddingHorizontal: 3,
        paddingBottom: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lyricsText: {
        fontFamily: 'Inter-semi',
        textAlign: "left",
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
        justifyContent: 'space-around',
        width: "95%",
        gap: 0
    },
    bridge: {
        width: "75%",
        // marginTop: 4,
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
        padding: 11,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Right Side
    right: {
        width: "25%",
        height: "100%",
        padding: 8,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
});

export default mini;