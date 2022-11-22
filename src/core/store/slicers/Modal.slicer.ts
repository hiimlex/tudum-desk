import {
  ActionCreatorWithPayload,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { GenericAction } from "..";
import { ModalProps } from "../../../ui";

interface ModalReducerState {
  modals: ModalProps[];
  zIndex: number;
}

const modalSlice = createSlice<
  ModalReducerState,
  SliceCaseReducers<ModalReducerState>
>({
  name: "modals",
  initialState: {
    modals: [],
    zIndex: 0,
  },
  reducers: {
    createModal: (state, action: GenericAction<ModalProps>) => {
      action.payload.zIndex = state.zIndex;
      action.payload.show = true;
      state.modals.push(action.payload);
      state.zIndex++;
    },
    showModalById: (state, action: GenericAction<string>) => {
      state.modals = state.modals.map((modal) => {
        if (modal.id === action.payload) {
          modal.show = true;
          modal.zIndex = state.zIndex;
        }
        return modal;
      });
      state.zIndex++;
    },
    hideModalById: (state, action: GenericAction<string>) => {
      state.modals = state.modals.map((modal) => {
        if (modal.id === action.payload) {
          modal.show = false;
        }

        return modal;
      });
    },
    destroyModalById: (state, action: GenericAction<string>) => {
      state.modals = state.modals.filter(
        (modal) => modal.id !== action.payload
      );
    },
  },
});

const createModal: ActionCreatorWithPayload<ModalProps> = modalSlice.actions
  .createModal as any;

const removeModalById: ActionCreatorWithPayload<string> = modalSlice.actions
  .removeModalById as any;

const showModalById: ActionCreatorWithPayload<string> = modalSlice.actions
  .showModalById as any;

const hideModalById: ActionCreatorWithPayload<string> = modalSlice.actions
  .hideModalById as any;

const modalReducer = modalSlice.reducer;

export {
  modalReducer,
  createModal,
  removeModalById,
  showModalById,
  hideModalById,
};
