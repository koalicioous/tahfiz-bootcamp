import { RootTabScreenProps } from "../types";
import { View, Text } from "../components/Themed";
import { StyleSheet } from "react-native";

export default function Profile({ navigation }: RootTabScreenProps<"Profile">) {
  return (
    <View style={styles.container}>
      <Text>This is Profile</Text>
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
