import { View, Text } from "../components/Themed";
import { useEffect } from "react";
import useGetSurahContent from "../hooks/queries/useGetSurahContent";
import { RootStackScreenProps } from "../types";
import { Image, StyleSheet } from "react-native";
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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/loading.gif")}
          style={{
            width: 24,
            height: 24,
          }}
        />
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
