import request from "../../utils/request";

const SurahService = {
  getSurahList: () => {
    return request.get("/surah");
  },
};

export default SurahService;
