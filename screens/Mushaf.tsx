import { RootTabScreenProps } from "../types";
import { View, Text } from "../components/Themed";
import { StyleSheet } from "react-native";

export default function Mushaf({ navigation }: RootTabScreenProps<"Mushaf">) {
  return (
    <View style={styles.container}>
      <Text>This is Mushaf</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
