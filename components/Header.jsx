import { StyleSheet, Text, View } from "react-native";

export function Header() {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>COMPONENT_HEADER</Text>
            <Text style={styles.text}>COMPONENT TEXT</Text>
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
