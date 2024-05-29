import { View, Animated,  } from "react-native";
import { GigCard } from "../components/GigCard";
import { useContext, useEffect, useState } from "react";
import { GigInfoModal } from "../components/GIgInfoModal";
import { getAllEvents } from "../api";
import { StyleSheet } from "react-native";
import { GigStackContext } from "../contexts/GigStackContext";
import { LikedGigContext } from "../contexts/LikedGigContext";
import writeToDatabase from "../writeToDatabase";
import UseAuth from "../Hooks/UseAuth";
import getLikedGigs from "../getLikedGigs";



export function SearchScreen() {

  const [scaleValue] = useState(new Animated.Value(1))
  const [rotateValue] = useState(new Animated.Value(0))
    const [gigInfoVisible, setGigInfoVisible] = useState(false);
    const [events ,setEvents] = useState([])
    const { gigStack } = useContext(GigStackContext)
    const [currentGig, setCurrentGig] = useState({})
    const [stackNumber, setStackNumber] = useState(0)
    const {likedGigs, setLikedGigs}= useContext(LikedGigContext) 
        const { user } = UseAuth()

        const animateButton = () => {
            Animated.sequence([
              Animated.timing(scaleValue, {
                toValue: 0.8,
                duration: 100,
                useNativeDriver: true,
              }),
              Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
              }),
            ]).start();
          };
          const animateButton2 = () => {
            Animated.sequence([
              Animated.timing(rotateValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
              }),
              Animated.timing(rotateValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
              }),
            ]).start();
        
          }
          const rotateInterpolate = rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })

        useEffect(()=>{
            getLikedGigs(user)
            .then((data)=>{
                setLikedGigs(data)
            })
        },[user])


    useEffect(() => {
        writeToDatabase(likedGigs, user);
      }, [likedGigs]);


    /* const eventArtistInfo = {}
    if(currentGig.artists[0]) {

        eventArtistInfo.name = currentGig.artists[0].name
        eventArtistInfo.spotifyUrl = currentGig.artists[0].spotifymp3url
      
        }
       
    
    
    console.log(eventArtistInfo) */
    
useEffect(()=>{
    getAllEvents().then((data)=>{
    setEvents(data)}
)   
},[])


useEffect(()=>{
    setStackNumber(0)
 
},[gigStack])

    function toggleGigInfoVisible() {
        
        setGigInfoVisible(!gigInfoVisible)
    }

    return (
        <View style={styles.container}>
            {gigInfoVisible ? <GigInfoModal stackNumber={stackNumber} currentGig={currentGig} gigInfoVisible={gigInfoVisible} toggleGigInfoVisible={toggleGigInfoVisible}/> :
            <GigCard scaleValue={scaleValue} rotateValue={rotateValue} rotateInterpolate={rotateInterpolate} animateButton={animateButton} animateButton2={animateButton2}
             stackNumber={stackNumber} setStackNumber={setStackNumber} setCurrentGig={setCurrentGig} toggleGigInfoVisible={toggleGigInfoVisible} visible={gigInfoVisible}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width: '100%'
    }
  });
  