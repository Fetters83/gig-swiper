import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
// import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "./screens/SearchScreen";
import { SavedScreen } from "./screens/SavedScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import UseAuth from "./Hooks/UseAuth";
import SignUp from "./components/SingUp";
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";

import { useState } from "react";
import { Header } from "./components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import LogInScreen from "./screens/LogInScreen";
import { headerStyle } from "./styles/Header";
import { Search } from "./components/Search";
import { GigStackContext } from "./contexts/GigStackContext";
import { LikedGigContext } from "./contexts/LikedGigContext";

import writeToDatabase from "./writeToDatabase";
import getLikedGigs from "./getLikedGigs";

import { collection, getDocs } from "firebase/firestore";
import db from "./firebaseConfig";

import { DislikedGigContext } from "./contexts/DislikedGigContext";
import { RadiusContext } from "./contexts/RadiusContext";
import { LoadingContext } from "./contexts/LoadingContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [gigStack, setGigStack] = useState("nosearch");
  const [likedGigs, setLikedGigs] = useState([]);

  const [dislikedIds, setDislikedIds] = useState([]);
  const [radius, setRadius] = useState(10);
  const [loading, setLoading] = useState(false);

  const { user } = UseAuth();

  const [loggedInUser, setLoggedInUser] = useState(null);

  // useEffect(() => {
  //   getLikedGigs(user);
  // }, []);

  if (user) {
    return (
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <LikedGigContext.Provider value={{ likedGigs, setLikedGigs }}>
          <DislikedGigContext.Provider value={{ dislikedIds, setDislikedIds }}>
            <RadiusContext.Provider value={{ radius, setRadius }}>
              <GigStackContext.Provider value={{ gigStack, setGigStack }}>
                <NavigationContainer>
                  <Tab.Navigator
                    screenOptions={headerStyle}
                    tabBarOptions={{
                      activeTintColor: "#000",
                      inactiveTintColor: "#444",
                      activeBackgroundColor: "#ff9900",
                      inactiveBackgroundColor: "#ff9900",
                      style: {
                        backgroundColor: "#ff9900",
                        paddingBottom: 3,
                      },
                    }}
                  >
                    <Tab.Screen
                      name="Search"
                      component={SearchScreen}
                      options={{
                        headerTitle: Search,
                        tabBarIcon: ({ size, focused, color }) => {
                          return (
                            <Image
                              style={styles.tabImage}
                              source={require("./assets/home.png")}
                            />
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
      </LoadingContext.Provider>
    );
  } else {
    return (
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="signUp">
            <Stack.Screen name="Sign up" component={SignUp}></Stack.Screen>
            <Stack.Screen name="Login" component={LogInScreen}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </LoadingContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  tabImage: {
    flex: 1,
    objectFit: "contain",
    width: 40,
  },
});
