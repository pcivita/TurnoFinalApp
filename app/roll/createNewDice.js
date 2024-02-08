import { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Switch,
} from "react-native";
import { Link, Stack } from "expo-router";
import { ActivitiesContext } from "../../contexts/ActivitiesContext";
import { Themes } from "../../assets/Themes";
import Category from "../../components/Category";
import Header from "../../components/Header";
import Activity from "../../components/Activity";

export default function Page() {
  const [activityName, setActivityName] = useState("");
  const [description, setDescription] = useState("");
  const { addActivity } = useContext(ActivitiesContext);

  const handleCreateDice = () => {
    if (isFormFilled) {
      console.log("created dice!!");
    }
  };

  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    setIsFormFilled(activityName.trim().length > 0 && selectedId !== null);
  }, [activityName]);

  const categories = [
    ["Exercise", "running"],
    ["Work", "briefcase"],
    ["Academic", "graduation-cap"],
    ["Relax", "cat"],
    ["Social", "user-friends"],
    ["Food & Drink", "broom"],
  ];
  const [selectedId, setSelectedId] = useState(null);
  const handleSelect = (id) => {
    setSelectedId(id);
    setIsFormFilled(activityName.trim().length > 0);
  };

  const [switchEnabled, setSwitchEnabled] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <Header title="Create New Dice" />
        <View style={styles.activityNameContainer}>
          <Text style={styles.sectionTitle}>
            Dice Name <Text style={styles.asterick}>*</Text>
          </Text>
          <TextInput
            // multiline
            // numberOfLines={1}
            style={styles.input}
            placeholder="Dice Name"
            value={activityName}
            onChangeText={setActivityName}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Description</Text>
          {/* <TextInput
            editable
            multiline
            blurOnSubmit={true}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            numberOfLines={4}
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          /> */}
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
        </View>
        <View style={styles.choicesContainer}>
          <Text style={styles.sectionTitle}>
            Choices <Text style={styles.asterick}>*</Text>
          </Text>
          <Text style={styles.sectionSubtitle}>
            Add up to 6 choices, each representing a face of the dice!
          </Text>
          <Activity style={styles.addActivity} />
        </View>
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>
            Category<Text style={styles.asterick}>*</Text>
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
        <View style={styles.switchContainer}>
          <Text style={styles.postDiceText}>Post dice to the community</Text>
          <Switch
            trackColor={{ true: Themes.colors.salmon }}
            thumbColor={"white"}
            ios_backgroundColor={Themes.colors.mediumGray}
            onValueChange={() => setSwitchEnabled(!switchEnabled)}
            value={switchEnabled}
          />
        </View>
        <View style={styles.buttonContainer}>
          {/* <Link
            disabled={!isFormFilled}
            href={{
              pathname: "/activities/home",
              params: {
                name: "Alan",
              },
            }}
            onPress={handleCreateDice}
          > */}
            <View style={[styles.button, isFormFilled ? styles.buttonEnabled : styles.buttonDisabled]}>
              <Text style={styles.buttonText}>Create Dice</Text>
            </View>
          {/* </Link> */}
        </View>

        {/* <View style={styles.buttonContainer}>
          <Link
            disabled={!isFormFilled}
            href={{
              pathname: "/activities/home",
              params: {
                name: "Alan",
              },
            }}
            onPress={handleCreateDice}
          >
            <View style={[styles.button, isFormFilled ? styles.buttonEnabled : styles.buttonDisabled]}>
              <Text style={styles.buttonText}>Create Dice</Text>
            </View>
          </Link>
        </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: 10,
    backgroundColor: Themes.colors.background,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  sectionSubtitle: {
    fontSize: 12, // TODO: make text thin or bigger but keep as 1 line?
    fontFamily: "Poppins-Regular",
  },
  postDiceText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Themes.colors.darkGray,
    height: 45,
    fontFamily: "Poppins-Regular",
  },
  activityNameContainer: {
    height: 75,
    width: "95%",
    gap: 5,
  },
  descriptionContainer: {
    height: 75,
    width: "95%",
    gap: 5,
  },
  choicesContainer: {
    width: "95%",
    height: 200,
    gap: 5,
  },
  categoriesContainer: {
    width: "95%",
    height: 125,
    gap: 5,
  },
  categories: {
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  switchContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Themes.colors.darkGray,
    height: 60,
    width: "100%",
    gap: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: "95%",
    height: 45,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 40,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonEnabled: {
    backgroundColor: Themes.colors.salmon,
  },
  buttonDisabled: {
    backgroundColor: Themes.colors.salmonTransparent,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  asterick: {
    color: Themes.colors.salmon,
  },
});
