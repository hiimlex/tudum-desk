import { useState } from "react";
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

import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthService } from "../../../core";
import { setUser } from "../../../core/store/slicers";
import { AppBar } from "../../components/AppBar";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (login && password) {
      try {
        const { data } = await AuthService.login(login, password);

        if (data.token) {
          window.localStorage.setItem("auth-token", data.token);

          const { data: user } = await AuthService.getCurrentUser();

          window.localStorage.setItem("user", JSON.stringify(user));

          dispatch(setUser(user));

          navigate("/");
        }
      } catch (err) {
        if (err instanceof AxiosError) {
        }
      }
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
        <LoginForm>
          <LoginInput
            onChange={handleLoginOnChange}
            type="text"
            autoComplete="off"
            placeholder="login"
          />
          <LoginInput
            onChange={handlePasswordOnChange}
            type="password"
            autoComplete="off"
            placeholder="password"
          />
          <LoginButton type="button" onClick={handleLogin}>
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
