import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../core";
import { setTheme } from "../../../core/store/slicers";
import { AppBar, HeaderLogo } from "../../components";
import {
  ColorPicker,
  ColorPickerContainer,
  RegisterButton,
  RegisterContainer,
  RegisterContent,
  RegisterFooter,
  RegisterFooterLink,
  RegisterForm,
  RegisterHeader,
  RegisterInput,
  RegisterLogo,
  RegisterSubtitle,
  RegisterThemeContainer,
  RegisterThemeLabel,
  RegisterThemeSelect,
  RegisterThemeSelectContainer,
} from "./Register.styles";

const Register = () => {
  const { colors, primary, secondary } = useSelector(
    (state: RootState) => state.theme.theme
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    primary,
    secondary,
  });
  const [showColors, setShowColors] = useState(false);
  const [colorSelector, setColorSelector] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setForm({ ...form, [field]: event.target.value });
  };

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  const handleColorSelector = (type: string) => {
    setShowColors(true);
    setColorSelector(type);
  };

  const handleSelectColor = (color: string) => {
    const colorObj: any = {};
    colorObj[colorSelector] = color;
    setForm({ ...form, ...colorObj });

    dispatch(setTheme({ ...colorObj }));
    setShowColors(false);
  };

  const handleRegister = () => {
    try {
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <RegisterContainer style={{ marginTop: 124, marginBottom: 124 }}>
      <RegisterContent>
        <AppBar />
        <RegisterLogo>
          <HeaderLogo />
        </RegisterLogo>
        <RegisterHeader>
          <RegisterSubtitle>
            fill the fields to create a new user.
          </RegisterSubtitle>
        </RegisterHeader>
        <RegisterForm>
          <RegisterInput
            onChange={(e) => handleInputChange(e, "name")}
            type="text"
            autoComplete="off"
            placeholder="name"
          />
          <RegisterInput
            onChange={(e) => handleInputChange(e, "username")}
            type="text"
            autoComplete="off"
            placeholder="username"
          />
          <RegisterInput
            onChange={(e) => handleInputChange(e, "password")}
            type="password"
            placeholder="password"
            autoComplete="off"
          />
          <RegisterInput
            onChange={(e) => handleInputChange(e, "confirmPassword")}
            type="password"
            autoComplete="off"
            placeholder="confirm password"
          />
          <RegisterInput
            onChange={(e) => handleInputChange(e, "email")}
            type="email"
            placeholder="e-mail"
            autoComplete="off"
          />
          <RegisterThemeContainer>
            <RegisterThemeLabel>set your theme colors</RegisterThemeLabel>
            <RegisterThemeSelectContainer>
              <RegisterThemeSelect
                color={form.primary}
                onClick={() => handleColorSelector("primary")}
                selected={colorSelector === "primary"}
              >
                primary
              </RegisterThemeSelect>
              <RegisterThemeSelect
                color={form.secondary}
                selected={colorSelector === "secondary"}
                onClick={() => handleColorSelector("secondary")}
              >
                secondary
              </RegisterThemeSelect>
            </RegisterThemeSelectContainer>
            {showColors && (
              <ColorPickerContainer>
                {colors &&
                  Object.keys(colors).map((color) => (
                    <ColorPicker
                      key={color}
                      color={color}
                      onClick={() => handleSelectColor(colors[color])}
                    />
                  ))}
              </ColorPickerContainer>
            )}
          </RegisterThemeContainer>
          <RegisterButton onClick={handleRegister} type="button">
            Register
          </RegisterButton>
        </RegisterForm>
        <RegisterFooter>
          <span>or</span>
          <RegisterFooterLink onClick={handleNavigateToLogin}>
            LOGIN
          </RegisterFooterLink>
        </RegisterFooter>
      </RegisterContent>
    </RegisterContainer>
  );
};

export { Register };
