import {
  NotesContainer,
  NotesPanelContent,
  NotesPanelSection,
  NotesPanelTitle,
  NotesSubtitle,
  NotesTitle,
} from "./Notes.styles";

const Notes = () => {
  return (
    <NotesContainer>
      <NotesTitle>My notes</NotesTitle>
      <NotesSubtitle>Here you can organize your notes ideas.</NotesSubtitle>
      <NotesPanelSection>
        <NotesPanelTitle>Recent</NotesPanelTitle>
        <NotesPanelContent></NotesPanelContent>
      </NotesPanelSection>
      <NotesPanelSection>
        <NotesPanelTitle>All</NotesPanelTitle>
        <NotesPanelContent></NotesPanelContent>
      </NotesPanelSection>
    </NotesContainer>
  );
};

export { Notes };
