import { StyleSheet, Text, View, Button, SectionList } from "react-native";

import { router, Link, Stack } from "expo-router";
import Activity from "../../components/Activity";

export default function Page() {
  const DATA = [
    {
      title: "Current Activities",
      data: ["Read", "Write", "Have Fun", "Read", "Read", "Read"],
    },
    {
      title: "Upcoming Activities",
      data: [
        "147 sux",
        "Read",
        "Read",
        "Read",
        "Read",
        "Read",
        "Read",
        "Read",
        "Read",
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: " ",
          headerShown: true,
        }}
      />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Activity activityName={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
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
    backgroundColor: "#fff",
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
