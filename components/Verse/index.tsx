import { StyleSheet } from "react-native";
import SurahNumberFrame from "../../assets/icons/SurahNumberFrame";
import { verse } from "../../hooks/queries/useGetSurahContent";
import { ArabicText } from "../ArabicText";
import { LPMQText } from "../LPMQText";
import { View, Text } from "../Themed";

const VerseItem = ({ verse }: { verse: verse }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* <View
          style={{
            marginRight: 8,
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                backgroundColor: "#fff0",
              }}
            >
              {verse.number.inSurah}
            </Text>
          </View>
          <SurahNumberFrame lightColor="#cbd5e1" darkColor="#334155" />
        </View> */}
        <View style={{ flexGrow: 1 }}>
          <ArabicText style={styles.arabText}>{verse.text.arab}</ArabicText>
        </View>
      </View>
      <View
        style={{
          marginTop: 4,
        }}
      >
        <Text style={styles.translationText}>
          {`${verse.number.inSurah}. ` + verse.translation.id}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  arabText: {
    textAlign: "right",
    fontSize: 24,
  },
  translationText: {
    lineHeight: 20,
    fontSize: 12,
  },
});

export default VerseItem;
