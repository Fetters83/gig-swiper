import React, { useContext } from "react";
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import { LoadingContext } from "../contexts/LoadingContext";

function Loader(){
const {loading, setLoading} = useContext(LoadingContext)


return(
  <View style={styles.container}>
<ActivityIndicator color="#f4511e" animating={loading}/>

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

export default Loader