import { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import { router, Link, useLocalSearchParams, Stack } from "expo-router";
import { ActivitiesContext } from "../../contexts/ActivitiesContext";
import { Themes } from "../../assets/Themes";
import Category from "../../components/Category";

export default function Page() {
  const [activityName, setActivityName] = useState("");
  const [description, setDescription] = useState("");
  const { addPendingActivity } = useContext(ActivitiesContext);

  const handleAddActivity = () => {
    addPendingActivity("Testing123");
  };

  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: Themes.colors.salmon, // Set the header background color
          },
          headerTintColor: "white",
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Create Activity </Text>
      </View>
      <View style={styles.activityNameContainer}>
        <Text style={styles.activityName}> Activity Name </Text>
        <TextInput
          style={styles.activityNameInput}
          placeholder="Ex. Go on a Run!"
          value={activityName}
          onChangeText={setActivityName} // Update the state variable with the input
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.activityName}> Description </Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          style={styles.descriptionInput}
          placeholder="Ex. Go on a Run!"
          value={description}
          onChangeText={setDescription} // Update the state variable with the input
        />
      </View>
      <View style={styles.categoriesContainer}>
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <Category
            key={id}
            id={id}
            isSelected={id === selectedId}
            onSelect={handleSelect}
          />
        ))}
      </View>

      <View style={styles.addToDiceContainer}>
        <Link
          href={{
            pathname: "/activities/home",
            params: {
              name: "Alan",
            },
          }}
          onPress={handleAddActivity} // Add the click handler here
        >
          <View style={styles.addToDiceButton}>
            <Text style={styles.addToDice}> Add to Dice </Text>
          </View>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    gap: 5,
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
  activityNameContainer: {
    paddingTop: "5%",
    height: "15%",
    // borderWidth: 2,
    // borderColor: "black",
    gap: "10%",
  },
  activityName: {
    marginHorizontal: 12,
    fontSize: 24,
    fontWeight: "bold",
    // borderWidth: 2,
    // borderColor: "black",
  },
  activityNameInput: {
    marginHorizontal: 12,
    backgroundColor: "#DCDCDC",
    borderRadius: 5, // Optional: for rounded corners
    padding: 10,
  },
  descriptionContainer: {
    paddingTop: "5%",
    height: "25%",
    // borderWidth: 2,
    // borderColor: "black",
    gap: "10%",
  },
  descriptionInput: {
    flex: 1,
    fontSize: 20,
    marginHorizontal: 12,
    backgroundColor: "#DCDCDC",
    borderRadius: 5, // Optional: for rounded corners
    padding: 10,
  },
  categoriesContainer: {
    gap: 10,
    margin: 12,
    flex: 1,
    height: "32%",
    //borderWidth: 2,
    //borderColor: "black",
    flexDirection: "row", // Align children in a row
    flexWrap: "wrap", // Allow items to wrap to the next line
    justifyContent: "space-between", // Optional, for spacing between items
  },
  addToDiceContainer: {
    height: "8%",
    // borderWidth: 2,
    // borderColor: "black",
    margin: 12,
    justifyContent: "flex-end", // Align children vertically to the end
    alignItems: "flex-end", // Align children horizontally to the end
  },
  addToDiceButton: {
    backgroundColor: Themes.colors.salmon,
    padding: 10,
    width: "100%",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: "black",
  },
  addToDice: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
