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
import Header from "../../components/Header";

export default function Page() {
  const [activityName, setActivityName] = useState("");
  const [description, setDescription] = useState("");
  const { addActivity } = useContext(ActivitiesContext);


  const handleAddActivity = () => {
    if (isFormFilled) {
      addActivity(activityName, description);
    }
  };

  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    setIsFormFilled(activityName.trim().length > 0);
  }, [activityName]);

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
        <Stack.Screen options={{ headerShown: false }} />
        <Header title="Create Activity" />
        <View style={styles.activityNameContainer}>
          <Text style={styles.title}>
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
          <Text style={styles.title}> Description</Text>
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
        
        <View>
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
            <View style={[styles.button, isFormFilled ? styles.buttonEnabled : styles.buttonDisabled]}>
              <Text style={styles.buttonText}>Add to Dice</Text>
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
    display: "flex",
    alignItems: "center",
    // flex: 1,
    gap: 10,
    backgroundColor: Themes.colors.background
  },
  title: {
    marginHorizontal: 12,
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  input: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 16,
    borderRadius: 5,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "black",
    fontFamily: "Poppins-Regular",
  },
  activityNameContainer: {
    height: "10%",
    width: "100%",
    gap: 10,
  },
  descriptionContainer: {
    height: "20%",
    width: "100%",
    gap: 10,
    marginBottom: 15
  },
  buttonContainer: {
    height: "10%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 340,
    height: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 30,
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
