import { RootTabScreenProps } from "../types";
import { View, Text } from "../components/Themed";
import { StyleSheet } from "react-native";
import SurahList from "../components/Mushaf/SurahList";

export default function Mushaf({
  navigation,
  route,
}: RootTabScreenProps<"Mushaf">) {
  return (
    <View style={styles.container}>
      <SurahList navigation={navigation} route={route} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    paddingBottom: 0,
  },
});
