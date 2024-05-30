import { TextInput, View, Text, Button  } from "react-native"
import { StyleSheet } from "react-native"
import { useState } from "react"
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth }from '../config/Config'

export default function LogIn() {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [validCredentials, setValidCredentials] = useState(true)

  function handleLogIn() {
    if(email && password){
      return signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
          console.log('handleLogIn error caught: ', error)
          setValidCredentials(false)
      })
    }
  }

  return (
    <View style={styles.container}>
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