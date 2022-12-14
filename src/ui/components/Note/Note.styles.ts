import styled, { DefaultTheme } from "styled-components";

export const NoteContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  background: ${({ color }) => color + "66"};
  padding: 12px;
  border-radius: 12px;
  color: ${({ theme }) => theme.text};
  flex: 0.3;
  min-width: 180px;

  @media (max-width: 768px) {
    width: 100% !important;
  }
`;
export const NoteTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1.1px;
`;

export const NoteContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: justify;
  margin: 2px 0;
  word-wrap: break-word;
  word-break: break-all;
`;

export const NoteFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;

export const NoteAction = styled.div<{ color?: keyof DefaultTheme }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 6px;
  height: fit-content;
  width: fit-content;
  cursor: pointer;
  color: ${({ theme, color }) => (color ? theme[color] : theme.textLighter)};
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
