import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 24px;
  color: ${({ theme }) => theme.text};
  margin-top: 82px;
`;

export const ProfileCard = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  background: ${({ theme }) => theme.background};
  border-radius: 12px;
  margin: 12px 0;
`;

export const ProfileTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1px;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.textLighter};

  .dot {
    color: ${({ theme }) => theme.secondary};
  }
  margin-bottom: 12px;
`;

export const ProfileSubtitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const ProfileName = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const ProfileUsername = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.textLighter};
  font-style: italic;
`;

export const ProfileDate = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.textLighter};
`;
