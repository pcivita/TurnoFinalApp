import { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
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
  const [diceName, setDiceName] = useState("");
  const [description, setDescription] = useState("");
  const [choices, setChoices] = useState([null]);
  const [categoryID, setCategoryID] = useState(null);
  const [switchEnabled, setSwitchEnabled] = useState(false);

  const [isFormFilled, setIsFormFilled] = useState(false);
  const { addActivity } = useContext(ActivitiesContext);

  const categories = [
    ["Exercise", "running"],
    ["Work", "briefcase"],
    ["Academic", "graduation-cap"],
    ["Relax", "cat"],
    ["Social", "user-friends"],
    ["Food & Drink", "utensils"],
  ];

  const chunkChoices = (choices, size) => {
    return choices.reduce((acc, curr, i) => {
      if (!(i % size)) {
        acc.push([curr]);
      } else {
        acc[acc.length - 1].push(curr);
      }
      return acc;
    }, []);
  };

  const choicesPairs = chunkChoices(choices, 2);

  const addToChoices = (name) => {
    console.log("Adding to list of choices: " + name);
    const newChoices = [name, ...choices];
    
    if (newChoices.length === 7) {
      newChoices.pop();
    }
    setChoices(newChoices);
    setIsFormFilled(diceName.trim().length > 0 && categoryID !== null);
  };

  const handleCreateDice = () => {
    if (isFormFilled) {
      // TODO: Needs backend 
      console.log("Created dice!!");
    }
  };

  // TODO: figure out how to reset everything when back arrow pressed (in header.js)
  const resetState = () => {
    setDiceName("");
    setDescription("");
    setChoices([null]);
    setCategoryID(null);
    setSwitchEnabled(false);
    setIsFormFilled(false);
  };

  useEffect(() => {
    setIsFormFilled(diceName.trim().length > 0 && categoryID !== null && choices.length > 1);
  }, [diceName]);

  const handleCategorySelect = (id) => {
    setCategoryID(id);
    setIsFormFilled(diceName.trim().length > 0 && choices.length > 1);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <Header title="Create New Dice"/>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.diceNameContainer}>
            <Text style={styles.sectionTitle}>
              Dice Name <Text style={styles.asterick}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Dice Name"
              value={diceName}
              onChangeText={setDiceName}
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
            {/* <Activity style={styles.addActivity} /> */}
            {choicesPairs.map((pair, index) => (
              <View key={index} style={styles.choicesRow}>
                {pair.map((choice, index) => (
                  <Activity
                    key={index}
                    activityObject={choice}
                    index={index + 1 + index * 2}
                    addToChoices={addToChoices}
                    // handleAddChoice={handleAddChoice}
                  />
                ))}
              </View>
            ))}
          </View>
          <View style={styles.categoriesContainer}>
            <Text style={styles.sectionTitle}>
              Category <Text style={styles.asterick}>*</Text>
            </Text>
            <View style={styles.categories}>
              {[1, 2, 3, 4, 5, 6].map((id) => (
                <Category
                  key={id}
                  id={id}
                  isSelected={id === categoryID}
                  onSelect={handleCategorySelect}
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
        </ScrollView>
        <View style={styles.buttonContainer}>
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
          <View
            style={[
              styles.button,
              isFormFilled ? styles.buttonEnabled : styles.buttonDisabled,
            ]}
          >
            <Text style={styles.buttonText}>Create Dice</Text>
          </View>
          </Link>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: Themes.colors.background,
  },
  scrollContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
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
  diceNameContainer: {
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
    gap: 5,
  },
  choicesRow: {
    alignSelf: "center",
    width: "97.5%",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    borderColor: Themes.colors.mediumGray,
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
    height: 60,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    height: 40,
    width: 360,
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
