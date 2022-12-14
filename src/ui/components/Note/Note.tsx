import {
  NoteAction,
  NoteContainer,
  NoteContent,
  NoteFooter,
  NoteTitle,
} from "./Note.styles";

import { MdOutlineDelete, MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, NotesService, RootState } from "../../../core";
import { fetchNotes } from "../../../core/store/slicers";

interface NoteProps {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  color: string;
  favorite?: boolean;
  width?: React.CSSProperties["width"];
}

const Note = ({
  id,
  favorite,
  title,
  content,
  width = "240px",
  color,
}: NoteProps) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  const handleFavorite = async () => {
    try {
      const res = await NotesService.favoriteById(id);

      if (res.status === 204) {
        dispatch(fetchNotes());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await NotesService.removeNoteById(id);

      if (res.status === 204) {
        dispatch(fetchNotes());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NoteContainer className="tudum-note" color={color} style={{ width }}>
      <NoteTitle>{title}</NoteTitle>
      <NoteContent>{content}</NoteContent>
      <NoteFooter>
        <NoteAction role="button" onClick={handleFavorite}>
          {favorite ? (
            <MdFavorite size={18} color={theme.colors.red}></MdFavorite>
          ) : (
            <MdOutlineFavoriteBorder
              size={18}
              color={theme.colors.red}
            ></MdOutlineFavoriteBorder>
          )}
        </NoteAction>
        <NoteAction role="button" onClick={handleDelete}>
          <MdOutlineDelete size={18} color={theme.colors.gray}></MdOutlineDelete>
        </NoteAction>
      </NoteFooter>
    </NoteContainer>
  );
};

export { Note };
