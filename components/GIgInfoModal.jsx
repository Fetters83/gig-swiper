import { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from "react-native";


export function GigInfoModal({toggleGigInfoVisible}) {

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

            <Image style={styles.topImage} source={{uri: 'https://d31fr2pwly4c4s.cloudfront.net/d/6/f/1739150_d3263fcd_ibiza-proms-in-manchester-cathedral_1024.jpg'}} /> 
            <Pressable onPress={toggleGigInfoVisible} style={styles.closeButton}>
              <Image style={styles.closeButtonImage} source={require('../assets/close.png')} />
            </Pressable>

            <ScrollView>

              <View style={[styles.row, styles.fullWidth, styles.spaceBetween]}>

                <View style={[styles.marginVert, styles.padding]}>
                  <Text style={styles.largeText}>Event Name</Text>
                  <Text style={styles.mediumText}>Description of the gig...</Text>
                </View>

                <View style={[styles.marginVert, styles.padding, styles.dateBox]}>
                  <Text>Date</Text>
                  <Text>Doors Open:</Text>
                  <Text>Doors Close:</Text>
                </View>

              </View>

              <View style={[styles.marginVert, styles.fullWidth, styles.padding, styles.darkerBackground]}>
                <Text style={styles.mediumText} onPress={toggleVenueDetails}>Show Venue Details &#8595;</Text>
                { showVenueDetails && 
                  <View>
                    <Text style={styles.smallText}>Venue Name</Text>
                    <Text style={styles.smallText}>Venue Town</Text>
                    <Text style={styles.smallText}>Venue Postcode</Text>
                  </View>
                }
              </View>
            
              <View style={[styles.marginVert, styles.fullWidth, styles.padding, styles.darkerBackground]}>
              <Text style={styles.mediumText} onPress={toggleGenres}>Show Genres &#8595;</Text>
              { showGenres && 
                  <View>
                <Text style={styles.smallText}>Genres List</Text>
                </View>}
              </View>

              <View style={[styles.marginVert, styles.fullWidth, styles.padding]}>
                <Text style={styles.smallText}>Link to Skiddle.com</Text>
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
    justifyContent: 'space-between'
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
