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
import GigInfoVisibleContext from "./contexts/GigInfoVisibleContext";
import { Header } from "./components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import LogIn from "./components/LogIn";
import { headerStyle } from "./styles/Header";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [gigInfoVisible, setGigInfoVisible] = useState(false);

  const { user } = UseAuth();

  if (user) {
    return (
      <GigInfoVisibleContext.Provider
        value={{ gigInfoVisible, setGigInfoVisible }}
      >
        <SafeAreaView>
          <Header></Header>
        </SafeAreaView>
        <NavigationContainer>
          <Tab.Navigator screenOptions={headerStyle}>
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
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
      </GigInfoVisibleContext.Provider>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabImage: {
    flex: 1,
    objectFit: "contain",
  },
});
