// import { useContext, useState, useEffect } from "react";
// import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
// import { router, Link, useLocalSearchParams, Stack } from "expo-router";
// import { ActivitiesContext } from "../../contexts/ActivitiesContext";
// import { Themes } from "../../assets/Themes";
// import Category from "../../components/Category";

// export default function EditActivity({ }) {
//   const [activityName, setActivityName] = useState("");
//   const [description, setDescription] = useState("");
//   const { addPendingActivity } = useContext(ActivitiesContext);

//   const [selectedId, setSelectedId] = useState(null);

//   const handleAddActivity = () => {
//     if (isFormFilled) {
//       addPendingActivity(activityName, description, selectedId);
//     }
//   };

//   const handleSelect = (id) => {
//     setSelectedId(id);
//   };

//   const [isFormFilled, setIsFormFilled] = useState(false);

//   useEffect(() => {
//     setIsFormFilled(activityName.trim().length > 0 && selectedId !== null);
//   }, [activityName, selectedId]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.titleContainer}>
//         <Text style={styles.title}> Edit Activity </Text>
//       </View>
//       <View style={styles.activityNameContainer}>
//         <Text style={styles.activityName}> Activity Name </Text>
//         <TextInput
//           style={styles.activityNameInput}
//           placeholder="Ex. Go on a Run!"
//           value={activityName}
//           onChangeText={setActivityName} // Update the state variable with the input
//         />
//       </View>
//       <View style={styles.descriptionContainer}>
//         <Text style={styles.activityName}> Description </Text>
//         <TextInput
//           editable
//           multiline
//           blurOnSubmit={true}
//           onSubmitEditing={() => {
//             Keyboard.dismiss();
//           }}
//           numberOfLines={4}
//           style={styles.descriptionInput}
//           placeholder="Ex. Go on a Run!"
//           value={description}
//           onChangeText={setDescription} // Update the state variable with the input
//         />
//       </View>
//       <View style={styles.categoriesContainer}>
//         {[1, 2, 3, 4, 5, 6].map((id) => (
//           <Category
//             key={id}
//             id={id}
//             isSelected={id === selectedId}
//             onSelect={handleSelect}
//           />
//         ))}
//       </View>
//       <View style={styles.buttonsContainer}>
//         <View style={styles.cancelContainer}>
//             <View
//               style={styles.buttonEnabled}
//             >
//               <Text style={styles.addToDice}>Cancel</Text>
//             </View>
//         </View>
//         <View style={styles.addToDiceContainer}>
//           <Link
//             disabled={!isFormFilled}
//             href={{
//               pathname: "/activities/home",
//               params: {
//                 name: "Alan",
//               },
//             }}
//             onPress={handleAddActivity} // Add the click handler here
//           >
//             <View
//               // style={isFormFilled ? styles.buttonEnabled : styles.buttonDisabled}
//               style={styles.buttonEnabled}
//             >
//               <Text style={styles.addToDice}>Add to Dice</Text>
//             </View>
//           </Link>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flex: 1,
//     gap: 5,
//     overflow: "hidden"
//   },
//   titleContainer: {
//     height: "10%",
//     backgroundColor: Themes.colors.salmon,
//     borderColor: "black",
//     justifyContent: "center",
//     borderRadius: 8,
//     margin: 8,
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: 40,
//     color: "white",
//     alignSelf: "center",
//   },
//   activityNameContainer: {
//     paddingTop: "5%",
//     height: "15%",
//     // borderWidth: 2,
//     // borderColor: "black",
//     gap: "10%",
//   },
//   activityName: {
//     marginHorizontal: 12,
//     fontSize: 24,
//     fontWeight: "bold",
//     // borderWidth: 2,
//     // borderColor: "black",
//   },
//   activityNameInput: {
//     marginHorizontal: 12,
//     backgroundColor: "#DCDCDC",
//     borderRadius: 5, // Optional: for rounded corners
//     padding: 10,
//   },
//   descriptionContainer: {
//     paddingTop: "5%",
//     height: "25%",
//     // borderWidth: 2,
//     // borderColor: "black",
//     gap: "10%",
//   },
//   descriptionInput: {
//     flex: 1,
//     fontSize: 20,
//     marginHorizontal: 12,
//     backgroundColor: "#DCDCDC",
//     borderRadius: 5, // Optional: for rounded corners
//     padding: 10,
//   },
//   categoriesContainer: {
//     gap: 10,
//     margin: 12,
//     flex: 1,
//     height: "32%",
//     //borderWidth: 2,
//     //borderColor: "black",
//     flexDirection: "row", // Align children in a row
//     flexWrap: "wrap", // Allow items to wrap to the next line
//     justifyContent: "space-between", // Optional, for spacing between items
//   },
//   buttonsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   cancelContainer: {
//     height: "90%",
//     //margin: 12,
//     //justifyContent: "flex-end", // Align children vertically to the end
//     //alignSelf: "flex-start", // Align children horizontally to the end
//   },
//   addToDiceContainer: {
//     height: "8%",
//     //margin: 12,
//     //justifyContent: "flex-end", // Align children vertically to the end
//     //alignSelf: "flex-end", // Align children horizontally to the end
//   },
//   buttonEnabled: {
//     backgroundColor: Themes.colors.salmon,
//     padding: 10,
//     width: "100%",
//     flex: 1,
//     alignContent: "center",
//     justifyContent: "center",
//     borderRadius: 20,
//     // borderWidth: 2,
//     // borderColor: "black",
//   },
//   buttonDisabled: {
//     backgroundColor: Themes.colors.lightGray,
//     padding: 10,
//     width: "100%",
//     flex: 1,
//     alignContent: "center",
//     justifyContent: "center",
//     borderRadius: 20,
//     // borderWidth: 2,
//     // borderColor: "black",
//   },
//   addToDice: {
//     alignSelf: "center",
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "white",
//   },
// });
