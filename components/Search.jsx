import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Modal, Image, } from "react-native";
import { GigStackContext } from "../contexts/GigStackContext";
import { fetchLatitudeAndLongitude, getAllEvents } from "../api";
import { LikedGigContext } from "../contexts/LikedGigContext";
import { DislikedGigContext } from "../contexts/DislikedGigContext";
import { RadiusContext } from "../contexts/RadiusContext";
import { LoadingContext } from "../contexts/LoadingContext";
import Radius from "./Radius";

export function Search() {

  const [locationSearch, setLocationSearch] = useState('')
  const { setGigStack, gigStack } = useContext(GigStackContext)
  const { setLikedGigs, likedGigs } = useContext(LikedGigContext)
  const { dislikedIds, setDislikedIds } = useContext(DislikedGigContext)
  const [radiusTab, setRadiusTab] = useState(false)
  const { radius, setRadius } = useContext(RadiusContext)
  const [emergentModal, setEmergentModal] = useState(false)
  const {loading, setLoading} = useContext(LoadingContext)
 
  function handleRadius() {
    if (!radiusTab) {
      setRadiusTab(true)
    } else {
      setRadiusTab(false)
    }
  }

  function handleSetRadius() {
    if (radius && locationSearch) {


      fetchLatitudeAndLongitude(locationSearch)
      .then((data) => {

        return data
      })
      .then(({ latitude, longitude }) => {
        return getAllEvents(latitude, longitude, radius)
      })
      .then((eventos) => {
        if (likedGigs.length > 0) {
          let filter = eventos.filter(event => !likedGigs.includes(event.id) && !dislikedIds.includes(event.id))
          setGigStack(filter)
        } else {
          setGigStack(eventos)
        }
      })
      .then(() => { 
        setRadiusTab(false)
      })

    } else {
      setRadiusTab(false)
    }
  }

  function handleLocationGo() {
   setLoading(true)
console.log(locationSearch)

    fetchLatitudeAndLongitude(locationSearch)
    .then((data) => {

      return data
    })
    .then(({ latitude, longitude }) => {
      setLoading(false)
      return getAllEvents(latitude, longitude, radius)
    })
    .then((eventos) => {
      if (likedGigs.length > 0) {
        let filter = eventos.filter(event => !likedGigs.includes(event.id) && !dislikedIds.includes(event.id))
        setGigStack(filter)
      } else
        setGigStack(eventos)
    })
    .catch((err)=>{
      console.log(err, "was an error")
      setEmergentModal(true)
      setLoading(false)
      return err
    })
  }

  function handleOK(){
    if(!emergentModal){
      setEmergentModal(true)
    } else {
      setEmergentModal(false)
    }
  }
    

  return (
    <View style={styles.container}>
  
      <View style={styles.fullWidth}>
        <TextInput style={styles.textInput} onChangeText={text => {setLocationSearch(text)}} placeholder="Enter city name here"></TextInput>
      </View>

      <Button onPress={handleLocationGo} title="Go" />
      <Button title="R" onPress={handleRadius} />

      <Modal transparent={true} visible={radiusTab}>
        <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
          <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 50, flex: 0.5 }}>
            <Text style={{ fontSize: 20, alignContent: "center", }}> Set your radius</Text>
            <Radius />
            <Button title="Set Radius" onPress={handleSetRadius} />
          </View>
        </View>
      </Modal>

      <Modal transparent={true} visible={emergentModal}>
        <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
          <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 50, flex: 0.5 }}>
            <Text style={{ fontSize: 20, alignContent: "center", }}> Please enter a valid input</Text>
            <Image style={styles.sadMap} source={require('../assets/sadMap.jpg')}/>
            <Button title="OK!" onPress={handleOK} />
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
  sadMap: {
    alignItems: "center",
    width: 200,
    height: 200,
  }
});
