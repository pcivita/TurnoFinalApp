import { View } from "react-native";
import SwipeButton from "../SwipeButton";
export default function CompleteDice() {
  return (
    <View>
      <SwipeButton onToggle={onToggle} />
    </View>
  );
}
