import { View, Text, Button, Pressable, Modal, FlatList, SafeAreaView } from "react-native";
import { GigCard } from "../components/GigCard";
import { useContext, useEffect, useState } from "react";
import GigInfoVisibleContext from "../contexts/GigInfoVisibleContext";
import { GigInfoModal } from "../components/GIgInfoModal";
import { getAllEvents } from "../api";


export function SearchScreen() {
    const { gigInfoVisible, setGigInfoVisible } = useContext(GigInfoVisibleContext)
    const [events ,setEvents] = useState([])
    
useEffect(()=>{
    getAllEvents().then((data)=>{
        console.log(data)
    setEvents(data)}
)
    

},[])

    function toggleGigInfoVisible() {
        setGigInfoVisible(!gigInfoVisible)
    }

    return (<View>
        <FlatList data={events}
        renderItem={({item})=> <Text>{item.eventname}</Text>}
        
        
        />
            
            

        

            <Pressable onPress={toggleGigInfoVisible}>
                <Text>hit me</Text>
            </Pressable>
            {gigInfoVisible ? <GigInfoModal gigInfoVisible={gigInfoVisible}/> :
            <GigCard visible={gigInfoVisible}/>}
        </View>
    )
}