import { StyleSheet, Text, View } from "react-native";

export function GigCard() {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>GIG CARD HERE</Text>
            <Text style={styles.text}>Swipe or click info</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",    },
    header: {
      fontSize: 20,
    },
    text: {
        fontSize: 14,
    }
  });
  