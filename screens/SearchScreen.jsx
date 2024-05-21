import { View, Text, Button, Pressable, Modal } from "react-native";
import { GigCard } from "../components/GigCard";
import { useContext } from "react";
import GigInfoVisibleContext from "../contexts/GigInfoVisibleContext";
import { GigInfoModal } from "../components/GIgInfoModal";

export function SearchScreen() {
    const { gigInfoVisible, setGigInfoVisible } = useContext(GigInfoVisibleContext)
    
    function toggleGigInfoVisible() {
        setGigInfoVisible(!gigInfoVisible)
    }

    return (
        <View>
            <Text>Search Screen</Text>
            <Pressable onPress={toggleGigInfoVisible}>
                <Text>hit me</Text>
            </Pressable>
            {gigInfoVisible ? <GigInfoModal gigInfoVisible={gigInfoVisible}/> :
            <GigCard visible={gigInfoVisible}/>}
        </View>
    )
}