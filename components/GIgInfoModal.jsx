import { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image, ScrollView, Button, Linking } from "react-native";


export function GigInfoModal(props) {

  const { toggleGigInfoVisible, currentGig, stackNumber } = props

  const [showVenueDetails, setShowVenueDetails] = useState(false)
  const [showGenres, setShowGenres] = useState(false)
  console.log(stackNumber)
  console.log(currentGig)
  function toggleVenueDetails() {
    setShowVenueDetails(!showVenueDetails)
  }

  function toggleGenres() {
    setShowGenres(!showGenres)
  }


  return (

    <View style={styles.container}>

      <Image style={styles.topImage} source={{ uri: currentGig.xlargeimageurl }} />
      <Pressable onPress={toggleGigInfoVisible} style={styles.closeButton}>
        <Image style={styles.closeButtonImage} source={require('../assets/close.png')} />
      </Pressable>

      <ScrollView>

        <View style={[styles.row, styles.descriptionWidth, styles.spaceBetween]}>

          <View style={[styles.marginVert, styles.padding]}>
            <Text style={styles.largeText}>{currentGig.eventname}</Text>
            <Text style={styles.mediumText}>{currentGig.description}</Text>
          </View>

          <View style={[styles.marginVert, styles.padding, styles.dateBox]}>
            <Text>{currentGig.date}</Text>
            <Text>Doors open:  {currentGig.openingtimes.doorsopen}</Text>
            <Text>Doors close: {currentGig.openingtimes.doorsclose}</Text>
          </View>

        </View>

        <View style={[styles.marginVert, styles.fullWidth, styles.padding, styles.darkerBackground]}>
          <Text style={styles.mediumText} onPress={toggleVenueDetails}>Show Venue Details &#8595;</Text>
          {showVenueDetails &&
            <View>
              <Text style={styles.smallText}>{currentGig.venue.name}</Text>
              <Text style={styles.smallText}>{currentGig.venue.postcode}</Text>
              <Text style={styles.smallText}>{currentGig.venue.town}</Text>
            </View>
          }
        </View>

        <View style={[styles.marginVert, styles.fullWidth, styles.padding]}>

          <Button title={"GET TICKETS"} onPress={() => Linking.openURL(currentGig.link)}></Button>
        
        </View>

      </ScrollView>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    height: '100%'
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
  },
  topImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
  },
  topImageContainer: {
    width: '100%',
  },
  marginVert: {
    marginVertical: 10,
  },
  padding: {
    padding: 10,
  },
  fullWidth: {
    width: '100%',
  },
  descriptionWidth:{
 width: "60%"
  },
  largeText: {
    fontSize: 24,
  },
  mediumText: {
    fontSize: 18,
  },
  smallText: {
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    // alignItems: 'space-between'
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  closeButtonImage: {
    width: 50,
    height: 50,
  },
  darkerBackground: {
    backgroundColor: '#ccc',
  },
  dateBox: {
    alignItems: 'center',
  }

});
