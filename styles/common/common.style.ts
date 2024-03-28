import { SIZES } from "@/constants";
import { Dimensions, StyleSheet } from "react-native";
import { global } from "../global.style";

const {width, height} = Dimensions.get('window');

 const res = StyleSheet.create({
    container: {
        width: width - 25,
        height: 60,
        alignItems: 'center',
        padding: 0,
        borderRadius: 10,
        marginVertical: 6,
        marginHorizontal: 6,
        position: 'relative',
        // backgroundColor: 'red'
    },
    miniPlayer: {
        ...global.container,
    },
    dotMenu: {
        position: 'absolute',
        width: 160,
        opacity: 0,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        right: 8,
        top: 10,
        // zIndex: 99
    },
    slider: {
        paddingVertical: 8,
        // paddingBottom: 12,
    },
    text: {
        fontFamily: 'pop-med',
        color: 'white',
        fontSize: 16
    },
    click: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        gap: 0,
    },
    album: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        gap: 8,
    },

    imgParent: {
        width: 55,
        marginLeft: 4,
        height: '90%',
    },
    imgMain: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        objectFit: 'cover'
    },
    content: {
        height: '90%',
        width: "55%",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 0,
        position: 'relative',
    },
    title: {
        fontSize: 16,
        fontFamily: 'pop-med'
    },
    artist: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: -0,
        paddingVertical: 2,
    },
    play: {
        borderRadius: 10,
    },
    albSide: {
        position: 'absolute',
        right: 4,
        top: 20,
    },
    buttons: {
        height: '100%',
        width: 70,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    // parent Container
    main: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
})

export default res