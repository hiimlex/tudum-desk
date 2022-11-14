import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../core";
import {
  ColorsType,
  hideThemeModal,
  setPrimaryColor,
  setSecondaryColor,
} from "../../../core/store/slicers";
import { Modal } from "../Modal";
import {
  ThemeButton,
  ThemeButtonGroup,
  ThemeDot,
  ThemeModalContainer,
  ThemeSwitcherContainer,
  ThemeSwitcherContent,
  ThemeSwitcherLabel,
} from "./ThemeModal.styles";

type SwitcherModes = "primary" | "secondary";

const ThemeModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state: RootState) => state.themeModal.show);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [colorsAsArray, setColorsAsArray] = useState<
    { key: ColorsType; value: string }[]
  >([]);
  const [showThemeSwitcher, setShowThemeSwitcher] = useState(false);
  const [themeSwitcherMode, setThemeSwitcherMode] = useState<SwitcherModes>();

  useEffect(() => {
    if (theme.colors) {
      const mappedColors = Object.keys(theme.colors).map((key) => ({
        key: key as ColorsType,
        value: theme.colors[key as keyof typeof theme.colors],
      }));

      setColorsAsArray(mappedColors);
    }
  }, [theme]);

  const handleCloseThemeModal = () => {
    setShowThemeSwitcher(false);
    dispatch(hideThemeModal());
  };

  const handleThemeSwitcherMode = (mode: SwitcherModes) => {
    setShowThemeSwitcher((curr) => true);
    setThemeSwitcherMode(mode);
  };

  const handleThemeColorSwitch = (color: string) => {
    const dispatchArr: Record<SwitcherModes, () => void> = {
      primary: () => dispatch(setPrimaryColor(color)),
      secondary: () => dispatch(setSecondaryColor(color)),
    };

    if (themeSwitcherMode && dispatchArr[themeSwitcherMode]) {
      dispatchArr[themeSwitcherMode]();
      setShowThemeSwitcher(false);
    }
  };

  return (
    <React.Fragment>
      {showModal && (
        <Modal
          title="Theme configuration"
          onClose={handleCloseThemeModal}
          show={showModal}
        >
          <ThemeModalContainer>
            <ThemeButtonGroup>
              <ThemeButton
                style={{ marginRight: 18 }}
                onClick={() => handleThemeSwitcherMode("primary")}
              >
                <ThemeDot color={theme.primary}></ThemeDot>
              </ThemeButton>
              <ThemeButton
                style={{ marginRight: 18 }}
                onClick={() => handleThemeSwitcherMode("secondary")}
              >
                <ThemeDot color={theme.secondary}></ThemeDot>
              </ThemeButton>
            </ThemeButtonGroup>

            {showThemeSwitcher && themeSwitcherMode && (
              <ThemeSwitcherContainer>
                <ThemeSwitcherLabel>
                  pick a {themeSwitcherMode} color:
                </ThemeSwitcherLabel>
                <ThemeSwitcherContent>
                  {colorsAsArray.map((color) => (
                    <ThemeButton
                      key={color.key}
                      style={{ marginRight: 18, marginBottom: 18 }}
                      onClick={() => handleThemeColorSwitch(color.value)}
                    >
                      <ThemeDot color={color.value}></ThemeDot>
                    </ThemeButton>
                  ))}
                </ThemeSwitcherContent>
              </ThemeSwitcherContainer>
            )}
          </ThemeModalContainer>
        </Modal>
      )}
    </React.Fragment>
  );
};

export { ThemeModal };
