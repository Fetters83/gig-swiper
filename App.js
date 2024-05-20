import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "./screens/SearchScreen";
import { SavedScreen } from "./screens/SavedScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UseAuth from './Hooks/UseAuth'
import SignUp from "./components/SingUp";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const {user} = UseAuth()

if(user)

  return (
    <NavigationContainer>
      <Tab.Navigator>
  
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: "Search",
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={styles.tabImage}
                  source={require("./assets/search.png")}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            title: "Saved",
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={styles.tabImage}
                  source={require("./assets/saved.png")}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

else {return <SignUp/> }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabImage: {
    flex: 1,
    objectFit: "contain",
  },
});
