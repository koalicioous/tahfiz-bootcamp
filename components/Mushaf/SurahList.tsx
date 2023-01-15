import { View } from "../Themed";
import useGetSurahList from "../../hooks/queries/useGetSurahList";
import { FlatList, StyleSheet } from "react-native";
import SurahItem from "./SurahItem";
import { useCallback } from "react";
import { Surah } from "./types";

const SurahList = () => {
  const { surahList, isLoading: loadingSurah } = useGetSurahList();

  const renderSurahItem = useCallback(
    ({ item }: { item: Surah }) => {
      return <SurahItem surah={item} />;
    },
    [surahList]
  );

  return (
    <View style={style.container}>
      <FlatList
        data={surahList}
        renderItem={renderSurahItem}
        ItemSeparatorComponent={() => (
          <View
            style={{ height: 1 }}
            lightColor="#e2e8f0"
            darkColor="#1e293b"
          />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

export default SurahList;
