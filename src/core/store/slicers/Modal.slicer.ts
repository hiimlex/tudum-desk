import {
  ActionCreatorWithPayload,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { GenericAction } from "..";
import { IModalProps } from "../../../ui";

interface ModalReducerState {
  modals: IModalProps[];
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
    createModal: (state, action: GenericAction<IModalProps>) => {
      const hasModal = state.modals.find((el) => el.id === action.payload.id);

      if (hasModal) {
        hasModal.show = true;
        hasModal.zIndex = state.zIndex;
      } else {
        action.payload.zIndex = state.zIndex;
        action.payload.show = true;
        state.modals.push(action.payload);
      }

      state.zIndex++;
    },
    showModalById: (state, action: GenericAction<string>) => {
      const hasModal = state.modals.find((el) => el.id === action.payload);

      if (hasModal) {
        hasModal.show = true;
        hasModal.zIndex = state.zIndex;

        state.zIndex++;
      }
    },
    hideModalById: (state, action: GenericAction<string>) => {
      const hasModal = state.modals.find((el) => el.id === action.payload);

      if (hasModal) {
        hasModal.show = false;
      }
    },
    destroyModalById: (state, action: GenericAction<string>) => {
      const hasModal = state.modals.find((el) => el.id === action.payload);

      if (hasModal) {
        state.modals = state.modals.filter(
          (modal) => modal.id !== action.payload
        );
      }
    },
  },
});

const createModal: ActionCreatorWithPayload<IModalProps> = modalSlice.actions
  .createModal as any;

const destroyModalById: ActionCreatorWithPayload<string> = modalSlice.actions
  .destroyModalById as any;

const showModalById: ActionCreatorWithPayload<string> = modalSlice.actions
  .showModalById as any;

const hideModalById: ActionCreatorWithPayload<string> = modalSlice.actions
  .hideModalById as any;

const modalReducer = modalSlice.reducer;

export {
  modalReducer,
  createModal,
  destroyModalById,
  showModalById,
  hideModalById,
};
