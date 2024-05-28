import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "./screens/SearchScreen";
import { SavedScreen } from "./screens/SavedScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import UseAuth from "./Hooks/UseAuth";
import SignUp from "./components/SingUp";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

import { useState } from "react";
import { Header } from "./components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import LogIn from "./components/LogIn";
import { headerStyle } from "./styles/Header";
import { Search } from "./components/Search";
import { GigStackContext } from "./contexts/GigStackContext";
import { LikedGigContext } from "./contexts/LikedGigContext";
import { DislikedGigContext } from "./contexts/DislikedGigContext";
import { RadiusContext } from "./contexts/RadiusContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [gigStack, setGigStack] = useState("nosearch");
  const [likedGigs, setLikedGigs] = useState([]);
  const [dislikedIds, setDislikedIds] = useState([])
  const [radius, setRadius] = useState(10)

  const { user } = UseAuth();

  if (user) {
    return (
      <LikedGigContext.Provider value={{ likedGigs, setLikedGigs }}>
        <DislikedGigContext.Provider value={{dislikedIds , setDislikedIds}}>
          <RadiusContext.Provider value={{radius, setRadius}}>
        <GigStackContext.Provider value={{ gigStack, setGigStack }}>
          <NavigationContainer>
            <Tab.Navigator screenOptions={headerStyle}>
              <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                  headerTitle: Search,
                  tabBarIcon: ({ size, focused, color }) => {
                    return (
                      <TouchableOpacity>
                      <Image
                        style={styles.tabImage}
                        source={require("./assets/home.png")}
                      />
                      </TouchableOpacity>
                    );
                  },
                }}
              />

              <Tab.Screen
                name="Saved"
                component={SavedScreen}
                options={{
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
        </GigStackContext.Provider>
        </RadiusContext.Provider>
        </DislikedGigContext.Provider>
      </LikedGigContext.Provider>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="signUp">
          <Stack.Screen name="signup" component={SignUp}></Stack.Screen>
          <Stack.Screen name="login" component={LogIn}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "silver",
    alignItems: "center",
    justifyContent: "center",
  },
  tabImage: {
    flex: 1,
    objectFit: "contain",
  },
});
