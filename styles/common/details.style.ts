import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // marginTop: 40,
        width: "100%",
        height: "100%",
    },
    bgImg: {
        width: "100%",
        height: 380,
        position: 'relative',
        backgroundColor: 'grey',
        marginBottom: 5,
    },
    shadow: {
        position: "absolute",
        width: "100%",
        height: 380,
        backgroundColor: "rgba(0,0,0,0.3)",
        marginBottom: 5,

    },
    content: {
        height: "100%",
        justifyContent: "space-between",
        padding: 35,
        paddingHorizontal: 8,
        paddingBottom: 20,
    },
    context: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: 'red'
    },
    title: {
        color: "white",
        fontFamily: 'pop-semi',
        fontSize: 30,
        marginBottom:-3
    },
    subTitle: {
        fontSize: 16,
        color: "#e9e9e9",
        fontFamily: 'Inter-reg',
    },
    btn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '45%',
        height: '100%',
        gap: 8,
        marginRight: 5,
    },
    BtnBg: {
        width: "45%",
        paddingVertical: 5,
        backgroundColor: "rgba(255,255,255,0.4)",
        borderRadius: 10,
        alignItems: 'center'
    }

})

export default styles;