import { useDispatch } from "react-redux";
import { AppDispatch, TasksService } from "../../../core";
import { fetchTodos } from "../../../core/store/slicers";
import {
  TaskCheck,
  TaskContainer,
  TaskContent,
  TaskDoneDate,
  TaskTitle,
} from "./Task.styles";

interface ITaskProps {
  id: string;
  title: string;
  done: boolean;
  doneDate?: Date;
}

const Task = ({ id, title, done, doneDate }: ITaskProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCheck = async () => {
    try {
      const response = await TasksService.doneTodo(!done, id);

      if (response) {
        dispatch(fetchTodos());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContainer className={done ? "checked" : ""}>
      <TaskContent>
        <TaskCheck
          type="checkbox"
          onChange={handleCheck}
          checked={done}
        ></TaskCheck>
        <TaskTitle className={done ? "checked" : ""} onClick={handleCheck}>
          {title}
        </TaskTitle>
      </TaskContent>
      {doneDate && (
        <TaskDoneDate>done on {doneDate.toLocaleString()}</TaskDoneDate>
      )}
    </TaskContainer>
  );
};

export { Task };
