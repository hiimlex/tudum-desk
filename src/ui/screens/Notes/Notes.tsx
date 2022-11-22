import { useSelector } from "react-redux";
import { RootState } from "../../../core";
import { Note } from "../../components";
import {
  NotesContainer,
  NotesPanelContent,
  NotesPanelSection,
  NotesPanelTitle,
  NotesSubtitle,
  NotesTitle,
} from "./Notes.styles";

const Notes = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  return (
    <NotesContainer>
      <NotesTitle>My notes</NotesTitle>
      <NotesSubtitle>Share your notes.</NotesSubtitle>
      <NotesPanelSection>
        <NotesPanelTitle>Favorites</NotesPanelTitle>
        <NotesPanelContent>
          {notes
            .filter((note) => note.favorite)
            .map((note) => (
              <Note
                key={note.id}
                color={note.color}
                content={note.content}
                id={note.id}
                title={note.title}
                createdAt={note.createdAt}
                updatedAt={note.updatedAt}
                favorite={note.favorite}
              />
            ))}
        </NotesPanelContent>
      </NotesPanelSection>
      <NotesPanelSection>
        <NotesPanelTitle>All</NotesPanelTitle>
        {notes.length > 0 ? (
          <NotesPanelContent>
            {notes &&
              notes.map((note) => (
                <Note
                  key={note.id}
                  color={note.color}
                  content={note.content}
                  id={note.id}
                  title={note.title}
                  createdAt={note.createdAt}
                  updatedAt={note.updatedAt}
                  favorite={note.favorite}
                />
              ))}
          </NotesPanelContent>
        ) : (
          <div>No notes</div>
        )}
      </NotesPanelSection>
    </NotesContainer>
  );
};

export { Notes };
