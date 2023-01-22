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
    <View>
      <SafeAreaView>
        <FlatList
          data={
            content?.preBismillah
              ? [
                  {
                    ...content.preBismillah,
                    preBismillah: true,
                  },
                  ...content.verses,
                ]
              : content?.verses
          }
          renderItem={({ item }) => <VerseItem verse={item} />}
          ItemSeparatorComponent={() => (
            <View
              style={{ height: 1 }}
              lightColor="#f4f4f4"
              darkColor="#374151"
            />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default SurahContentWrapper;
