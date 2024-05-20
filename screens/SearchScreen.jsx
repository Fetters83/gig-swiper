import { View, Text, Button, Pressable } from "react-native";
import { GigDetails } from "../components/GigDetails";
import { useContext } from "react";
import GigInfoVisibleContext from "../contexts/GigInfoVisibleContext";

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
            {gigInfoVisible && <GigDetails />}
        </View>
    )
}