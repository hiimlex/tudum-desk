import { useState } from "react";
import { ColorsType, DEFAULT_THEME, ThemeProps } from "../../ui";

const useCustomTheme = () => {
  const [theme, setTheme] = useState<ThemeProps>(DEFAULT_THEME);

  const getLocalStorageTheme = () => {
    const localStoragetheme = JSON.parse(localStorage.getItem("theme") || "{}");

    if (Object.keys(localStoragetheme).length === 0) {
      localStorage.setItem("theme", JSON.stringify(DEFAULT_THEME));
    }

    setTheme((curr) => ({
      ...curr,
      ...DEFAULT_THEME,
      primary: localStoragetheme.primary,
      secondary: localStoragetheme.secondary,
    }));
  };

  const updateLocalStorageTheme = () => {
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  const setPrimaryColor = (color: ColorsType): void => {
    setTheme((currTheme) => ({ ...currTheme, primary: color }));
    updateLocalStorageTheme();
  };

  const setSecondaryColor = (color: ColorsType): void => {
    setTheme((currTheme) => ({ ...currTheme, secondary: color }));
    updateLocalStorageTheme();
  };

  const updateTheme = () => {
    localStorage.clear();
    setTheme({ ...DEFAULT_THEME });
    updateLocalStorageTheme();
  };

  return {
    theme,
    setPrimaryColor,
    setSecondaryColor,
    getLocalStorageTheme,
    updateTheme,
  };
};

export default useCustomTheme;
