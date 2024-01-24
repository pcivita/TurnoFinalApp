import { View, StyleSheet, SafeAreaView, FlatList, Animated } from "react-native";
import StatsCard from "../StatsCard"
import { Themes } from "../../assets/Themes";
import { useRef } from "react";
import Supabase from "../../Supabase";
import { useEffect } from "react";

export default function MyPosts() {
  const [data, setData] = useState();

  // Handling Supabase logic taken from supabase website and CS147L Lecture 13
  const handleRecordUpdated = (payload) => {
    setData((oldData) =>
      oldData.map((item) => {
        if (item.id === payload.old.id) {
          return payload.new;
        } else {
          return item;
        }
      })
    );
  };

  const handleRecordInserted = (payload) => {
    console.log("INSERT", payload);
    setData((oldData) => [...oldData, payload.new]);
  };

  const handleRecordDeleted = (payload) => {
    console.log("DELETE", payload);
    setData((oldData) => oldData.filter((item) => item.id !== payload.old.id));
  };

  useEffect(() => {
    // Listen for changes to db
    // From https://supabase.com/docs/guides/realtime/concepts#postgres-changes
    Supabase.channel("schema-db-changes")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "posts" },
        handleRecordUpdated
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "posts" },
        handleRecordInserted
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "posts" },
        handleRecordDeleted
      )
      .subscribe();
  }, []);

  useEffect(() => {
    // Fetch data on initial load
    const fetchData = async () => {
      const response = await Supabase.from("posts").select("*");
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.postTextContainer}>
        <Text style={styles.postText}>Posts</Text>
      </View>
      {data !== undefined &&
        [...data]
          .reverse()
          .map(
            (post, index) =>
              post.is_profile_post === true && (
                <Post
                  isYourPost={true}
                  key={index}
                  id={post.id}
                  postIndex={index}
                  profilePost={post.is_profile_post}
                  handle={post.user_handle}
                  profilePic={post.user_profile_pic}
                  activityName={post.post_text}
                  comments={post.comments}
                />
              )
          )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Themes.colors.background,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    height: "16%",
    paddingBottom: 12,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: Themes.colors.salmon,
  },
  banner: {
    paddingHorizontal: 20,
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerDice: {
    // borderWidth: 2,
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    marginHorizontal: "auto",
  },
  postTextContainer: {
    height: 30,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  postText: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
  },
});
