import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, useAnimatedValue} from "react-native";
import { SavedGigInfo } from './SavedGigInfo'

export const LikedGig = (props) => {

    const { eventos } = props;
    const { title, location, imageurl} = eventos;
    const [isInfoPressed, setIsInfoPressed] = useState(false);
    const [currentGig, setCurrentGig] = useState({});

    function handleInfoPress(props) {
        setIsInfoPressed(!isInfoPressed);
        setCurrentGig(props.eventos);
    }

    return (
        <View style={styles.column}>
            <View style={styles.separator}>
                <View style={styles.row}>
                    <Image style={styles.gigImage} source={{ uri: imageurl }}/>
                    <View style={styles.container}>
                        <Text style={styles.header}>{title}</Text>
                        <Text style={styles.text}>{location}</Text>
                    </View>
                    <View>
                        <Pressable style={styles.infoButton} onPress={()=> handleInfoPress(props)}>
                            <Image style={styles.infoButton} source={require('../assets/info.png')}/>
                        </Pressable>
                    </View>     
                </View>
                {isInfoPressed ?
                <View style={styles.infoArea}>
                     <SavedGigInfo currentGig={currentGig} />
                </View> 
                : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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