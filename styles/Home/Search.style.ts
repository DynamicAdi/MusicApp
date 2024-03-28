import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parent: {
        flexDirection: "row",
        paddingVertical: 20,
        paddingBottom: 0,
        gap: 10,
        width: "85%",
    },
    searchBar: {
        width: "85%",
        padding: 10,
        borderRadius: 10, 
    },
    searchButton: {
        padding: 10,
        paddingHorizontal: 13,
        borderRadius: 10,
        
    },
    focusedInput: {
        borderColor: COLORS.White,
        borderWidth: 1
    },
    searchBtnText: {
        color: COLORS.White
    }
})

export default styles