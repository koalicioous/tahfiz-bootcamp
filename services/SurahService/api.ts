import request from "../../utils/request";

const SurahService = {
  getSurahList: async () => {
    return await request.get("/surah").then((res) => JSON.parse(res.data));
  },
  getSurahContent: async (surahNumber: number) => {
    return await request.get("");
  },
};

export default SurahService;
