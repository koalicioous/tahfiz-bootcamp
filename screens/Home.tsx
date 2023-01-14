import { RootTabScreenProps } from "../types";
import { View, Text } from "../components/Themed";
import { StyleSheet } from "react-native";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <Text>This is Home</Text>
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
