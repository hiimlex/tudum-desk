import { favoriteById } from "../../../core/store/slicers";
import {
  NoteAction,
  NoteContainer,
  NoteContent,
  NoteFooter,
  NoteTitle,
} from "./Note.styles";

import { MdDelete, MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NotesService, RootState } from "../../../core";

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
  const dispatch = useDispatch();

  const handleFavorite = async () => {
    try {
      const res = await NotesService.favoriteById(id);

      if (res.status === 204) {
        dispatch(favoriteById(id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {};

  return (
    <NoteContainer className="tudum-note" color={color}>
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
          <MdDelete size={18} color={theme.colors.gray}></MdDelete>
        </NoteAction>
      </NoteFooter>
    </NoteContainer>
  );
};

export { Note };
