import { View, Text, Button } from "react-native";
import { GigDetails } from "../components/GigDetails";
import LogOutButton from "../components/LogOutButton";

export function SearchScreen() {
    return (
        <View>
            <Text>Search Screen</Text>
            <LogOutButton/>
            <GigDetails />
        </View>
    )
}