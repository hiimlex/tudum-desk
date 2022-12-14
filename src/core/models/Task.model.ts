export interface ITodo {
  title: string;
  done: boolean;
  owner: any;
  doneDate?: Date;
  _id: string;
}

export interface ITask {
  owner: any;
  todos: ITodo[];
}

export interface INewTodo {
  title: string;
}
