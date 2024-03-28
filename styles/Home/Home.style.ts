import { Dimensions, StyleSheet, useColorScheme } from "react-native";
import { global } from "../global.style";

import { COLORS, SIZES, THEME } from '@/constants/Colors';

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    miniplayer: {
        position: "absolute",
        bottom: 20,
        left: 8,
        width: width,
        zIndex: 2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        paddingBottom: 10
    },
    container: {
        ...global.container,
        flex: 1
    },
    subText: {
        color: COLORS.secondary,
    },
    subHead: {
        fontSize: SIZES.xl,
        marginTop: -8,
        fontFamily: 'Inter-reg',
        letterSpacing: -1,
        marginBottom: 20,
        // marginLeft: 10,
    },
    parent: {
        gap: 2,
        flexDirection: "row",
    },
    serverSelection: {
        width: 130,
        paddingHorizontal: 0,
        borderRadius: SIZES.xxxl,
        paddingBottom: 0,
        paddingTop: 4,
        backgroundColor: THEME.light.Ui
        // backgroundColor: COLORS.red_bg,
        // backgroundColor: COLORS.green_bg
        // backgroundColor: COLORS.purple_bg
    },
    text: {
        fontSize: SIZES.extraLarge,
        textAlign: "center",
        fontFamily: 'pop-med',
        // color: COLORS.red_text
        // color: COLORS.primary

    }
})

export default styles;