import { ColorsType } from "../store/slicers";

export interface Note {
  _id: string;
  title: string;
  content: string;
  color: ColorsType;
  favorite: boolean;
  owner: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt?: string;
}
