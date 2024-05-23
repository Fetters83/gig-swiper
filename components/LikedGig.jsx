import { StyleSheet, Text, View, Image, Pressable} from "react-native";

export const LikedGig = ({toggleGigInfoVisible}) => {
     
    return (
        <View style={styles.separator}>
            <Image style={styles.gigImage} source={{ uri: 'https://d31fr2pwly4c4s.cloudfront.net/d/6/f/1739150_d3263fcd_ibiza-proms-in-manchester-cathedral_1024.jpg' }}/>
            <View style={styles.container}>
                <Text style={styles.header}>Paul McCartney's Hologram</Text>
                <Text style={styles.text}>Manchester Academy</Text>
            </View>
            <View>
            <Pressable style={styles.infoButton} onPress={toggleGigInfoVisible}>
              <Image style={styles.infoButton} source={require('../assets/info.png')}/>
            </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    separator: {
        backgroundColor: '#fff',
        flexDirection: 'row',
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
    }
});