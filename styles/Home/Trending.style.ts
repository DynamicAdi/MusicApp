import { COLORS, SIZES } from '@/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    parent: {
        justifyContent: "center",
        alignItems: "center",
    },
    cardContainer: {
        
        borderRadius: 10,
        width: 230,
        padding: 8,
        marginBottom: 10,
        position: "relative"
    },
    cardImage: {
        width: '100%',
        height: 130,
        borderRadius: 10,
        marginBottom: 10,
        objectFit: "cover"
    },
    context: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 4,
        marginVertical: 6,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 0,
    },
    cardArtist: {
        fontSize: 16,
        color: '#888',
        marginBottom: 5,
    },
    view: {
        fontFamily: "Inter-reg",
        fontSize: 12,
        color: COLORS.accent

    },
    divider: {
        color: COLORS.Black,
        fontFamily: "Inter-semi"
    },
    duration: {
        fontFamily: "Inter-reg",
        fontSize: 12,
        color: COLORS.secondary
    },
    cardButton: {
        padding: 10
    },
    icon: {
        color: COLORS.Black,
        fontSize: 28
    },
    cardButtonText: {
        color: '#fff',
        fontSize: 34,
        fontWeight: 'bold',
    },
    check: {
        position: 'absolute',
        bottom: 3,
        right: 5,
        borderRadius: 0
    }
});

export default styles;
