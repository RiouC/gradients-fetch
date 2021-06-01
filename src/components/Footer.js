import { useGlobalSettings } from "../hook/useGlobalSettings";

const Footer = () => {
  const { darkMode } = useGlobalSettings();
  const darkModeClass = darkMode ? "border-top border-white" : "";
  return (
    <footer className={`text-center text-white bg-dark py-3 mt-auto ${darkModeClass}`}>
      Made with <span className="text-danger">&hearts;</span> by Solène,
      Christophe & Raphaël for <b>Alyra</b>
    </footer>
  );
};

export default Footer;
