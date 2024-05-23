import { View, Text, Button, Pressable, Modal, FlatList, SafeAreaView } from "react-native";
import { GigCard } from "../components/GigCard";
import { useContext, useEffect, useState } from "react";
import GigInfoVisibleContext from "../contexts/GigInfoVisibleContext";
import { GigInfoModal } from "../components/GIgInfoModal";
import { getAllEvents } from "../api";
import { StyleSheet } from "react-native";
import { GigStackContext } from "../contexts/GigStackContext";


export function SearchScreen() {
    const { gigInfoVisible, setGigInfoVisible } = useContext(GigInfoVisibleContext)
    const [events ,setEvents] = useState([])
    const { gigStack } = useContext(GigStackContext)
    
useEffect(()=>{
    getAllEvents().then((data)=>{
    setEvents(data)}
)   
},[])

    function toggleGigInfoVisible() {
        setGigInfoVisible(!gigInfoVisible)
    }

    return (
        <View style={styles.container}>
            {gigInfoVisible ? <GigInfoModal gigInfoVisible={gigInfoVisible} toggleGigInfoVisible={toggleGigInfoVisible}/> :
            <GigCard toggleGigInfoVisible={toggleGigInfoVisible} visible={gigInfoVisible}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    }
  });
  