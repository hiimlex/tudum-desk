import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NotesService, RootState } from "../../../core";
import { setNotes } from "../../../core/store/slicers";
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
  const dispatch = useDispatch();

  const getNotes = useCallback(async () => {
    try {
      const { data } = await NotesService.getNotes();

      if (data) {
        dispatch(setNotes(data));
      }
    } catch (err: any) {
      dispatch(setNotes([]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NotesContainer>
      <NotesTitle>
        my<span className="dot">•</span>
        <strong>notes</strong>
      </NotesTitle>
      <NotesSubtitle>share your notes</NotesSubtitle>
      <NotesPanelSection>
        <NotesPanelTitle>favorites</NotesPanelTitle>
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
          <span>no favorite notes</span>
        )}
      </NotesPanelSection>
      <NotesPanelSection>
        <NotesPanelTitle>all</NotesPanelTitle>
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
          <span>no notes</span>
        )}
      </NotesPanelSection>
    </NotesContainer>
  );
};

export { Notes };
