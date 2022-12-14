import styled from "styled-components";

export const AppMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  width: 100%;
  -webkit-app-region: no-drag;
`;

export const DraggableArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  height: 24px;
  -webkit-app-region: drag;
`;

export const AppMenuButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: fit-content;
`;

export const AppButton = styled.span<{ close?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  height: 24px;
  width: 40px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  ${({ close }) =>
    close && `&:hover { background: rgba(255, 0, 0, 0.5); color: white; }`}
`;
