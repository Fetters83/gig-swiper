import { Button } from "react-native";
import { auth } from "../config/Config";
import { signOut } from "firebase/auth";


function LogOutButton(){
    function handleLogout(){
        return signOut(auth).then((data)=>{console.log(data , "was an error")})
        .catch((err)=>{
            console.log(err, "EEEEEEEEEEEEEEEE")
        })
    }

return (
    <Button title={"Log Out"} onPress={handleLogout}> </Button>
)

}

export default LogOutButton