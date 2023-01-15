import { Axios } from "axios";

const baseURL = "https://api-quran-3dclb8dog-ulhiel.vercel.app/";

const request = new Axios({
  baseURL,
});

export default request;
