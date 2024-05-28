import Slider from '@react-native-community/slider';
import { RadiusContext } from '../contexts/RadiusContext';
import { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Radius(){
  
    const { radius , setRadius} = useContext( RadiusContext)

    return( 
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold'}}>{`${radius} miles`}</Text>
    <Slider
        style={{width: 250, height: 40}}
        minimumValue={0.1}
        maximumValue={25}
        minimumTrackTintColor="#f4511e"
        maximumTrackTintColor="#000"
        thumbTintColor='#f4511e'
        value={10}
        onValueChange={value => setRadius(parseInt(value))}
      />
      </View>
       )

}


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',


}


})
export default Radius