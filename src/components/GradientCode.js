import { useGlobalSettings } from "../hook/useGlobalSettings";

const GradientCode = ({ colorStart, colorEnd }) => {
  const { darkMode } = useGlobalSettings();
  const darkModeClass = darkMode ? "bg-dark text-muted" : "";
  return (
    <code className={darkModeClass}>
      background-image: linear-gradient(to right, {colorStart}, {colorEnd});
    </code>
  );
};

export default GradientCode
