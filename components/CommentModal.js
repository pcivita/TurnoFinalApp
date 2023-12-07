import Modal from "react-native-modal";
import Images from "../assets/Themes/Images/index.js";
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Pressable,
} from "react-native";
import Comment from "./Comment.js";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Themes from "../assets/Themes/themes.js";
import { FontAwesome5 } from "@expo/vector-icons";
import { PostsContext } from "../contexts/PostsContext";
import Supabase from "../Supabase.js";

export default function CommentModal({
  id,
  postsTest,
  postIndex,
  isModalVisible,
  toggleModal,
  setModalVisible,
}) {
  // const comments = [
  //   ["@malinac", Images.profileImages.malina, "Great post!!", "black"],
  //   ["@pcivita", Images.profileImages.pedro, "Awesome!", "black"],
  //   // ["@malinac", Images.profileImages.malina, "Great post!!", "black"],
  //   // ["@pcivita", Images.profileImages.pedro, "Awesome!", "black"],
  //   // ["@malinac", Images.profileImages.malina, "Great post!!", "black"],
  //   // ["@pcivita", Images.profileImages.pedro, "Awesome!", "black"],
  //   // ["@malinac", Images.profileImages.malina, "Great post!!", "black"],
  //   // ["@pcivita", Images.profileImages.pedro, "Awesome!", "black"],
  // ];

  const { addCommentToPost } = useContext(PostsContext);

  const [newComment, setNewComment] = useState("");

  const { posts } = useContext(PostsContext);

  const userHandle = "@pcivita";
  const userName = "Pedro Civita";

  // console.log("POSTs CONTEXT ", posts);
  // console.log("POSTs Test ", postsTest);
  // console.log("POST INDEX", postIndex);

  const commentsTEST = posts[postIndex].comments;

  const handleAddComment = async () => {
    console.log("ID:", id);
    const post_id = id;
    const new_comment = {
      user_handle: "exampleUser",
      user_image: "imageURL",
      comment_text: "This is a comment",
    };

    const { data: post, error } = await Supabase.from("posts")
      .select("comments")
      .eq("id", post_id)
      .single();

    if (post) {
      const updated_comments = [...post.comments, new_comment];
      await Supabase.from("posts")
        .update({ comments: updated_comments })
        .eq("id", post_id);
    }

    // console.log(postIndex);
    // console.log(Images.profileImages.pedro);
    // console.log(newComment);
    // console.log(userHandle);
    // console.log(userName);

    // addCommentToPost(
    //   postIndex,
    //   userHandle,
    //   Images.profileImages.pedro,
    //   newComment
    // );

    // Add logic to handle the addition of a new comment
    // console.log("New Comment:", newComment);
    // You can update your state or context with the new comment
    setNewComment("");
  };
  // console.log(postIndex);

  return (
    <Modal
      onBackdropPress={() => setModalVisible(false)}
      onBackButtonPress={() => setModalVisible(false)}
      isVisible={isModalVisible}
      swipeDirection="down"
      onSwipeComplete={toggleModal}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      avoidKeyboard
      propagateSwipe={true}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <View style={styles.center}>
          <View style={styles.barIcon} />
          <Text style={styles.title}>Comments</Text>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            style={styles.scrollView}
          >
            <View flex={1} onStartShouldSetResponder={() => true}>
              {commentsTEST.map((commentData, index) => (
                <Comment key={index} commentData={commentData} />
              ))}
            </View>
          </ScrollView>
          <View style={styles.inputContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={Images.profileImages.pedro}
                style={styles.profileImg}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Add a comment..."
              value={newComment}
              onChangeText={(text) => setNewComment(text)}
            />
            <Pressable onPress={handleAddComment}>
              <View style={styles.sendContainer}>
                <FontAwesome5 name="arrow-up" size={20} color={"white"} />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: "white",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    paddingTop: 12,
    // paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // minHeight: 550,
    height: "85%",
    paddingBottom: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
    fontFamily: "Poppins-Bold",
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
  commentsList: {
    height: "100%",
    backgroundColor: "green",
  },
  scrollView: {
    width: "95%",
    // backgroundColor: "green",
  },
  inputContainer: {
    alignSelf: "flex-end",
    height: 100,
    borderTopWidth: 0.3,
    borderTopColor: "black",

    // paddingHorizontal: 10,
    width: "100%", // Adjust width as needed
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 12,
  },
  input: {
    height: 40,
    flex: 1,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Themes.colors.darkGray,
    paddingHorizontal: 10,
    // width: "90%"
  },
  addCommentButton: {
    alignSelf: "center", // Center the button
    marginTop: 10,
    padding: 10,
    backgroundColor: "blue", // Change color as needed
    borderRadius: 5,
  },
  addCommentButtonText: {
    color: "white", // Change color as needed
  },
  imageContainer: {
    width: "11.5%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
    overflow: "hidden",
  },
  profileImg: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
  },
  sendContainer: {
    width: "100%",
    padding: 10,
    borderRadius: 100,
    backgroundColor: Themes.colors.salmon,
  },
});
