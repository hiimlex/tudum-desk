import styled, { DefaultTheme, keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const animateToLeft = keyframes`
    from {
      right: 24px;
      bottom: 24px;
    }
    to {
      right: 104px;
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
      bottom: 104px;
    }
`;

export const ShareButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  position: absolute;
  bottom: 24px;
  right: 24px;
  box-shadow: 2px 2px 12px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ActionButtonContainer = styled.div<{
  bottom: number;
  right: number;
  color: keyof DefaultTheme;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: absolute;
  bottom: ${({ bottom }) => bottom + "px"};
  right: ${({ right }) => right + "px"};
  background-color: ${({ theme, color }) => theme[color]};
  box-shadow: 2px 2px 12px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  animation: ${({ right, bottom }) =>
      right > bottom ? animateToLeft : animateToTop}
    0.2s ease-in-out forwards;

  &.hide-animation {
    animation: ${fadeOut} 0.2s ease-in-out forwards;
  }

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
