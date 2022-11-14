import styled from "styled-components";

export const NotesContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  padding: 24px;
  color: ${({ theme }) => theme.text};
`;

export const NotesTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #4a4b4c;
  margin-bottom: 12px;
`;

export const NotesSubtitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  color: #5a5b5c;
  margin-bottom: 12px;
`;

export const NotesPanelSection = styled.div`
  padding: 12px;
  background: white;
  border-radius: 12px;
  display: flex;
  margin: 12px 0;
`;
export const NotesPanelTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
export const NotesPanelContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
