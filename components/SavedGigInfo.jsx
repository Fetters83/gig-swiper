import { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image, ScrollView, Button, Linking } from "react-native";


export function SavedGigInfo(currentGig) {

  const {eventname, description, date, doorsopening, doorsclosing, lastentry, location, postcode, town, link} = currentGig.currentGig


  return (
    <>
    <View style={styles.section}>
      <Text style={styles.largeText}>Description: </Text>
        <Text>{description}</Text>
    </View>
      
    <View style={styles.section}>
    <Text style={styles.largeText}>Timings: </Text>
        <Text>{date}</Text>
        <Text>Doors Open: {doorsopening}</Text>
        <Text>Doors Close: {doorsclosing}</Text>
        <Text>Last Entry: {lastentry}</Text>
</View>

<View style={styles.section}>
      <Text style={styles.largeText}>Venue Details:</Text>

        <Text>{location}, {postcode}</Text>
        <Text>{town}</Text>
        
        </View>

        <View style={styles.section}>
        <Button title={"GET TICKETS"} onPress={() => Linking.openURL(link)}></Button>
        </View>
    </>

  )
}

const styles = StyleSheet.create({
  section: {
    margin: 20,
  },
  largeText: {
    fontSize: 18,
  }
});
