import { Image, StyleSheet, Text, View } from "react-native";

export function GigCard() {

    return (
        <View style={styles.container}>
          <View style={[styles.row, styles.height50]}>
            <Image style={styles.cardArrows} source={require('../assets/favicon.png')}/>
            <Image style={styles.cardImage} source={require('../assets/favicon.png')}/>
            <Image style={styles.cardArrows} source={require('../assets/favicon.png')}/>
          </View>
          <View style={[styles.row, styles.height25, styles.column]}>
            <Text style={styles.header}>GIG CARD HERE</Text>
            <Text style={styles.text}>Swipe or click info</Text>
          </View>
          <View style={[styles.row, styles.height25]}>
            <Image style={styles.cardButton} source={require('../assets/favicon.png')}/>
            <Image style={styles.cardButton} source={require('../assets/favicon.png')}/>
            <Image style={styles.cardButton} source={require('../assets/favicon.png')}/>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "cyan",
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      height: "85%",
      borderRadius: 10,
      // padding: 10,
    },
    row: {
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    height50: {
      height: "50%",
    },
    height25: {
      height: "25%",
    },
    column: {
      flexDirection: "column",
      justifyContent: "flex-start"
    },
    cardArrows: {
      borderWidth: 10,
      width: "25%",
      objectFit: "contain",
    },
    cardImage: {
      borderWidth: 10,
      width: "50%",
      objectFit: "contain",
    },
    cardButton: {
      borderWidth: 10,
      width: "33%",
      objectFit: "contain",
    },
    header: {
      fontSize: 20,
    },
    text: {
        fontSize: 14,
    }
  });
  