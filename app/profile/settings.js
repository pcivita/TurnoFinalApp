import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { Themes } from "../../assets/Themes";

export default function Page() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: Themes.colors.salmon,
          },
          headerTintColor: "white",
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Settings </Text>
      </View>
      <View style={styles.activityNameContainer}>
        <Text style={styles.subtitle}>
          Friend Name
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    gap: 5,
    backgroundColor: "white",
  },
  titleContainer: {
    height: "10%",
    backgroundColor: Themes.colors.salmon,
    borderColor: "black",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
    alignSelf: "center",
  },
  subtitle: {
    marginHorizontal: 12,
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    marginHorizontal: 12,
    padding: 10,
    fontSize: 15,
    borderRadius: 5,
    borderWidth: 3,
    padding: 10,
    borderWidth: 3,
    borderColor: Themes.colors.mediumGray,
  },
  activityNameContainer: {
    paddingTop: "3%",
    height: "14%",
    gap: "10%",
  },
  descriptionContainer: {
    paddingTop: "2%",
    height: "23%",
    gap: "10%",
  },
  categoriesContainer: {
    paddingTop: "2%",
    paddingBottom: 0,
    height: "37%",
    gap: "10%",
  },
  categories: {
    gap: 10,
    margin: 12,
    marginTop: 0,
    flex: 1,
    height: "40%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  addToDiceContainer: {
    height: "8%",
    margin: 12,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonEnabled: {
    backgroundColor: Themes.colors.salmon,
    padding: 10,
    width: "100%",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonDisabled: {
    backgroundColor: Themes.colors.salmonTransparent,
    padding: 10,
    width: "100%",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  addToDice: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  asterick: {
    color: Themes.colors.salmon,
  },
});
