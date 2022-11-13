import styled from "styled-components";

export const ThemeModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThemeButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ThemeSwitcherContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  margin-top: 12px;
`;

export const ThemeSwitcherContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

export const ThemeSwitcherLabel = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
`;

export const ThemeButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ThemeDot = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  background: ${({ color }) => color};
`;
