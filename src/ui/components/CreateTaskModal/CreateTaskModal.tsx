import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch, TasksService, useModal } from "../../../core";
import { fetchTodos } from "../../../core/store/slicers";
import {
  TaskModalButton,
  TaskModalContainer,
  TaskModalGroup,
  TaskModalInput,
  TaskModalLabel,
  TaskModalSubtitle,
} from "./CreateTaskModal.styles";

interface ICreateTaskModalProps {
  id: string;
}

const CreateTaskModal = ({ id }: ICreateTaskModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "all" });
  const dispatch = useDispatch<AppDispatch>();
  const { hide, destroy } = useModal();

  const onSubmit = async (data: any) => {
    const { title } = data;

    if (title) {
      try {
        const response = await TasksService.createTodo({ title });

        if (response.status === 204 || response.status === 201) {
          dispatch(fetchTodos());
          hide(id);
          destroy(id);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <TaskModalContainer onSubmit={handleSubmit(onSubmit)}>
      <TaskModalSubtitle>
        fill the fields to create a new todo
      </TaskModalSubtitle>
      <TaskModalGroup>
        <TaskModalLabel>title</TaskModalLabel>
        <TaskModalInput
          placeholder="insert what you have to do"
          {...register("title", { required: true })}
        ></TaskModalInput>
      </TaskModalGroup>
      <TaskModalButton
        type="submit"
        disabled={!isValid}
        className={!isValid ? "disabled" : ""}
      >
        create
      </TaskModalButton>
    </TaskModalContainer>
  );
};

export { CreateTaskModal };
