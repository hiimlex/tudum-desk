import styled, { css, DefaultTheme, keyframes } from "styled-components";

export const ShareButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  position: absolute;
  bottom: 24px;
  right: 24px;
  box-shadow: 2px 2px 12px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

export const ActionButtonContainer = styled.div<{
  bottom: number;
  right: number;
  color: keyof DefaultTheme;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  bottom: ${({ bottom }) => bottom + "px"};
  right: ${({ right }) => right + "px"};
  background-color: ${({ theme, color }) => theme[color]};
  box-shadow: 2px 2px 12px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};

  animation: ${({ right, bottom }) =>
      right > bottom ? animateToLeft : animateToTop}
    0.2s ease-in-out forwards;
`;

const animateToLeft = keyframes`
    from {
      right: 24px;
      bottom: 24px;
    }
    to {
      right: 84px;
      bottom: 24px;
    }
`;

const animateToTop = keyframes`
    from {
      right: 24px;
      bottom: 24px;
    }
    to {
      right: 24px;
      bottom: 84px;
    }
`;
