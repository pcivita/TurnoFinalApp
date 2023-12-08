import { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Link, Stack } from "expo-router";
import { ActivitiesContext } from "../../contexts/ActivitiesContext";
import { Themes } from "../../assets/Themes";
import Category from "../../components/Category";

export default function Page() {
  const [activityName, setActivityName] = useState("");
  const [description, setDescription] = useState("");
  const { addActivity } = useContext(ActivitiesContext);

  const [selectedId, setSelectedId] = useState(null);

  const handleAddActivity = () => {
    if (isFormFilled) {
      let category = categories[selectedId - 1][0];
      addActivity(activityName, description, category);
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
          <Text style={styles.subtitle}>
            Activity Name <Text style={styles.asterick}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Ex. Go on a Run!"
            value={activityName}
            onChangeText={setActivityName}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.subtitle}> Description</Text>
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
            onChangeText={setDescription}
          />
        </View>
        <View style={styles.categoriesContainer}>
          <Text style={styles.subtitle}>
            Category <Text style={styles.asterick}>*</Text>
          </Text>
          <View style={styles.categories}>
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
            onPress={handleAddActivity}
          >
            <View
              style={isFormFilled ? styles.buttonEnabled : styles.buttonDisabled}
            >
              <Text style={styles.addToDice}>Add to Dice</Text>
            </View>
          </Link>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    fontSize: 32,
    color: "white",
    alignSelf: "center",
    fontFamily: "Poppins-Bold",
  },
  subtitle: {
    marginHorizontal: 12,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  input: {
    flex: 1,
    marginHorizontal: 12,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 3,
    padding: 10,
    borderWidth: 3,
    borderColor: Themes.colors.mediumGray,
    fontFamily: "Poppins-Regular",
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
    fontFamily: "Poppins-Bold",
  },
  asterick: {
    color: Themes.colors.salmon,
  },
});
