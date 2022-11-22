import { ModalProps } from "../../../ui";
import store from "../../store";
import {
  createModal,
  hideModalById,
  removeModalById,
  showModalById,
} from "../../store/slicers/Modal.slicer";

class ModalService {
  create(modal: ModalProps): void {
    store.dispatch(createModal(modal));
  }

  removeModalById(id: string): void {
    store.dispatch(removeModalById(id));
  }

  showModalById(id: string): void {
    store.dispatch(showModalById(id));
  }

  hideModalById(id: string): void {
    store.dispatch(hideModalById(id));
  }
}

export default new ModalService();
