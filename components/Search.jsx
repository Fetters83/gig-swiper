import { useContext, useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, View, Modal } from "react-native";
import { GigStackContext } from "../contexts/GigStackContext";
import { fetchLatitudeAndLongitude, getAllEvents } from "../api";
import { LikedGigContext } from "../contexts/LikedGigContext";
import { DislikedGigContext } from "../contexts/DislikedGigContext";
import { RadiusContext } from "../contexts/RadiusContext";
import Radius from "./Radius";

export function Search() {

  const [locationSearch, setLocationSearch] = useState('')
  const { setGigStack, gigStack } = useContext(GigStackContext)
  const { setLikedGigs, likedGigs } = useContext(LikedGigContext)
  const { dislikedIds, setDislikedIds} = useContext( DislikedGigContext)
  const [ radiusTab, setRadiusTab] =useState(false)
  const {radius, setRadius}= useContext(RadiusContext)

  function handleRadius(){
 
    if(!radiusTab){   console.log("lets choose radius")
      setRadiusTab(true)} else{   console.log("closing radius tab")
    setRadiusTab(false)}
  }

  function handleLocationGo() {


    fetchLatitudeAndLongitude(locationSearch).then((data) => {
      return data
    })
      .then(({ latitude, longitude }) => {

        return getAllEvents(latitude, longitude, radius)
      })
      .then((eventos) => {
        if (likedGigs.length > 0) {
          let filter = eventos.filter(event => !likedGigs.includes(event.id) && !dislikedIds.includes(event.id))
          setGigStack(filter)
        } else
          setGigStack(eventos)

      })

  }

  return (
    <View style={styles.container}>
      <View style={styles.fullWidth}>
        <TextInput style={styles.textInput} onChangeText={text => setLocationSearch(text)} placeholder="Enter city name here"></TextInput>

      </View>
      

      <Button onPress={handleLocationGo} title="Go" />



      <Button title="R" onPress={handleRadius}/>

      <Modal transparent={true} visible={radiusTab}>
      <View style={{backgroundColor: "#000000aa",flex:1}}>
        <View style={{backgroundColor: "#ffffff", margin:50, padding: 40, borderRadius: 50, flex:0.5 }}>
<Text style={{fontSize: 20, alignContent:"center",}}> Set your radius</Text>
<Radius/>
<Button title="Set Radius" onPress={handleRadius}/>

</View>
  
    </View>
    </Modal>
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
