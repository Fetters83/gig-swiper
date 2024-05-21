import { TextInput, View, Text, Button  } from "react-native"
import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

function LogIn(){
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')



    return     <View style={styles.container}>
    <TextInput
      placeholder="Email"
      value={email}
      onChangeText={value => { setEmail(value) }}
      style={styles.input}
    />
    <TextInput
      placeholder="Password"
      value={password}
      onChangeText={value => { setPassword(value) }}
      secureTextEntry
      style={styles.input}

    />
     <Button title="Log Up Mate" onPress={handleLogIn} />
    </View>
}

const styles = StyleSheet.create({
    logOut: {
   marginTop: 20
    
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
    },
  });


export default LogIn