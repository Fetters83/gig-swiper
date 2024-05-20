import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "./screens/SearchScreen";
import { SavedScreen } from "./screens/SavedScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
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
                  source={require("./assets/favicon.png")}
                />
              );
            },
          }}
        />
        <Tab.Screen name="Saved" component={SavedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
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
