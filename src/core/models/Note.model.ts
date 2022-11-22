import { ColorsType } from "../store/slicers";

export interface Note {
  id: string;
  title: string;
  content: string;
  color: ColorsType;
  createdAt: string;
  updatedAt?: string;
  favorite: boolean;
}
