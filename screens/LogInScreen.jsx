import { TextInput, View, Text, Button, Image, Modal } from "react-native"
import { StyleSheet } from "react-native"
import { useState } from "react"
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth }from '../config/Config'

export default function LogInScreen() {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [validCredentials, setValidCredentials] = useState(true)
  const [err, setErr]= useState(false)

  function handleLogIn() {
    if(email && password){
      return signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
          console.log('handleLogIn error caught: ', error)
          setValidCredentials(false)
      })
    }else {
      setErr(true)
    }
  }

  function handleOK(){
    
    if(!err){
      setErr(true)}
    else{setErr(false)}
  }


  return (
    <View style={styles.container}>
       <Image style={styles.gigLogo} source={require('../assets/logo.png')} />
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
  <Modal transparent={true} visible={err}>
        <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
          <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 50, flex: 0.2}}>
            <Text style={{ fontSize: 20, alignContent: "center", }}> Please enter a valid input</Text>
            <Button title="OK!" onPress={handleOK} />
            </View>

         </View>
         </Modal>

      <Button title="Log In" onPress={handleLogIn} />
    
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
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center'
  },
  gigLogo: {
      width: '80%',
      height: '40%',
    },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
  }
);