import { Text, View } from "react-native";
import { ArabicText } from "../ArabicText";
import { Surah } from "./types";

const SurahItem = ({ surah }: { surah: Surah }) => {
  return (
    <View>
      <ArabicText>{surah.name.short}</ArabicText>
    </View>
  );
};

export default SurahItem;
