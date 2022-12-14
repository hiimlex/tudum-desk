import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  INewNote,
  NotesService,
  RootState,
  useModal,
} from "../../../core";
import { fetchNotes } from "../../../core/store/slicers";
import {
  ColorPicker,
  ColorPickerContainer,
} from "../../screens/Register/Register.styles";
import {
  NoteModalButton,
  NoteModalColorSelect,
  NoteModalContainer,
  NoteModalGroup,
  NoteModalGroupInput,
  NoteModalGroupLabel,
  NoteModalGroupTextArea,
  NoteModalSubtitle,
} from "./CreateNoteModal.styles";

interface ICreateNoteModalProps {
  id: string;
}

const CreateNoteModal = ({ id }: ICreateNoteModalProps) => {
  const { colors } = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();
  const [color, setColor] = useState<string>("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { hide } = useModal();
  const { destroy } = useModal();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "all" });

  const handleShowColorPicker = () => {
    setShowColorPicker((curr) => !curr);
  };

  const handleSelectColor = (color: string) => {
    setColor(color);
    handleShowColorPicker();
  };

  const onSubmit = async (data: any) => {
    const { title, content } = data;

    if (title && content && color) {
      const newNote: INewNote = {
        color,
        content,
        title,
      };

      try {
        const response = await NotesService.addNote(newNote);

        if (response) {
          dispatch(fetchNotes());
          hide(id);
          destroy(id);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <NoteModalContainer onSubmit={handleSubmit(onSubmit)}>
      <NoteModalSubtitle>
        fill the fields to create a new note
      </NoteModalSubtitle>
      <NoteModalGroup>
        <NoteModalGroupLabel>title *</NoteModalGroupLabel>
        <NoteModalGroupInput
          placeholder="insert the note title"
          {...register("title", {
            required: true,
          })}
        />
      </NoteModalGroup>
      <NoteModalGroup>
        <NoteModalGroupLabel>content *</NoteModalGroupLabel>
        <NoteModalGroupTextArea
          placeholder="insert the note content"
          {...register("content", {
            required: true,
          })}
        />
      </NoteModalGroup>
      <NoteModalColorSelect color={color} onClick={handleShowColorPicker}>
        {color ? "note color" : "select the color note"}
      </NoteModalColorSelect>
      {showColorPicker && (
        <ColorPickerContainer>
          {colors &&
            Object.keys(colors).map((color) => (
              <ColorPicker
                color={color}
                key={color}
                onClick={() => handleSelectColor(colors[color])}
              />
            ))}
        </ColorPickerContainer>
      )}
      <NoteModalButton
        type="submit"
        disabled={!isValid || !color}
        className={!isValid || !color ? "disabled" : ""}
      >
        CREATE
      </NoteModalButton>
    </NoteModalContainer>
  );
};

export { CreateNoteModal };
