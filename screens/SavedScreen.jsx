import { View, Text, ScrollView } from "react-native";
import { LikedGig } from "../components/LikedGig";
import { useContext } from "react";
import { LikedGigContext } from "../contexts/LikedGigContext";
import getLikedGigs from "../getLikedGigs";
import { getAuth } from "firebase/auth";
import { UserContext } from "../contexts/UserContext";

export function SavedScreen({toggleGigInfoVisible}) {

    const {likedGigs, setLikedGigs}= useContext(LikedGigContext) 



    return (
        <ScrollView>
            {likedGigs.map((eventos)=>{
                return <LikedGig key={eventos.id} eventos={eventos} toggleGigInfoVisible={toggleGigInfoVisible}/>
            })}
   
        </ScrollView>
    )
}