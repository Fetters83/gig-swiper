import { StyleSheet, Text, View, Image, Pressable} from "react-native";

export const LikedGig = (props) => {
   const {toggleGigInfoVisible, eventos} = props
   const { title, location, imageurl } =eventos
   console.log(title)
    return (
        <View style={styles.separator}>
            <Image style={styles.gigImage} source={{ uri: imageurl }}/>
            <View style={styles.container}>
                <Text style={styles.header}>{title}</Text>
                <Text style={styles.text}>{location}</Text>
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