import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";



export function SearchScreen() {


    const navigation = useNavigation();

    return (
        <View>
            <Text>Search Screen</Text>
            <Button 
            title={"Go to Profile"}
            onPress={()=>{ navigation.navigate("Profile")}}/>
        </View>
    )
}