import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { auth } from '../config/Config';
import { LoadingContext } from '../contexts/LoadingContext';
import Loader from './Loader';


function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validCredentials, setValidCredentials] = useState(true)
  const {loading, setLoading} = useContext(LoadingContext)

  function handleSignUp() {
    setLoading(true)
    if (email && password) {
      return createUserWithEmailAndPassword(auth, email, password).then((data)=>{
        setLoading(false)
        console.log("logged in")})
        .catch((err) => {
          console.log(err)
         setValidCredentials(false)

        })
    }

  }
  function handleLink(){
    navigation.navigate("login")
  }
  function handleDevAccess() {
    return signInWithEmailAndPassword(auth, 'fiveguys@dev.com', 'Password')
    .then((data) => {
    })
    .catch((err) => {
    })
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
      <Loader/>
      <Button title="Sign Up Mate" onPress={handleSignUp} />
      <View style={styles.logOut}>

     <Button onPress={handleLink} id="login" title={"Already have an account?"}></Button>
     {!validCredentials && <Text style={styles.text}> Check your credentials</Text>}

     </View>
   <View>
    <Button title="Dev Access" onPress={handleDevAccess} />
   </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  text:{
    marginTop: 20,
textAlign: "center"

  },
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

export default SignUp;
