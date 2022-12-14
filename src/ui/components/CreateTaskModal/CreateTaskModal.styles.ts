import styled from "styled-components";
import { LoginButton } from "../../screens/Login/Login.styles";

export const TaskModalContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.textLighter};
`;

export const TaskModalSubtitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const TaskModalGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const TaskModalLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 2px;
`;

export const TaskModalInput = styled.input`
  width: 100%;
  margin-bottom: 8px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  padding: 8px 12px;
  font-size: 14px;
`;

export const TaskModalButton = LoginButton;
