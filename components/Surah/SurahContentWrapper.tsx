import { FlatList, SafeAreaView } from "react-native";
import { SurahContentData } from "../../hooks/queries/useGetSurahContent";
import VerseItem from "../Verse";
import { View } from "../Themed";

const SurahContentWrapper = ({
  content,
}: {
  content: SurahContentData | undefined;
}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={content?.verses}
        renderItem={({ item }) => <VerseItem verse={item} />}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1 }} lightColor="#fff0" />
        )}
      />
    </SafeAreaView>
  );
};

export default SurahContentWrapper;
