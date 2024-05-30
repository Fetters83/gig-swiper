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
        <View style={styles.container}>
        <Image style={styles.savedScreenLogo} source={require('../assets/rock-on.png')} />
        <Text style={styles.addSaved}>You have no saved gigs yet...</Text>
        </View>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    savedScreenLogo: {
        width: '80%',
        height: '40%',
        resizeMode: 'contain',
        marginVertical: '-15%'
    },
    addSaved: {
        margin: 40,
        fontSize: 30,
        textAlign: 'center',
    },
});