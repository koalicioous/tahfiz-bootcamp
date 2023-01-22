import { View, Text } from "../components/Themed";
import { useEffect } from "react";
import useGetSurahContent from "../hooks/queries/useGetSurahContent";
import { RootStackScreenProps } from "../types";

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
    <View>
      <Text>Surah</Text>
    </View>
  );
}
