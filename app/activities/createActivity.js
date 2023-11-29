import { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
} from "react-native";
import { router, Link, useLocalSearchParams, Stack } from "expo-router";
import { ActivitiesContext } from "../../contexts/ActivitiesContext";
import { Themes } from "../../assets/Themes";
import Category from "../../components/Category";

export default function Page() {
  const [activityName, setActivityName] = useState("");
  const [description, setDescription] = useState("");
  const { addPendingActivity } = useContext(ActivitiesContext);

  const [selectedId, setSelectedId] = useState(null);

  const handleAddActivity = () => {
    if (isFormFilled) {
      addPendingActivity(activityName, description, selectedId);
    }
  };

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    setIsFormFilled(activityName.trim().length > 0 && selectedId !== null);
  }, [activityName, selectedId]);

  const categories = [
    ["Exercise", "running"],
    ["Relax", "cat"],
    ["Social", "user-friends"],
    ["Work", "briefcase"],
    ["Academic", "graduation-cap"],
    ["Chore", "broom"],
  ];

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
        <Text style={styles.title}> Create Activity </Text>
      </View>
      <View style={styles.activityNameContainer}>
        <Text style={styles.subtitle}> Activity Name </Text>
        <TextInput
          style={styles.input}
          placeholder="E. Go on a Run!"
          value={activityName}
          onChangeText={setActivityName} // Update the state variable with the input
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.subtitle}> Description </Text>
        <TextInput
          editable
          multiline
          blurOnSubmit={true}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          numberOfLines={4}
          style={styles.input}
          placeholder="Ex. Go on a run around Lake Lagunita"
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
            categoryName={categories[id - 1][0]}
            iconName={categories[id - 1][1]}
          />
        ))}
      </View>

      <View style={styles.addToDiceContainer}>
        <Link
          disabled={!isFormFilled}
          href={{
            pathname: "/activities/home",
            params: {
              name: "Alan",
            },
          }}
          onPress={handleAddActivity} // Add the click handler here
        >
          <View
            style={isFormFilled ? styles.buttonEnabled : styles.buttonDisabled}
          >
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
  subtitle: {
    marginHorizontal: 12,
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 15,
    backgroundColor: Themes.colors.mediumGray,
    borderRadius: 5,
    padding: 10,
  },
  activityNameContainer: {
    paddingTop: "5%",
    height: "15%",
    gap: "10%",
  },
  descriptionContainer: {
    paddingTop: "5%",
    height: "25%",
    gap: "10%",
  },
  categoriesContainer: {
    gap: 10,
    margin: 12,
    flex: 1,
    height: "40%", 
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  addToDiceContainer: {
    height: "8%",
    margin: 12,
    justifyContent: "flex-end", // Align children vertically to the end
    alignItems: "flex-end", // Align children horizontally to the end
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
