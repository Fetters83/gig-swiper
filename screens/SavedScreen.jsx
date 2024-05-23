import { View, Text, ScrollView } from "react-native";
import { LikedGig } from "../components/LikedGig";


export function SavedScreen({toggleGigInfoVisible}) {
    return (
        <ScrollView>
            <Text>Saved Screen</Text>
            <LikedGig toggleGigInfoVisible={toggleGigInfoVisible}/>
        </ScrollView>
    )
}