import { Text, View } from "react-native";
import { Surah } from "./types";

const SurahItem = ({ surah }: { surah: Surah }) => {
  return (
    <View>
      <Text>{surah.name.short}</Text>
    </View>
  );
};

export default SurahItem;
