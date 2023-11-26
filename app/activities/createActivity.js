import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { router, Link, useLocalSearchParams, Stack } from "expo-router";
import { ActivitiesContext } from "../../contexts/ActivitiesContext";

export default function Page() {
  const params = useLocalSearchParams();
  const { addPendingActivity } = useContext(ActivitiesContext);

  const handleAddActivity = () => {
    addPendingActivity("Testing123");
  };

  return (
    <View>
      <Stack.Screen
        options={{
          title: params.user,
        }}
      />
      <Text> Hello </Text>
      <Link
        href={{
          pathname: "/activities/home",
          params: {
            name: "Alan",
          },
        }}
        onPress={handleAddActivity} // Add the click handler here
      >
        Test
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "lightblue",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
