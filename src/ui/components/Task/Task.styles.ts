import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin: 8px 0;
  color: ${({ theme }) => theme.textLighter};
`;

export const TaskContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TaskCheck = styled.input`
  margin-right: 8px;
  cursor: inherit;
`;

export const TaskTitle = styled.span`
  font-size: 16px;
  font-weight: 500;

  &.checked {
    text-decoration: line-through;
    color: ${({ theme }) => theme.textLighter + "80"};
  }

  width: 100%;
`;

export const TaskDoneDate = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textLighter + "80"};
  cursor: default;
`;
