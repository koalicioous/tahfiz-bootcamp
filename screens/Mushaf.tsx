import { RootTabScreenProps } from "../types";
import { View, Text } from "../components/Themed";
import { StyleSheet } from "react-native";
import useGetSurahList from "../hooks/queries/useGetSurahList";

export default function Mushaf({ navigation }: RootTabScreenProps<"Mushaf">) {
  const { surahList, isLoading: loadingSurah } = useGetSurahList();
  console.log(surahList);

  if (loadingSurah)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
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
