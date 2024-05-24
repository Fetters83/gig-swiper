import { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, useAnimatedValue} from "react-native";

export const LikedGig = (props) => {

    const {toggleGigInfoVisible, eventos, currentGig} = props
    const { title, location, imageurl, description, eventname, doorsopening, doorsclosing} =eventos 
    const [isInfoPressed, setIsInfoPressed] = useState(false)
    function handleInfoPress() {
        setIsInfoPressed(true)
        return isInfoPressed ? console.log('sorta works') : null
    }

    return (
        <View style={styles.separator}>
            <Image style={styles.gigImage} source={{ uri: imageurl }}/>
            <View style={styles.container}>
                <Text style={styles.header}>{title}</Text>
                <Text style={styles.text}>{location}</Text>
            </View>
            <View>
            <Pressable style={styles.infoButton} onPress={handleInfoPress}>
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