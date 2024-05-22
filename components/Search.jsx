import { StyleSheet, Text, TextInput, View } from "react-native";


export function Search() {

  
    return (
        <View style={styles.container}>
            <TextInput placeholder="hello..."></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 180,
  }
});
