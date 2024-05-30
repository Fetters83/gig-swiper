import React, { useContext } from "react";
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import { LoadingContext } from "../contexts/LoadingContext";

export default function Loader() {
  const {loading, setLoading} = useContext(LoadingContext)

  return(
    <View style={styles.container}>
    <ActivityIndicator color="#ff9900" animating={loading}/>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent: 'space-around',
    padding: 10,
  }
})