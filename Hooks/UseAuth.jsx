import { useState, useEffect} from "react"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/Config'

function UseAuth(){

    const [user, setUser]= useState(null)
    
    useEffect(()=>{
        const singUp = onAuthStateChanged(auth, user =>{
            if(user){ setUser(user)}
            else{ setUser(null)}
        })
        return singUp
    },[])

    return {user}
    
}
export default UseAuth