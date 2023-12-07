import { Tabs } from "expo-router/tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";
import Kudos from "../components/Icons/Kudos";
import KudosIcon from "../components/Icons/Kudos";
import { Themes } from "../assets/Themes";
import { PostsProvider } from "../contexts/PostsContext";

export default function AppLayout() {
  return (
    <PostsProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Themes.colors.salmon,
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            height: 80,
            backgroundColor: Themes.colors.lightGray,
          },
          // tabBarShowLabel: false,
          tabBarLabelStyle: {
            display: "none",
          },
        }}
      >
        <Tabs.Screen
          name="feed"
          options={{
            tabBarLabelStyle: { display: "flex" },
            tabBarLabel: "Feed",
            tabBarIcon: ({ size, color }) => (
              <KudosIcon size={28} color={color} notFilled={true} />
            ),
          }}
        />
        <Tabs.Screen
          name="activities"
          options={{
            tabBarLabelStyle: { display: "flex" },
            tabBarLabel: "Activities",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name="clipboard" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="roll/index"
          options={{
            tabBarIcon: ({ size, color }) => (
              <View
                style={{
                  top: -5,
                  height: 85,
                  width: 85,
                  borderRadius: 50,
                  backgroundColor: Themes.colors.lightGray,
                  justifyContent: "center",
                  alignItems: "center",
                  transform: [{ rotate: "45deg" }],
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
              <FontAwesome5 name="check-circle" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabelStyle: { display: "flex" },
            tabBarLabel: "Profile",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name="user" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </PostsProvider>
  );
}
