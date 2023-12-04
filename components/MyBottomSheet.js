// import Modal from "react-native-modal";
// import React, { useState, useEffect, useContext, useMemo, useRef } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   Button
// } from "react-native";
// import { CommentsContext } from "../contexts/CommentsContext.js";
// import Comment from "./Comment.js";
// import BottomSheet from "@gorhom/bottom-sheet";

// export default function MyBottomSheet({ postId }) {
//   const comments = [
//     "Great post!!",
//     "Awesome!",
//     "Slayyy",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//   ];

//   const snapPoints = useMemo(() => ["25%", "67%", "86%"], []);

//   const bottomSheetRef = useRef(null);
 
//   // const handleClosePress = () => bottomSheetRef.current?.close();
//   // const handleOpenPress = () => bottomSheetRef.current?.expand();

//   useEffect(() => {
//     // Open the bottom sheet when postId is not null
//     if (postId !== null) {
//       bottomSheetRef.current?.expand();
//     }
//   }, [postId]);

//   const handleClosePress = () => {
//     bottomSheetRef.current?.close();
//     // Optionally, reset postId to null after closing
//     setBottomSheetPostId(null);
//   };


//   return (
//       <BottomSheet
//         ref={bottomSheetRef}
//         index={1} 
//         snapPoints={snapPoints}
//       >
//         {/* <Button style={styles.button} title="open" onPress={handleOpenPress}></Button> */}
//         <Button style={styles.button} title="close" onPress={handleClosePress}></Button>
//         <Text>hello</Text>
//       </BottomSheet>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     justifyContent: "center",
//     backgroundColor: "grey",
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: "center",
//   },
// });
