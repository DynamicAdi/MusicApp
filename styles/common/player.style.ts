import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    player: {
        width: "100%",
        height: "100%",

    },
    bgImgContainer: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        bottom: 0,
        // justifyContent: 'space-between',
    },
    bgImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    upperMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    content: {
        height: "100%",
        position: 'absolute',
        padding: 20,
        paddingVertical: 40,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    mainComponents: {
        width: '100%',
        height: "40%",
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        position: 'relative',
    },
    track: {
        width: '90%',
        height: "100%",
        borderRadius: 400,
        elevation: 12, 
    },
    trackImage: {
        width: '100%',
        height: '100%',
        borderRadius: 500,
        objectFit: 'cover',
    },
    lyrics: {
        width: '100%',
        height: "100%",
        paddingHorizontal: 20,
        paddingBottom: 4,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0
    },
    lyricsText: {
        fontFamily: 'Inter-semi',
        textAlign: "center",
        fontSize: 21,
        color: "white",
        letterSpacing: -0.2
    },
    functionalButtonsContainer: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    backOfIcon: {
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        borderRadius: 50,
    },
    fonts: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    title: {
        fontSize: 21,
        color: 'white',
        fontFamily: 'pop-med',
    },
    subTitle: {
        fontSize: 18,
        color: '#878787',
        fontFamily: 'pop-reg'
    },
    controller: {
        width: '100%',
        height: 25,
        justifyContent: 'space-between',
        marginTop: 8,
    },
    progress: {
        width: "100%",
        height: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    duration: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    musicController: {
        width: "75%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // gap: 10,
        marginTop: 25
    },
    playPause: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }



})

export default styles