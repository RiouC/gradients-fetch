import { useContext } from "react";
import { GlobalSettingsContext } from "../context/GlobalSettingsContext";

export const useGlobalSettings = () => {
  const context = useContext(GlobalSettingsContext);
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use GlobalSettingsContext outside of its provider`
    );
  }
  return context;
};
