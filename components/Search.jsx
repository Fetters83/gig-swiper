import { useContext, useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { GigStackContext } from "../contexts/GigStackContext";
import { fetchLatitudeAndLongitude, getAllEvents } from "../api";


export function Search() {

  const [locationSearch, setLocationSearch] = useState('')
  const { setGigStack } = useContext(GigStackContext)
  console.log(locationSearch)

  function handleLocationGo() {
    // const newGigs = fetchLatitudeAndLongitude(locationSearch)
    fetchLatitudeAndLongitude(locationSearch).then((data) => {
      return data
    })
      .then(({ latitude, longitude }) => {
        console.log(latitude, longitude)
        return getAllEvents(latitude, longitude, 5)
      })
      .then((eventos) => { console.log(eventos, "SWEAR DONW") })
    const newGigs = locationSearch
    setGigStack(newGigs)
  }

    return (
        <View style={styles.container}>
          <View style={styles.fullWidth}>
            <TextInput style={styles.textInput} onChangeText={text => setLocationSearch(text)} placeholder="Enter city name here"></TextInput>

          </View>
            <Button onPress={handleLocationGo} title="Go" />
        </View>
    )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    width: 180,
    flexDirection: 'row',
    paddingLeft: 5,
  },

});
