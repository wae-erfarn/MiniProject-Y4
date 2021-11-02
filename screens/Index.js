import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// import Profile from "./Profile";
import Home from "./Home";


const Tab = createBottomTabNavigator();

export default function Index() {
  return (
   
    <Tab.Navigator
      // initialRouteName="Profile"
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     if (route.name === "Home") {
      //       return (
      //         <MaterialCommunityIcons
      //           name={focused ? "home" : "home"}
      //           size={size}
      //           color={color}
      //         />
      //       );
      //     } else if (route.name === "Profile") {
      //       return (
      //         <MaterialCommunityIcons
      //           name={focused ? "account" : "account"}
      //           size={size}
      //           color={color}
      //         />
      //       );
      //     }
      //   },
      //   tabBarInactiveTintColor: "gray",
      //   tabBarActiveTintColor: "#f37721",
      // })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "หน้าแรก",
          headerShown: false,
          tabBarLabel: "หน้าแรก",
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "โปรไฟล์",
          headerShown: false,
          tabBarLabel: "โปรไฟล์",
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="account" color={color} size={size} />
          // ),
        }}
      /> */}
    </Tab.Navigator>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerprofile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e4e4e4",
    height: -50,
  },
});
