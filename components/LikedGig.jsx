import { useEffect, useState } from "react";
import { Text, View, Image, Pressable, useAnimatedValue} from "react-native";
import { SavedGigInfo } from './SavedGigInfo'
import { styles } from "./LikedGigs.style";

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