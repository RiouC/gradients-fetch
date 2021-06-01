import { createContext, useState } from "react"

export const GlobalSettingsContext = createContext()

export const GlobalSettingsContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState("fr");
  // const langMessages = {
  //   "en": {},
  //   "fr": {}
  // };

  
  return (
      <GlobalSettingsContext.Provider value={{ darkMode, setDarkMode, lang, setLang }}>
         {children}
       </GlobalSettingsContext.Provider>
  );
};
