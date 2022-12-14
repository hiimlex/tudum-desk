export interface INote {
  _id: string;
  title: string;
  content: string;
  color: string;
  favorite: boolean;
  owner: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt?: string;
}

export interface INewNote {
  title: string;
  content: string;
  color: string;
}
