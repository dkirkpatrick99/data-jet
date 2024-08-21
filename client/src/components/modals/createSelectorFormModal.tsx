import GenericModal from "../ui/genericModal";
import { useAppContext } from "../../context/appContext";
import CreateSelectorForm from "../form/createSelectorForm";

function CreateSelectorFormModal() {
  const { ModalState } = useAppContext();
  const { createSelectorModal } = ModalState;
  const { setOpenCreateSelectorModal, openCreateSelectorModal } = createSelectorModal;

  return (
    <>
      <GenericModal openModal={openCreateSelectorModal} setOpenModal={setOpenCreateSelectorModal} >
        <CreateSelectorForm />
      </GenericModal>
    </>
  )
};

export default CreateSelectorFormModal;
