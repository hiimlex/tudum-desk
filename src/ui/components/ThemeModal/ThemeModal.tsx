import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AuthService, RootState } from "../../../core";
import { setTheme } from "../../../core/store/slicers";
import {
  ColorPicker,
  ColorPickerContainer,
} from "../../screens/Register/Register.styles";
import {
  ThemeModalContainer,
  ThemeModalSelect,
  ThemeModalSelectContainer,
  ThemeModalSubtitle,
} from "./ThemeModal.styles";

type ThemeColorMode = "primary" | "secondary";

const ThemeModal = () => {
  const [colorMode, setColorMode] = useState<ThemeColorMode>("primary");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colors, primary, secondary } = useSelector(
    (state: RootState) => state.theme.theme
  );
  const user = useSelector((state: RootState) => state.user.user);

  const dispatch = useDispatch();

  const handleColorPicker = (mode: ThemeColorMode) => {
    setColorMode(mode);
    setShowColorPicker(true);
  };

  const handleSelectColor = async (color: string) => {
    try {
      const colorObj: any = {};
      colorObj[colorMode] = color;

      if (user) {
        const res = await AuthService.updateUser({
          theme: { ...user.theme, ...colorObj },
        });

        if (res) {
          dispatch(setTheme(colorObj));
          setShowColorPicker(false);
        }
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <ThemeModalContainer>
      <ThemeModalSubtitle>set your theme colors</ThemeModalSubtitle>
      <ThemeModalSelectContainer>
        <ThemeModalSelect
          color={primary}
          onClick={() => handleColorPicker("primary")}
          role="button"
          selected={colorMode === "primary"}
        >
          primary
        </ThemeModalSelect>
        <ThemeModalSelect
          color={secondary}
          selected={colorMode === "secondary"}
          onClick={() => handleColorPicker("secondary")}
          role="button"
        >
          secondary
        </ThemeModalSelect>
      </ThemeModalSelectContainer>
      {showColorPicker && (
        <ColorPickerContainer>
          {colors &&
            Object.keys(colors).map((color) => (
              <ColorPicker
                color={color}
                key={color}
                onClick={() => handleSelectColor(colors[color])}
              />
            ))}
        </ColorPickerContainer>
      )}
    </ThemeModalContainer>
  );
};

export { ThemeModal };
