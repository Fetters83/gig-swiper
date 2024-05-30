import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    separator: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
    },
    gigImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    container: {
        flex: 1,
        paddingLeft: 5,
        justifyContent: 'center',
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
        color: '#2f4f4f',
        marginTop: 3,
    },
    infoButton: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        objectFit: 'contain',
        alignItems: 'flex-end'
    },
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    infoArea: {
        margin: 20,
    },
});