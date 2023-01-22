import { useQuery } from "react-query";
import SurahKey from "../../services/SurahService/generator";
import SurahService from "../../services/SurahService/api";

type useGetSurahContentProps = {
  surahNumber: number;
};

type verse = {
  number: {
    inQuran: number;
    inSurah: number;
  };
  meta: {
    juz: number;
    page: number;
    manzil: number;
    ruku: number;
    hizbQuarter: number;
    sajda: {
      recommended: boolean;
      obligatory: boolean;
    };
  };
  text: {
    arab: string;
    transliteration: {
      en: string;
    };
  };
  translation: {
    en: string;
    id: string;
  };
  audio: {
    primary: string;
    secondary: string[];
  };
  tafsir: {
    id: {
      short: string;
      long: string;
    };
  };
};

type SurahContentData = {
  number: number;
  sequence: number;
  numberOfVerses: number;
  name: {
    short: string;
    long: string;
    transliteration: {
      en: string;
      id: string;
    };
    translation: {
      en: string;
      id: string;
    };
  };
  revelation: {
    arab: string;
    en: string;
    id: string;
  };
  tafsir: {
    id: string;
  };
  preBismillah: string | null;
  verses: verse[];
};

const useGetSurahContent = ({ surahNumber }: useGetSurahContentProps) => {
  const { data, error } = useQuery<{
    data: SurahContentData;
  }>({
    queryKey: SurahKey.one(surahNumber),
    queryFn: () => SurahService.getSurahContent(surahNumber),
  });

  return {
    surahContent: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetSurahContent;
