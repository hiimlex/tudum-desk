import styled from "styled-components";

export const TasksContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  color: ${({ theme }) => theme.text};
  margin-top: 82px;
`;

export const TasksTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.textLighter};
  text-align: center;

  .dot {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const TasksSubtitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const TasksList = styled.div`
  width: 100%;
  flex-direction: column;
  background: white;
  padding: 12px;
  border-radius: 12px;
  max-width: 620px;

  margin: 12px 0;
`;

export const TasksListTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 4px;
`;
