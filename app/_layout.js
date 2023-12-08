import { Tabs } from "expo-router/tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import Kudos from "../components/Icons/Kudos";
import KudosIcon from "../components/Icons/Kudos";
import { Themes } from "../assets/Themes";
import { PostsProvider } from "../contexts/PostsContext";
import { ActivitiesProvider, ActivitiesContext } from "../contexts/ActivitiesContext";
import { useContext } from "react";
import { useFonts } from "expo-font";
import DiceSVG from "../components/Icons/Dice";

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/Poppins/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <ActivitiesProvider>
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
            tabBarLabelStyle: styles.iconAndText,
            tabBarLabel: "Feed",
            tabBarIcon: ({ color }) => (
              <KudosIcon size={27} color={color} notFilled={true} />
            ),
          }}
        />
        <Tabs.Screen
          name="activities"
          options={{
            tabBarLabelStyle: styles.iconAndText,
            tabBarLabel: "Activities",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name="clipboard" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="roll"
          options={{
            tabBarIcon: ({ size, color }) => (
              <View
                style={{
                  top: -4,
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                  backgroundColor: Themes.colors.lightGray,
                  justifyContent: "flex-start",
                  paddingTop: 2,
                  alignItems: "center",
                }}
              >
                <DiceSVG width={70} color={color} rectSize={10}/>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="progress/index"
          options={{
            tabBarLabelStyle: styles.iconAndText,
            tabBarLabel: "Progress",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name="check-circle" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabelStyle: styles.iconAndText,
            tabBarLabel: "Profile",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name="user" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </PostsProvider>
    </ActivitiesProvider>
  );
}


const styles = StyleSheet.create({
  iconAndText: {
    display: "flex", 
    fontSize: 12, 
    fontFamily: "Poppins-Regular", 
    
  },
});
