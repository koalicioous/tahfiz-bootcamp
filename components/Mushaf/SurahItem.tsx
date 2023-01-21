import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../Themed";
import { ArabicText } from "../ArabicText";
import { Surah } from "./types";
import SurahNumberFrame from "../../assets/icons/SurahNumberFrame";
import { LPMQText } from "../LPMQText";

const SurahItem = ({ surah }: { surah: Surah }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
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
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              {surah.number}
            </Text>
          </View>
          <SurahNumberFrame lightColor="#cbd5e1" darkColor="#334155" />
        </View>
        <View>
          <Text style={styles.idTitle}>{surah.name.transliteration.id}</Text>
          <View style={styles.surahInformation}>
            <Text
              style={styles.surahInformationText}
              lightColor="#64748b"
              darkColor="#94a3b8"
            >{`${surah.numberOfVerses} ayat`}</Text>
            <Text
              style={{
                marginHorizontal: 2,
              }}
              lightColor="#64748b"
              darkColor="#94a3b8"
            >
              &bull;
            </Text>
            <Text
              style={styles.surahInformationText}
              lightColor="#64748b"
              darkColor="#94a3b8"
            >
              {surah.name.translation.id}
            </Text>
          </View>
        </View>
      </View>
      <ArabicText
        style={styles.arabicTitle}
        lightColor="#1d4ed8"
        darkColor="#eff6ff"
      >
        {surah.name.short}
      </ArabicText>
      {/* <LPMQText
        style={styles.arabicTitle}
        lightColor="#1d4ed8"
        darkColor="#eff6ff"
      >
        {surah.name.short}
      </LPMQText> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    // borderWidth: 1,
    borderColor: "#f3f4f6",
    borderRadius: 4,
    padding: 8,
    paddingVertical: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arabicTitle: {
    fontSize: 24,
    // color: "#1d4ed8",
  },
  idTitle: {
    fontSize: 16,
    // color: "#374151",
  },
  surahInformation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  surahInformationText: {
    fontSize: 12,
  },
});

export default SurahItem;
