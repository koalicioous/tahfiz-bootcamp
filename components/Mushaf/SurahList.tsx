import { View, TextInput } from "../Themed";
import useGetSurahList from "../../hooks/queries/useGetSurahList";
import { FlatList, StyleSheet } from "react-native";
import SurahItem from "./SurahItem";
import { useCallback, useMemo, useState } from "react";
import { Surah } from "./types";

const SurahList = () => {
  const [query, setQuery] = useState("");
  const { surahList, isLoading: loadingSurah } = useGetSurahList();

  const renderSurahItem = useCallback(
    ({ item }: { item: Surah }) => {
      return <SurahItem surah={item} />;
    },
    [surahList]
  );

  const surahData = useMemo(() => {
    if (!query) return surahList;
    return surahList.filter((surah: Surah) => {
      const surahName = String(surah.name.transliteration.id).toLowerCase();
      const aliases = [
        surahName,
        surahName.replace("-", ""),
        surahName.replace("-", " "),
        surahName.replace(/'/g, ""),
      ];
      if (aliases.some((alias) => alias.includes(query.toLowerCase())))
        return true;
      else return false;
    });
  }, [surahList, query]);

  return (
    <View style={style.container}>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 8,
          paddingVertical: 12,
          borderRadius: 8,
          borderColor: "#64748b",
          marginBottom: 4,
        }}
        placeholder="Cari surat"
        value={query}
        onChangeText={(q) => setQuery(q)}
      />
      <FlatList
        data={surahData}
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
