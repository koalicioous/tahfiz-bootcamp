import { View } from "../Themed";
import useGetSurahList from "../../hooks/queries/useGetSurahList";
import { FlatList } from "react-native";
import SurahItem from "./SurahItem";

const SurahList = () => {
  const { surahList, isLoading: loadingSurah } = useGetSurahList();
  return (
    <View>
      <FlatList
        data={surahList}
        renderItem={({ item }) => <SurahItem surah={item} />}
      />
    </View>
  );
};

export default SurahList;
