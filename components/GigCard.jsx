import { Image, StyleSheet, Text, View, Pressable } from "react-native";

export function GigCard({toggleGigInfoVisible}) {

    return (
        <View style={[styles.container, styles.shadow]}>
          <View style={[styles.row, styles.height50]}>
            <Image style={styles.cardArrows} source={require('../assets/left-arrow-huge.png')}/>
            <Image style={styles.cardImage} source={require('../assets/paul.png')}/>
            <Image style={styles.cardArrows} source={require('../assets/right-arrow-huge.png')}/>
          </View>
          <View style={[styles.row, styles.height25, styles.column]}>
            <Text style={styles.header}>Paul McCartney's Hologram</Text>
            <Text style={styles.text}>Manchester Academy</Text>
            <Text style={styles.text}>29th May</Text>
            <Text style={styles.text}>£14 - 20</Text>
            
          </View>
          <View style={[styles.row, styles.height25]}>
            <Image  style={styles.cardButton} source={require('../assets/nah.png')}/>
            <Pressable style={styles.cardButton} onPress={toggleGigInfoVisible}>
              <Image style={styles.cardButton} source={require('../assets/info.png')}/>
            </Pressable>
            <Image style={styles.cardButton} source={require('../assets/rock-on.png')}/>
          
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ccd",
      alignItems: "center",
      justifyContent: "center",
      width: '95%',
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
      justifyContent: "flex-start",
      alignContent: 'flex-start',
    },
    cardArrows: {
      width: "25%",
      objectFit: "contain",
    },
    cardImage: {
      flex: 1,
      objectFit: "contain",
      borderRadius: 50,
    },
    cardButton: {
      width: "33%",
      objectFit: "contain",
      alignItems: 'center',
    },
    header: {
      fontSize: 20,
      width: '100%',
      padding: 5,
      paddingHorizontal: 20,
    },
    text: {
        fontSize: 14,
        width: '100%',
        padding: 5,
        paddingHorizontal: 20,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    }
  });
  