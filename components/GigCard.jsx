import { useContext, useEffect, useState } from "react";

import { Image, StyleSheet, Text, View, Pressable, TouchableWithoutFeedback, Animated, Button } from "react-native";

import { GigStackContext } from "../contexts/GigStackContext";
import { LikedGigContext } from "../contexts/LikedGigContext";
import { DislikedGigContext } from "../contexts/DislikedGigContext";
import { WebView } from 'react-native-webview'; 
import { getArtistTopTrack } from "../api";
import SpotifyPreview from "./SpotifyPreview";
import Loader from "./Loader";


export function GigCard(props) {

  const { toggleGigInfoVisible, setCurrentGig, stackNumber, setStackNumber, animateButton, animateButton2, scaleValue, rotateInterpolate, rotateValue } = props
  const { gigStack } = useContext(GigStackContext)
  const {setLikedGigs, likedGigs} = useContext(LikedGigContext)
  const [spotifyTrack, setSpotifyTrack] = useState(true)
  const [likedIds, setLikedIds] = useState([])
  const { dislikedIds, setDislikedIds } = useContext(DislikedGigContext)

  const imageurl = gigStack[stackNumber].xlargeimageurl

  function handleLike() {
    animateButton2()

    setStackNumber(stackNumber + 1)
    setCurrentGig(gigStack[stackNumber])
    const newLike = {
      id: gigStack[stackNumber].id,
      title: gigStack[stackNumber].eventname,
      location: gigStack[stackNumber].venue.name,
      imageurl: gigStack[stackNumber].xlargeimageurl,
      description: gigStack[stackNumber].description,
      eventname: gigStack[stackNumber].eventname,
      doorsopening: gigStack[stackNumber].openingtimes.doorsopen,
      doorsclosing: gigStack[stackNumber].openingtimes.doorsclose,
      lastentry: gigStack[stackNumber].openingtimes.lastentry,
      date: gigStack[stackNumber].date,
      town: gigStack[stackNumber].venue.town,
      postcode: gigStack[stackNumber].venue.postcode,
      link: gigStack[stackNumber].link
    }
    setLikedGigs([...likedGigs, newLike])

    setLikedIds([...likedIds, gigStack[stackNumber].id]

    )
  }
  useEffect(() => { 
    setCurrentGig(gigStack[stackNumber])
    setSpotifyTrack(true)
    if(gigStack[stackNumber].artists) {
      if(gigStack[stackNumber].artists[0]){
        getArtistTopTrack(gigStack[stackNumber].artists[0].name) // this runs on initial load - should not
        .then((topTrack) => {
          setSpotifyTrack(topTrack) 
        })
        // if(gigStack[stackNumber].artists[0].spotifymp3url) {
        //   console.log(gigStack[stackNumber].artists[0].spotifymp3url)          
        //   setSpotifyTrack(true) 
        } else {
          setSpotifyTrack(false)
        }
      } 
    // }  
  }, [stackNumber, gigStack])

  function handleDislikeById() {
    animateButton()
    setStackNumber(stackNumber + 1)
    setCurrentGig(gigStack[stackNumber])
    if (dislikedIds.length === 0) {
      setDislikedIds([gigStack[stackNumber].id])
    }
    else { dislikedIds.push(gigStack[stackNumber].id) }
  }


  function handleReset() {
    setDislikedIds([])

  }
  {
    if (likedIds.includes(gigStack[stackNumber].id || dislikedIds.includes(gigStack[stackNumber].id))) {
      setStackNumber(stackNumber + 1)

    }
  }

  const [isLikeTouched, setIsLikeTouched] = useState(true)

  function toggleTouchLike() {
    setIsLikeTouched(false)
    setIsEitherClicked(false)
  }

  function toggleTouchLikeOff() {
    setIsLikeTouched(true)
    setIsEitherClicked(true)
  }


  const [isDislikeTouched, setIsDislikeTouched] = useState(true)

  function toggleTouchDislike() {
    setIsDislikeTouched(false)
    setIsEitherClicked(false)
  }

  function toggleTouchDislikeOff() {
    setIsDislikeTouched(true)
    setIsEitherClicked(true)

  }

  const [isEitherClicked, setIsEitherClicked] = useState(true)


  return (
    <>
      {gigStack === "nosearch" || stackNumber === gigStack.length - 1 ?


        <>
          <Loader />
          <Text style={styles.typeACity}>Type a place name to search</Text>
        
        </>

        :
        (<View style={[styles.container, styles.shadow]}>

          <View style={[styles.row, styles.topArea, styles.height50]}>
            <Image style={styles.cardArrowL} source={require('../assets/left.png')} />

            <View style={[styles.imageView, styles.shadowHeavy]}>
              <Image style={styles.cardImage} source={{ uri: imageurl }} />
            </View>
            
            <Image style={styles.cardArrowR} source={require('../assets/right.png')} />
          </View>

          <View style={[styles.row, styles.gigText, styles.height30, styles.column]}>

          {isEitherClicked ? 
          <>
            <Text style={styles.header}>{gigStack[stackNumber].eventname}</Text>
            <Text style={styles.text}>{gigStack[stackNumber].venue.name}</Text>
            <Text style={styles.text}>{gigStack[stackNumber].date}</Text>
            {gigStack[stackNumber].entryprice ? <Text style={styles.text}>£{gigStack[stackNumber].entryprice}</Text> : null}
          </> 
          : 
          <Text style={isLikeTouched ? styles.disliked : styles.liked}>{isLikeTouched ? "REJECT" : "LIKE"}</Text>  }

          </View>


          <View style={[styles.row, styles.buttonArea, styles.height25]}>
            <Pressable style={styles.cardButton} onPress={handleDislikeById} onTouchStart={toggleTouchDislike} onTouchEnd={toggleTouchDislikeOff}>
              <Image style={isDislikeTouched ? styles.cardButtonImage : styles.cardButtonImageRotate}  source={require('../assets/nah.png')} />
            </Pressable>
            <Pressable style={styles.cardButton} onPress={toggleGigInfoVisible}>
              <Image style={styles.infoButton} source={require('../assets/info.png')} />
            </Pressable>
            <Pressable onPress={handleLike} onTouchStart={toggleTouchLike} onTouchEnd={toggleTouchLikeOff} style={styles.cardButton}  >
              <Image style={isLikeTouched ? styles.cardButtonImage : styles.cardButtonImageRotate} source={require('../assets/rock-on.png')} />
            </Pressable>
          </View>
          {dislikedIds.length > 0 && <Button styles={styles.resetButton} title="Reset" onPress={handleReset} />}
        </View>
        
      
      
      )
      }
   

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    width: '90%',
    height: "90%",
    marginVertical: "2.5%",
    borderRadius: 20,     
    paddingVertical: 5,
  },
  topArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '97%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",

  },
  gigText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '97%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

  },
  liked: {
    fontSize: 72,
    color: 'green',
    textShadowColor: 'green',
    textShadowRadius: 25,
    transform: [{rotate: '-25deg'}]

  },
  disliked: {
    fontSize: 72,
    color: 'red',
    textShadowColor: 'red',
    textShadowRadius: 25,
    transform: [{rotate: '25deg'}]

  },
  height50: {
    height: "50%",
  },
  height25: {
    height: "15%",
  },
  height30: {
    height: "35%",
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: 'flex-start',
  },
  cardArrowL: {
    width: "10%",
    objectFit: "contain",
    transform: [{translateX: 30}, {translateY: -100}],
  },
  cardArrowR: {
    width: "10%",
    objectFit: "contain",
    transform: [{translateX: -30}, {translateY: -100}],
  },
  imageView: {
    height: '60%',
    width: '60%',
    transform: [{scale: 1.1}],
    objectFit: "contain",
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  cardButton: {
    width: "33%",
    objectFit: "contain",
    alignItems: 'center',
  },
  infoButton: {
    width: "50%",
    objectFit: "contain",
    alignItems: 'center',
  },
  cardButtonImage: {
    width: "100%",
    objectFit: "contain",
    alignItems: 'center',
    
  },
  cardButtonImageRotate: {
    width: "100%",
    objectFit: "contain",
    alignItems: 'center',
    transform: [{rotate: '45deg'}]
  },
  resetButton:{
  
  },
  header: {
    fontSize: 20,
    width: '100%',
    padding: 5,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    width: '100%',
    padding: 5,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10
  },
  shadowHeavy: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 15
  },
  typeACity: {
    margin: 40,
    fontSize: 30,
    textAlign: 'center',
  },
  darken: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    
  },
});
