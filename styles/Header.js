import { Button } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../config/Config";

  function handleLogout(){
      return signOut(auth).then((data)=>{console.log(data , "was an error")})
      .catch((err)=>{
          console.log(err, "EEEEEEEEEEEEEEEE")
      })
  }

export const headerStyle = {
  title: "My home",
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerRight: () => (
    <Button
      onPress={handleLogout}
      title="Log Out"
      color="#fff"
      style={marginHorizontal=50}
    />
  )
};