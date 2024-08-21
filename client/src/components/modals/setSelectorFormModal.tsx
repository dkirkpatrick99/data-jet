import GenericModal from "../ui/genericModal";
import SetSelectorForm from "../form/setSelectorForm";
import { useAppContext } from "../../context/appContext";

function SetSelectorFormModal() {
  const { ModalState } = useAppContext();
  const { setSelectorModal } = ModalState;
  const { setOpenSetSelectorModal, openSetSelectorModal } = setSelectorModal;

  return (
    <>
      <GenericModal openModal={openSetSelectorModal} setOpenModal={setOpenSetSelectorModal} >
        <SetSelectorForm />
      </GenericModal>
    </>
  )
}

export default SetSelectorFormModal;
