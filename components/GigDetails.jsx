import { StyleSheet, Text, View } from "react-native";

export function GigDetails() {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Component Header</Text>
            <Text style={styles.text}>Component Text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      fontSize: 20,
    },
    text: {
        fontSize: 14,
    }
  });
  