import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core";
import { fetchTodos } from "../../../core/store/slicers";
import { Task } from "../../components";
import {
  TasksContainer,
  TasksList,
  TasksListTitle,
  TasksSubtitle,
  TasksTitle,
} from "./Tasks.styles";

const Tasks = () => {
  const { todos } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const getTodos = useCallback(() => {
    dispatch(fetchTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TasksContainer>
      <TasksTitle>
        my<span className="dot">•</span>
        <strong>tasks</strong>
      </TasksTitle>
      <TasksSubtitle>check yours tasks</TasksSubtitle>
      <TasksList>
        <TasksListTitle>all</TasksListTitle>
        {todos.length > 0 ? (
          todos.map(({ _id, title, done, doneDate }) => (
            <Task
              id={_id}
              key={_id}
              title={title}
              doneDate={doneDate}
              done={done}
            />
          ))
        ) : (
          <div>no todos</div>
        )}
      </TasksList>
      <TasksList>
        <TasksListTitle>done</TasksListTitle>
        {todos.filter((todo) => todo.done).length > 0 ? (
          todos.map(({ _id, title, done, doneDate }) => {
            if (!done) {
              return null;
            }

            return (
              <Task
                id={_id}
                key={_id}
                title={title}
                done={done}
                doneDate={doneDate}
              />
            );
          })
        ) : (
          <div>no done todos</div>
        )}
      </TasksList>
    </TasksContainer>
  );
};

export { Tasks };
