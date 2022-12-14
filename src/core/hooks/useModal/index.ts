import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IModalProps } from "../../../ui";
import { RootState } from "../../store";
import {
  createModal,
  destroyModalById,
  hideModalById,
  showModalById,
} from "../../store/slicers/Modal.slicer";

const useModal = () => {
  const dispatch = useDispatch();
  const modals = useSelector((state: RootState) => state.modal.modals);

  const all = (): IModalProps[] => {
    return modals;
  };

  const hasModal = (id: string): boolean => {
    return modals.some((modal) => modal.id === id);
  };

  const create = (modal: IModalProps): IModalProps => {
    dispatch(createModal(modal));

    return modal;
  };

  const show = (id: string) => {
    dispatch(showModalById(id));
  };

  const hide = (id: string) => {
    dispatch(hideModalById(id));
  };

  const destroy = (id: string) => {
    dispatch(destroyModalById(id));
  };

  return {
    create,
    show,
    hide,
    destroy,
    all,
    hasModal,
  };
};

export { useModal };
