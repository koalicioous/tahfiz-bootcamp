import { View, Text } from "../components/Themed";
import { useEffect } from "react";
import useGetSurahContent from "../hooks/queries/useGetSurahContent";
import { RootStackScreenProps } from "../types";
import { StyleSheet } from "react-native";
import SurahContentWrapper from "../components/Surah/SurahContentWrapper";

export default function Surah({
  navigation,
  route,
}: RootStackScreenProps<"Surah">) {
  const { surahNumber } = route.params;
  const { surahContent, isLoading: loadingContent } = useGetSurahContent({
    surahNumber,
  });

  useEffect(() => {
    navigation.setOptions({ title: surahContent?.name.transliteration.id });
  }, [surahContent]);

  if (loadingContent) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SurahContentWrapper content={surahContent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0",
  },
});
