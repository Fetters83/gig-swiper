import { useContext, useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { GigStackContext } from "../contexts/GigStackContext";


export function Search() {

  const [locationSearch, setLocationSearch] = useState('')
  const {setGigStack} = useContext(GigStackContext)
  console.log(locationSearch)
  
  function handleLocationGo() {
    // const newGigs = fetchLocation(locationSearch)
      const newGigs = locationSearch
      setGigStack(newGigs)
  }

    return (
        <View style={styles.container}>
            <TextInput onChangeText={text => setLocationSearch(text)} placeholder="hello..."></TextInput>
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
  }
});
