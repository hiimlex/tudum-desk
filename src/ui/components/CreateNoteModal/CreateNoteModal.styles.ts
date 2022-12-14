import styled from "styled-components";
import { LoginButton } from "../../screens/Login/Login.styles";

export const NoteModalContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textLighter};
`;

export const NoteModalSubtitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const NoteModalGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const NoteModalColorSelect = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  border-radius: 8px;
  margin-bottom: 12px;

  background: ${({ color }) => (!!color && color) || "#efefef"};
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const NoteModalGroupLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 2px;
`;

export const NoteModalGroupInput = styled.input`
  width: 100%;
  margin-bottom: 8px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  padding: 8px 12px;
  font-size: 14px;
`;

export const NoteModalGroupTextArea = styled.textarea`
  width: 100%;
  height: 88px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  padding: 8px 12px;
  font-size: 14px;
  resize: none;
`;

export const NoteModalButton = LoginButton;
