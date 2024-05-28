
import { useState } from "react";
import { Modal, View,  } from "react-native";


function EmergentModal(){

const [emergentModal, setEmergentModal] = useState(false)


function handleOK(){

    if(!emergentModal){ setEmergentModal(true)}
    else{setEmergentModal(false)}
}

    return(
        <Modal transparent={true} visible={emergentModal}>
        <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
          <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 50, flex: 0.5 }}>
            <Text style={{ fontSize: 20, alignContent: "center", }}> Please enter a valid input</Text>

            <Button title="OK!" onPress={handleOK} />
          </View>
        </View>
        </Modal>
        
)
}    

export default EmergentModal