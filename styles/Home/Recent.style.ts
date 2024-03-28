import { COLORS, SIZES, THEME } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        gap: 8,
        flexWrap: 'wrap',
        marginVertical: 12,
        
    },
    card: {
        position: 'relative',
        // marginVertical: 4,
        justifyContent: 'flex-start',
        alignContent: 'center',
        // flexDirection: 'row',
        // gap: 8,
        borderRadius: SIZES.small,
        width: 150,
        height: 150,
        backgroundColor: COLORS.danger,
        overflow: 'hidden',
    },
    content: {
        // padding: 4,
        position: 'absolute',
        width: 150,
        height: 70,
        bottom: 0,
    },
    context: {
        padding: 6,
        paddingTop: 0,
    },
    img: {
        width: "100%",
        height: "100%"
    },
    SongImage: {
        width: "100%",
        resizeMode: 'cover',
        height: "100%",
        borderRadius: 10,
    },
    SongName: {
        fontSize: SIZES.large,
        fontFamily: "pop-reg",
        color: COLORS.White,
    },
    Artist: {
        marginTop: -6,
        color: COLORS.LightUi,
        fontSize: SIZES.medium,
    },
    time: {
        marginTop: 4,
        color: COLORS.LightUi,
        fontFamily: "pop-med",
        fontSize: 14
    },

    PlayButton: {
        position: 'absolute',
        right: 10,
        bottom: 10
    },
    innner: {
        fontSize: 30,
        color: COLORS.White
    }

    });

export default styles;