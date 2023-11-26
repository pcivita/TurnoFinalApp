import { Stack } from "expo-router";
import { ActivitiesProvider } from "../../contexts/ActivitiesContext";

export default function Layout() {
  return (
    <ActivitiesProvider>
      <Stack />
    </ActivitiesProvider>
  );
}
