import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { View, Text, TextInput, Button, Image, Modal} from 'react-native';
import { auth } from '../config/Config';
import { LoadingContext } from '../contexts/LoadingContext';
import Loader from '../components/Loader';
import { styles } from './SignUpScreen.styles'


export default function SignUpScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validCredentials, setValidCredentials] = useState(true)
  const {loading, setLoading} = useContext(LoadingContext)
  const [err, setErr]= useState(false)

  function handleSignUp() {
    setLoading(true)
    if (email && password) {
      return createUserWithEmailAndPassword(auth, email, password)
        .then((data)=>{
          setLoading(false)
        })
        .catch((error) => {
          console.log("handleSignUp error caught:", error)
          setValidCredentials(false)
        })
    } else {
      setErr(true)
      setLoading(false)
    }
  }
  function handleOK(){
    
    if(!err){
      setErr(true)}
    else{setErr(false)}
  }

  function handleLink(){
    navigation.navigate("Login")
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
      <Loader/>
      <Button title="Sign Up" onPress={handleSignUp} />
       <Modal transparent={true} visible={err}>
        <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
          <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 50, flex: 0.2}}>
            <Text style={{ fontSize: 20, alignContent: "center", }}> Please enter a valid input</Text>
            <Button title="OK!" onPress={handleOK} />
            </View>

         </View>
         </Modal>
            
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
