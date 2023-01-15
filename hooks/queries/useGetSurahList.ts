import { useQuery } from "react-query";
import SurahKey from "../../services/SurahService/generator";
import SurahService from "../../services/SurahService/api";

const useGetSurahList = () => {
  const { data, error } = useQuery({
    queryKey: SurahKey.all(),
    queryFn: () => SurahService.getSurahList(),
  });

  return {
    surahList: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetSurahList;
