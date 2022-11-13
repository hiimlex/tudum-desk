import styled from "styled-components";

export const HeaderLogoText = styled.h1`
  font-size: 32px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 2px;
`;

export const HeaderLogoDot = styled.span`
  color: ${({ theme }) => theme.secondary};
`;
