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
    const [currentGig, setCurrentGig] = useState({})
    const [stackNumber, setStackNumber] = useState(0)


    /* const eventArtistInfo = {}
    if(currentGig.artists[0]) {

        eventArtistInfo.name = currentGig.artists[0].name
        eventArtistInfo.spotifyUrl = currentGig.artists[0].spotifymp3url
      
        }
       
    
    
    console.log(eventArtistInfo) */
    
useEffect(()=>{
    getAllEvents().then((data)=>{
    setEvents(data)}
)   
},[])

useEffect(()=>{
    setStackNumber(0)
 
},[gigStack])

    function toggleGigInfoVisible() {
        setGigInfoVisible(!gigInfoVisible)
    }

    return (
        <View style={styles.container}>
            {gigInfoVisible ? <GigInfoModal stackNumber={stackNumber} currentGig={currentGig} gigInfoVisible={gigInfoVisible} toggleGigInfoVisible={toggleGigInfoVisible}/> :
            <GigCard stackNumber={stackNumber} setStackNumber={setStackNumber} setCurrentGig={setCurrentGig} toggleGigInfoVisible={toggleGigInfoVisible} visible={gigInfoVisible}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    }
  });
  