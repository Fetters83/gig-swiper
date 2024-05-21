import { View, Text, Button, Pressable, Modal } from "react-native";
import { GigCard } from "../components/GigCard";
import LogOutButton from "../components/LogOutButton";
import { useContext } from "react";
import GigInfoVisibleContext from "../contexts/GigInfoVisibleContext";
import { GigInfoModal } from "../components/GIgInfoModal";
import { StyleSheet } from "react-native";


export function SearchScreen() {
    const { gigInfoVisible, setGigInfoVisible } = useContext(GigInfoVisibleContext)
    
    function toggleGigInfoVisible() {
        setGigInfoVisible(!gigInfoVisible)
    }

    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
            <LogOutButton/>
            <Pressable onPress={toggleGigInfoVisible}>
                <Text>hit me</Text>
            </Pressable>
            {gigInfoVisible ? <GigInfoModal gigInfoVisible={gigInfoVisible}/> :
            <GigCard visible={gigInfoVisible}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    }
  });
  