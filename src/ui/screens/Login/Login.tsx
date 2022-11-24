import { useState, useMemo } from "react";
import { HeaderLogo } from "../../components";
import {
  LoginButton,
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginHeader,
  LoginInput,
  LoginLogo,
  LoginSubtitle,
  LoginTitle,
} from "./styles";

import axios from "axios";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const formDisabled = useMemo(() => password.length > 3, [login, password]);

  const handleLoginOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (login && password) {
      try {
        const data = await axios.post(
          "https://tudum-api.vercel.app/api/auth/login",
          {
            login,
            password,
          }
        );
        console.log(data);
      } catch (err: any) {
        console.log(err);
      }
    }
  };

  return (
    <LoginContainer>
      <LoginContent>
        <LoginLogo>
          <HeaderLogo />
        </LoginLogo>
        <LoginHeader>
          <LoginTitle>Login</LoginTitle>
          <LoginSubtitle>Insert your credentials to login</LoginSubtitle>
        </LoginHeader>
        <LoginForm>
          <LoginInput
            onChange={handleLoginOnChange}
            type="text"
            placeholder="Login"
          />
          <LoginInput
            onChange={handlePasswordOnChange}
            type="password"
            placeholder="Password"
          />
          <LoginButton
            className={formDisabled ? "disabled" : ""}
            disabled={formDisabled}
            type="button"
            onClick={handleLogin}
          >
            SEND
          </LoginButton>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
};

export { Login };
