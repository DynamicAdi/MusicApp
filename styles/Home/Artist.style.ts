import { StyleSheet } from "react-native";
import { global } from "../global.style";
import { SIZES } from "@/constants";


const artist = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    content: {
        width: 100,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 12
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: 'cover',
        borderRadius: 12
    },
    text: {
        width: '100%',
        textAlign: 'center',
        fontSize: SIZES.small,
        fontFamily: 'pop-reg',
        marginTop: 6,
    },
})

export default artist