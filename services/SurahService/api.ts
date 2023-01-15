import request from "../../utils/request";

const SurahService = {
  getSurahList: async () => {
    return await request.get("/surah").then((res) => JSON.parse(res.data));
  },
};

export default SurahService;
