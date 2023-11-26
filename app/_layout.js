import { Tabs } from "expo-router/tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { View } from "react-native";

import { Themes } from "../assets/Themes";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Themes.colors.salmon,
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          height: 80,
          backgroundColor: Themes.colors.lightGray,
          // borderTopWidth: 0.5,
          // borderTopColor: 'black',
        },
        // tabBarShowLabel: false,
        tabBarLabelStyle: {
          display: "none"
        }
      }}
    >
      <Tabs.Screen
        name="feed/index"
        options={{
          tabBarLabelStyle: { display: "flex" },
          tabBarLabel: "Feed",
          tabBarIcon: ({ size, color }) => (
            // <Ionicons name="flash-sharp" size={size} color={color} />
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          tabBarLabelStyle: { display: "flex" },
          tabBarLabel: "Activities",
          tabBarIcon: ({ size, color }) => (
            // <FontAwesome5 name="clipboard" size={size} color={color} />
            <Ionicons name="clipboard-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="roll/index"
        // options={{
        //   tabBarLabel: "Roll",
        //   tabBarIcon: ({ size, color }) => (
        //     <FontAwesome5 name="dice-five" size={size + 30} color={color} />
        //   ),
          
        //   tabBarItemStyle: {
        //     top: -20,
        //     alignItems: 'center',
        //     height: 70,
        //     borderRadius: 50,
        //     backgroundColor: Themes.colors.salmon,
        //     transform: [{rotate: '45deg'}] 
        //   }
        // }}
        
        options={{
          tabBarIcon: ({ size, color }) => (
            <View
              style={{
                top: -5,
                height: 85,
                width: 85,
                borderRadius: 50,
                backgroundColor: Themes.colors.lightGray,
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{ rotate: '45deg' }],
              }}
            >
              <FontAwesome5 name="dice-five" size={size + 30} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="progress/index"
        options={{
          tabBarLabelStyle: { display: "flex" },
          tabBarLabel: "Progress",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="checkbox-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabelStyle: { display: "flex" },
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
