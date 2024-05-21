import { StyleSheet, Text, View, Modal } from "react-native";

export function GigInfoModal({gigInfoVisible}) {

    return (


          <View style={styles.container}>
            <Text>THIS IS THE INFO FOR THE GIG</Text>
            <Text>Gig Info.....</Text>
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
  },
  modalCenter: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  modalOuter: {
    margin: 20,
    backgroundColor: '#dde',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    height: 500,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  }
});
