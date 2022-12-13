import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthService, NewUser, RootState } from "../../../core";
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

import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "all" });

  const { colors, primary, secondary } = useSelector(
    (state: RootState) => state.theme.theme
  );
  const [_usertheme, setUserTheme] = useState<{
    primary: string;
    secondary: string;
  }>({
    primary,
    secondary,
  });

  const [showColors, setShowColors] = useState(false);
  const [colorSelector, setColorSelector] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    setUserTheme((curr) => ({ ...curr, ...colorObj }));
    dispatch(setTheme({ ...colorObj }));
    setShowColors(false);
  };

  const handleRegister = async (data: any) => {
    try {
      const user: NewUser = {
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
        theme: _usertheme,
      };

      const response = await AuthService.register(user);

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <RegisterContainer style={{ marginTop: 64, marginBottom: 64 }}>
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
        <RegisterForm onSubmit={handleSubmit(handleRegister)}>
          <RegisterInput
            type="text"
            autoComplete="off"
            placeholder="name"
            {...register("name", { required: true })}
          />
          <RegisterInput
            id="username"
            type="text"
            autoComplete="off"
            placeholder="username"
            {...register("username", { required: true })}
          />
          <RegisterInput
            id="password"
            type="password"
            placeholder="password"
            autoComplete="off"
            {...register("password", { required: true, minLength: 6 })}
          />
          <RegisterInput
            id="email"
            type="email"
            placeholder="e-mail"
            autoComplete="off"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <RegisterThemeContainer>
            <RegisterThemeLabel>set your theme colors</RegisterThemeLabel>
            <RegisterThemeSelectContainer>
              <RegisterThemeSelect
                color={primary}
                onClick={() => handleColorSelector("primary")}
                selected={colorSelector === "primary"}
              >
                primary
              </RegisterThemeSelect>
              <RegisterThemeSelect
                color={secondary}
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
          <RegisterButton
            type="submit"
            disabled={!isValid}
            className={!isValid ? "disabled" : ""}
          >
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
