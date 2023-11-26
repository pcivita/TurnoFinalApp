import { StyleSheet, Text, View, Button, SectionList } from "react-native";

import { router, Link, Stack } from "expo-router";
import Activity from "../../components/Activity";
// import { title } from "process";

export default function Page() {
  const DATA = [
    {
      title: "Current Activities",
      data: [
        "Read", "Write", "Have Fun", "Soccer", "Meditate", "Yoga"
      ],
    },
    {
      title: "Pending Activities",
      data: [ "Pending", "Pending", "Pending", "Pending", "Pending" ],
    },
  ];

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "My Activities",
          headerShown: true,
        }}
      />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index, section }) => (
          <Activity 
            activityName={item} 
            index={index + 1} 
            status={section.title}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>
            {title}
          </Text>
        )}
        style={styles.sectionList}
      />
      <Link
        href={{
          pathname: "/activities/createActivity",
          params: {
            user: "Alan",
          },
        }}
      >
        Create Activity
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
  },
  sectionList: {
    width: "100%",
  },
  header: {
    fontSize: 20,
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
