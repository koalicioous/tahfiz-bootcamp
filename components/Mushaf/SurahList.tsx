import { View, TextInput, Text } from "../Themed";
import useGetSurahList from "../../hooks/queries/useGetSurahList";
import { FlatList, StyleSheet } from "react-native";
import SurahItem from "./SurahItem";
import { useCallback, useMemo, useState } from "react";
import { Surah } from "./types";
import { ScreenProps } from "react-native-screens";
import { RootStackScreenProps, RootTabScreenProps } from "../../types";

const SurahList = ({ navigation, route }: RootTabScreenProps<"Mushaf">) => {
  const [query, setQuery] = useState("");
  const { surahList, isLoading: loadingSurah } = useGetSurahList();

  const renderSurahItem = useCallback(
    ({ item }: { item: Surah }) => {
      return (
        <SurahItem
          surah={item}
          screenProps={{
            navigation,
            route,
          }}
        />
      );
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

  if (loadingSurah)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <View style={style.container}>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 8,
          paddingVertical: 12,
          borderRadius: 8,
          marginBottom: 4,
        }}
        placeholder="Cari surat"
        value={query}
        onChangeText={(q) => setQuery(q)}
        lightBorder="#e2e8f0"
        darkBorder="#334155"
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
