import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  padding: 24px;
  color: ${({ theme }) => theme.text};
`;

export const HomeTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #4a4b4c;
  margin-bottom: 12px;
`;

export const HomeSubtitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  color: #5a5b5c;
  margin-bottom: 12px;
`;

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  padding: 12px;
  border-radius: 8px;
  background-color: white;
`;

export const HomeSectionTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  padding-bottom: 4px;
`;

export const HomeSectionContent = styled.span``;
