import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.text};
`;

export const LoginContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 244px;
`;

export const LoginLogo = styled.div`
  display: flex;
  align-items: center;

  * {
    font-size: 42px;
  }
`;

export const LoginHeader = styled.header`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 12px;
  text-align: center;
`;

export const LoginSubtitle = styled.h4`
  font-weight: 400;
  font-size: 14px;
  margin-top: 4px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;
`;

export const LoginInput = styled.input`
  width: 100%;
  margin-bottom: 8px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  padding: 8px 12px;
  font-size: 14px;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 4px;
  border: none;
  background: ${({ theme }) => theme.secondary};
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.textLighter};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  margin: 12px 0;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.05);
  }

  &.disabled {
    background: #e0e0e0;
    cursor: not-allowed;

    &:hover {
      transform: scale(1);
    }
  }
`;

export const LoginFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LoginFooterLink = styled.span`
  margin-top: 8px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    font-weight: 600;
  }
`;
