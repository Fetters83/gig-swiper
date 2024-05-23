import { View, Text, ScrollView } from "react-native";
import { LikedGig } from "../components/LikedGig";
import { useContext } from "react";
import { LikedGigContext } from "../contexts/LikedGigContext";


export function SavedScreen({toggleGigInfoVisible}) {

const {likedGigs}= useContext(LikedGigContext)

 
    

    return (
        <ScrollView>
            {likedGigs.map((eventos)=>{
                return <LikedGig key={eventos.id} eventos={eventos} toggleGigInfoVisible={toggleGigInfoVisible}/>
            })}
   
        </ScrollView>
    )
}