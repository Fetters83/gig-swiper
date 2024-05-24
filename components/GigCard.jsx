import { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Pressable, FlatList, TouchableOpacity } from "react-native";
import { GigStackContext } from "../contexts/GigStackContext";
import { LikedGigContext } from "../contexts/LikedGigContext";

export function GigCard(props) {

  const { toggleGigInfoVisible, setCurrentGig, stackNumber, setStackNumber } = props
  const { gigStack } = useContext(GigStackContext)
  const {setLikedGigs, likedGigs} = useContext(LikedGigContext)
  const [likedIds, setLikedIds] = useState([])

  const imageurl = gigStack[stackNumber].xlargeimageurl


  function handleLike() {
    setStackNumber(stackNumber + 1)
    setCurrentGig(gigStack[stackNumber])
    const newLike= {
      id: gigStack[stackNumber].id,
      title : gigStack[stackNumber].eventname,
      location :gigStack[stackNumber].venue.name,
      imageurl: gigStack[stackNumber].xlargeimageurl,
      description: gigStack[stackNumber].description,
      eventname: gigStack[stackNumber].eventname,
      doorsopening: gigStack[stackNumber].openingtimes.doorsopen,
      doorsclosing: gigStack[stackNumber].openingtimes.doorsclose,
    }
    setLikedGigs([...likedGigs, newLike])
    setLikedIds([...likedIds, gigStack[stackNumber].id ])
  }
  useEffect(() => { setCurrentGig(gigStack[stackNumber]) }, [stackNumber, gigStack])

  { if (likedIds.includes(gigStack[stackNumber].id)){
    setStackNumber(stackNumber + 1)

  }}
  return (
    <>


      {gigStack === "nosearch" || stackNumber === gigStack.length - 1 ?

        <>
          <Text style={styles.typeACity}>Type a place name to search</Text>
        </>


        :

        (<View style={[styles.container, styles.shadow]}>

          <View style={[styles.row, styles.height50]}>
            <Image style={styles.cardArrows} source={require('../assets/left-arrow-huge.png')} />
            <Image style={styles.cardImage} source={{ uri: imageurl }} />

            <Image style={styles.cardArrows} source={require('../assets/right-arrow-huge.png')} />

          </View>
          <View style={[styles.row, styles.height25, styles.column]}>
            <Text style={styles.header}>{gigStack[stackNumber].eventname}</Text>
            <Text style={styles.text}>{gigStack[stackNumber].venue.name}</Text>
            <Text style={styles.text}>{gigStack[stackNumber].date}</Text>
            {gigStack[stackNumber].entryprice ? <Text style={styles.text}>£{gigStack[stackNumber].entryprice}</Text> : null}
          </View>
          <View style={[styles.row, styles.height25]}>
            <Image style={styles.cardButton} source={require('../assets/nah.png')} />
            <Pressable style={styles.cardButton} onPress={toggleGigInfoVisible}>
              <Image style={styles.cardButton} source={require('../assets/info.png')} />
            </Pressable>
            <Pressable onPress={handleLike} style={styles.cardButton}  >
              <Image style={styles.cardButtonImage} source={require('../assets/rock-on.png')} />
            </Pressable>
          </View>
        </View>)
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccd",
    alignItems: "center",
    justifyContent: "center",
    width: '95%',
    height: "85%",
    marginVertical: "2.5%",
    borderRadius: 10,
    // padding: 10,      
  },
  row: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  height50: {
    height: "50%",
  },
  height25: {
    height: "25%",
  },
  column: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: 'flex-start',
  },
  cardArrows: {
    width: "20%",
    objectFit: "contain",
  },
  cardImage: {
    objectFit: "contain",
    height: '80%',
    width: '60%',
    borderRadius: 20,
  },
  cardButton: {
    width: "33%",
    objectFit: "contain",
    alignItems: 'center',
  },
  cardButtonImage: {
    width: "100%",
    objectFit: "contain",
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    width: '100%',
    padding: 5,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    width: '100%',
    padding: 5,
    paddingHorizontal: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  typeACity: {
    margin: 40,
    fontSize: 30,
    textAlign: 'center',
  }
});
