import { View, Text, Button, Pressable, Modal } from "react-native";
import { GigDetails } from "../components/GigDetails";
import LogOutButton from "../components/LogOutButton";
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
            <LogOutButton/>
            <Pressable onPress={toggleGigInfoVisible}>
                <Text>hit me</Text>
            </Pressable>
            <Modal animationType="slide" transparent={true} visible={gigInfoVisible}><Text>I'm your modal :D</Text></Modal>
            <GigDetails visible={gigInfoVisible}/>
        </View>
    )
}