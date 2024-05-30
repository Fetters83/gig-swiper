import { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image, ScrollView, Button, Linking } from "react-native";
import { styles } from "./GigInfoModal.styles";

export function GigInfoModal(props) {
  const { toggleGigInfoVisible, currentGig, stackNumber } = props
  const [showVenueDetails, setShowVenueDetails] = useState(false)
  const [showGenres, setShowGenres] = useState(false)
  
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

        <View style={[styles.row, styles.fullWidth, styles.spaceBetween]}>

          <View style={[styles.descriptionWidth, styles.marginVert, styles.padding]}>
            <Text style={styles.largeText}>{currentGig.eventname}</Text>
            <Text style={[styles.mediumText, styles.marginVert]}>{currentGig.description}</Text>
          </View>

          <View style={[styles.marginVert, styles.padding, styles.dateBox]}>
            <Text style={styles.marginVert}>{currentGig.date}</Text>
            <Text >Doors open:  {currentGig.openingtimes.doorsopen}</Text>
            <Text >Doors close: {currentGig.openingtimes.doorsclose}</Text>
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