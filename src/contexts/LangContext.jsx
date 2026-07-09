import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

import { translations } from "../lib/translations";

const LangContext = createContext({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  // stable dictionary based on language
  const dict = useMemo(
    () => translations[lang] || translations.en,
    [lang]
  );

  // translation function
  const t = useCallback(
    (key) => {
      return dict[key] ?? translations.en[key] ?? key;
    },
    [dict]
  );

  const value = useMemo(
    () => ({ lang, setLang, t }),
    [lang, t]
  );

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
