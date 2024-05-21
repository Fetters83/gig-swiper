import { Button } from "react-native";

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
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
      style={marginHorizontal=50}
    />
  )
};