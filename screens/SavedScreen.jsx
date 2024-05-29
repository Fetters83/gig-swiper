import { View, Text, ScrollView, Image } from "react-native";
import { LikedGig } from "../components/LikedGig";
import { useContext } from "react";
import { LikedGigContext } from "../contexts/LikedGigContext";
import getLikedGigs from "../getLikedGigs";
import { getAuth } from "firebase/auth";
import { UserContext } from "../contexts/UserContext";
import { StyleSheet } from "react-native";

export function SavedScreen({toggleGigInfoVisible}) {

    const {likedGigs, setLikedGigs}= useContext(LikedGigContext) 



    return (
        <>
        {likedGigs.length === 0 ?
        
        <>
        <Image style={styles.savedScreenLogo} source={require('../assets/rock-on.png')} />
        <Text style={styles.addSaved}>You have no saved gigs yet...</Text>
        </>
        :
        <ScrollView>
            {likedGigs.map((eventos)=>{
                return <LikedGig key={eventos.id} eventos={eventos} toggleGigInfoVisible={toggleGigInfoVisible}/>
            })}
   
        </ScrollView>
} 
</>
        )
}

const styles = StyleSheet.create({
        savedScreenLogo: {
            justifyContent: 'center',
            width: '40%',
            height: '40%',
        },
        addSaved: {
            margin: 40,
            fontSize: 30,
            textAlign: 'center',
    }
})