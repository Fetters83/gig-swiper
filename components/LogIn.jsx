import { TextInput, View, Text, Button  } from "react-native"
import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth }from '../config/Config'

function LogIn(){
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [validCredentials, setValidCredentials] = useState(true)

function handleLogIn(){
    if(email && password){
        return signInWithEmailAndPassword(auth, email, password)
        .catch((err)=>{console.log(err)
            setValidCredentials(false)
        })
    }
}

return     (<View style={styles.container}>
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
     <Button title="Log In Mate" onPress={handleLogIn} />
     {!validCredentials && <Text style={styles.container}> Invalid credentials, please check your input</Text>}
    </View>
    
    )
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