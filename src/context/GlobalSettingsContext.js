import { createContext, useState } from "react";

export const GlobalSettingsContext = createContext();

export const GlobalSettingsContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState("en");
  const langMessages = {
    "en": {"tagline": "Ultimate collection of the most beautiful shades",
           "add": "Add",
           "full": "fullscreen"},
    "fr": {"tagline": "Ultime collection de plus beaux dégradés",
           "add": "Ajouter",
           "full": "plein écran"}
  };

  
  return (
    <GlobalSettingsContext.Provider value={{ darkMode, setDarkMode, lang, setLang, langMessages }}>
         {children}
       </GlobalSettingsContext.Provider>
  );
};
