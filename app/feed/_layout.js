import { Stack } from "expo-router";

import { PostsProvider } from "../../contexts/PostsContext";

export default function Layout() {
  return (
    <PostsProvider>
      <Stack />
    </PostsProvider>
  );
}
