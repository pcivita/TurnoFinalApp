import { Tabs } from "expo-router/tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="feed/index"
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="flash-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          tabBarLabel: "Activities",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="flash-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="roll/index"
        options={{
          tabBarLabel: "Roll",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="flash-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress/index"
        options={{
          tabBarLabel: "Progress",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="flash-sharp" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="flash-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
