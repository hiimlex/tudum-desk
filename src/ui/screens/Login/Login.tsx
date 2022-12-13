import { HeaderLogo } from "../../components";
import {
  LoginButton,
  LoginContainer,
  LoginContent,
  LoginFooter,
  LoginFooterLink,
  LoginForm,
  LoginHeader,
  LoginInput,
  LoginLogo,
  LoginSubtitle,
} from "./Login.styles";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthService } from "../../../core";
import { setTheme, setUser } from "../../../core/store/slicers";
import { AppBar } from "../../components/AppBar";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data: any) => {
    const { login, password } = data;

    if (login && password) {
      try {
        const { data } = await AuthService.login(login, password);

        if (data.token) {
          window.localStorage.setItem("auth-token", data.token);

          const { data: user } = await AuthService.getCurrentUser();

          window.localStorage.setItem("user", JSON.stringify(user));

          dispatch(setUser(user));

          if (user.theme) {
            dispatch(
              setTheme({
                primary: user.theme.primary,
                secondary: user.theme.secondary,
              })
            );
          }

          navigate("/");
        }
      } catch (err) {}
    }
  };

  const handleNavigateToRegister = () => {
    navigate("/register");
  };

  const user = window.localStorage.getItem("user");

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <LoginContainer>
      <AppBar />
      <LoginContent>
        <LoginLogo>
          <HeaderLogo />
        </LoginLogo>
        <LoginHeader>
          <LoginSubtitle>insert your credentials to sign up</LoginSubtitle>
        </LoginHeader>
        <LoginForm onSubmit={handleSubmit(handleLogin)}>
          <LoginInput
            type="text"
            autoComplete="off"
            placeholder="login"
            {...register("login", { required: true })}
          />
          <LoginInput
            type="password"
            autoComplete="off"
            placeholder="password"
            {...register("password", { required: true })}
          />
          <LoginButton
            type="submit"
            disabled={!isValid}
            className={!isValid ? "disabled" : ""}
          >
            Login
          </LoginButton>
        </LoginForm>
        <LoginFooter>
          <span>or</span>
          <LoginFooterLink onClick={handleNavigateToRegister}>
            REGISTER
          </LoginFooterLink>
        </LoginFooter>
      </LoginContent>
    </LoginContainer>
  );
};

export { Login };
