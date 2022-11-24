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
        {notes.filter((note) => note.favorite).length > 0 ? (
          <NotesPanelContent>
            {notes
              .filter((note) => note.favorite)
              .map((note) => (
                <Note
                  key={note._id}
                  color={note.color}
                  content={note.content}
                  id={note._id}
                  title={note.title}
                  createdAt={note.createdAt}
                  updatedAt={note.updatedAt}
                  favorite={note.favorite}
                />
              ))}
          </NotesPanelContent>
        ) : (
          <span>No favorite notes</span>
        )}
      </NotesPanelSection>
      <NotesPanelSection>
        <NotesPanelTitle>All</NotesPanelTitle>
        {notes.length > 0 ? (
          <NotesPanelContent>
            {notes &&
              notes.map((note) => (
                <Note
                  key={note._id}
                  color={note.color}
                  content={note.content}
                  id={note._id}
                  title={note.title}
                  createdAt={note.createdAt}
                  updatedAt={note.updatedAt}
                  favorite={note.favorite}
                />
              ))}
          </NotesPanelContent>
        ) : (
          <span>No notes</span>
        )}
      </NotesPanelSection>
    </NotesContainer>
  );
};

export { Notes };
